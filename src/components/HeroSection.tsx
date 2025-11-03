import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Languages, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { z } from "zod";
import logo from "@/assets/logo_lifelime_l.svg";
import { useWaitlistSubmit } from "@/hooks/useWaitlistSubmit";
import { useToast } from "@/hooks/use-toast";
import WaitlistSuccessModal from "@/components/WaitlistSuccessModal";

// Email validation schema
const emailSchema = z.object({
  email: z.string()
    .trim()
    .nonempty({ message: "Email cannot be empty" })
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" })
});

const HeroSection = () => {
  const { toast } = useToast();
  const getBrowserLanguage = () => {
    const browserLang = navigator.language.split('-')[0].toUpperCase();
    const supportedLangs = ['CZ', 'EN', 'DE', 'ES', 'PL'];
    return supportedLangs.includes(browserLang) ? browserLang : 'EN';
  };

  const [selectedLanguage, setSelectedLanguage] = useState(getBrowserLanguage());
  const [currentView, setCurrentView] = useState<'waitlist' | 'about'>('waitlist');
  const [isClosing, setIsClosing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const { mutate: submitWaitlist, isPending } = useWaitlistSubmit();

  const handleCloseAbout = () => {
    setIsClosing(true);
    setTimeout(() => {
      setCurrentView('waitlist');
      setIsClosing(false);
      setShowModal(false);
    }, 300); // Match animation duration
  };

  // Trigger fade-in animation when About view opens
  useEffect(() => {
    if (currentView === 'about') {
      // Small delay to ensure CSS transition triggers
      setTimeout(() => setShowModal(true), 10);
    }
  }, [currentView]);
  
  const languages = [
    { code: "CZ", name: "Czech" },
    { code: "EN", name: "English" },
    { code: "DE", name: "German" },
    { code: "ES", name: "Spanish" },
    { code: "PL", name: "Polish" },
  ];

  const translations = {
    EN: {
      waitlist: "Waitlist",
      about: "About",
      title: "Preserving your true legacy",
      description: "Your legacy isn't written someday - it's built today. Lifeli.me preserve the moments, thoughts, and lessons that make your story worth remembering.",
      emailPlaceholder: "Enter your email",
      joinButton: "Join Waitlist",
      aboutTitle: "A Personal Promise",
      aboutSubtitle: "From Adam Trnka, Founder of lifeli.me",
      aboutP1: "I grew up with my mom and grandma, trying to piece together who I was from stories, photos in boxes. I'm a father now and everything changed when my son was born.",
      aboutP2: "I found myself filming little videos just for him. Not for social media. Not for likes. For the day he turns 15… 18… 30. I wanted him to know who I really was, how I laughed, what I believed, what mattered to me.",
      aboutP3: "But these pieces of my life and his were scattered everywhere. On phones. Clouds. Old drives. Nothing felt lasting. Nothing felt safe. So I built lifeli.me.",
      aboutP4: "lifeli.me is my answer to a simple but powerful question:",
      aboutP4b: "What do we leave behind - and will it still matter 30... 50... 100... years from now?",
      aboutP5: "It's a place to craft your legacy, one memory at a time. It's built for families—for the quiet, important moments. Births. First steps. Last hugs.",
      aboutP6: "Photos, videos, letters to your future self. Milestones. Your treasures. All organized, preserved, and portable for decades—like a Svalbard Global Seed Vault, only for your memories.",
      aboutP7: "This isn't about going viral. It's about being remembered for who you are and remembering who we are.",
      aboutP8: "I believe every person deserves a place to hold their story. Not just for today, but for generations to come.",
      aboutP9: "That's why I'm building lifeli.me. Not as a product. But as a promise.",
      aboutSignature: "Adam Trnka",
      aboutSignatureTitle: "Founder of lifeli.me",
    },
    CZ: {
      waitlist: "Čekací listina",
      about: "O nás",
      title: "Uchovávání vašeho pravého dědictví",
      description: "Vaše dědictví není napsáno někdy - je budováno dnes. Lifeli.me uchovává okamžiky, myšlenky a lekce, které dělají váš příběh hodný zapamatování.",
      emailPlaceholder: "Zadejte svůj email",
      joinButton: "Připojit se k čekací listině",
      aboutTitle: "Osobní příslib",
      aboutSubtitle: "Od Adama Trnky, zakladatele lifeli.me",
      aboutP1: "Vyrůstal jsem s mámou a babičkou, snažil jsem se poskládat, kdo jsem, z příběhů a fotek v krabicích. Teď jsem otec a všechno se změnilo, když se mi narodil syn.",
      aboutP2: "Začal jsem natáčet malá videa jen pro něj. Ne pro sociální sítě. Ne pro lajky. Pro ten den, kdy mu bude 15... 18... 30. Chtěl jsem, aby věděl, kdo jsem opravdu byl, jak jsem se smál, čemu jsem věřil, na čem mi záleželo.",
      aboutP3: "Ale tyto kousky mého života a jeho byly rozptýlené všude. V telefonech. Cloudech. Starých discích. Nic se necítilo trvalé. Nic se necítilo bezpečné. Tak jsem vytvořil lifeli.me.",
      aboutP4: "lifeli.me je moje odpověď na jednoduchou, ale silnou otázku:",
      aboutP4b: "Co po sobě zanecháme - a bude to ještě důležité za 30... 50... 100... let?",
      aboutP5: "Je to místo pro vytváření vašeho dědictví, jedna vzpomínka najednou. Je to postavené pro rodiny—pro tiché, důležité okamžiky. Narození. První kroky. Poslední objetí.",
      aboutP6: "Fotky, videa, dopisy budoucímu sobě. Milníky. Vaše poklady. Vše organizované, uchované a přenosné po desetiletí—jako globální semenná banka Svalbard, jen pro vaše vzpomínky.",
      aboutP7: "Nejde o to stát se virálním. Jde o to být zapamatován pro to, kdo jste a zapamatovat si, kdo jsme.",
      aboutP8: "Věřím, že každý člověk si zaslouží místo pro svůj příběh. Nejen pro dnes, ale pro budoucí generace.",
      aboutP9: "Proto stavím lifeli.me. Ne jako produkt. Ale jako příslib.",
      aboutSignature: "Adam Trnka",
      aboutSignatureTitle: "Zakladatel lifeli.me",
    },
    DE: {
      waitlist: "Warteliste",
      about: "Über uns",
      title: "Bewahrung Ihres wahren Erbes",
      description: "Ihr Vermächtnis wird nicht irgendwann geschrieben - es wird heute aufgebaut. Lifeli.me bewahrt die Momente, Gedanken und Lektionen, die Ihre Geschichte erinnernswert machen.",
      emailPlaceholder: "Geben Sie Ihre E-Mail ein",
      joinButton: "Der Warteliste beitreten",
      aboutTitle: "Ein persönliches Versprechen",
      aboutSubtitle: "Von Adam Trnka, Gründer von lifeli.me",
      aboutP1: "Ich bin bei meiner Mutter und Großmutter aufgewachsen und versuchte herauszufinden, wer ich war, aus Geschichten und Fotos in Kisten. Ich bin jetzt Vater und alles änderte sich, als mein Sohn geboren wurde.",
      aboutP2: "Ich filmte kleine Videos nur für ihn. Nicht für soziale Medien. Nicht für Likes. Für den Tag, an dem er 15... 18... 30 wird. Ich wollte, dass er weiß, wer ich wirklich war, wie ich lachte, woran ich glaubte, was mir wichtig war.",
      aboutP3: "Aber diese Teile meines Lebens und seines waren überall verstreut. Auf Handys. Clouds. Alten Festplatten. Nichts fühlte sich dauerhaft an. Nichts fühlte sich sicher an. Also baute ich lifeli.me.",
      aboutP4: "lifeli.me ist meine Antwort auf eine einfache, aber kraftvolle Frage:",
      aboutP4b: "Was hinterlassen wir - und wird es in 30... 50... 100... Jahren noch von Bedeutung sein?",
      aboutP5: "Es ist ein Ort, um Ihr Vermächtnis zu gestalten, eine Erinnerung nach der anderen. Es ist für Familien gebaut—für die stillen, wichtigen Momente. Geburten. Erste Schritte. Letzte Umarmungen.",
      aboutP6: "Fotos, Videos, Briefe an Ihr zukünftiges Ich. Meilensteine. Ihre Schätze. Alles organisiert, bewahrt und tragbar für Jahrzehnte—wie der globale Saatgut-Tresor von Svalbard, nur für Ihre Erinnerungen.",
      aboutP7: "Es geht nicht darum, viral zu werden. Es geht darum, für das in Erinnerung zu bleiben, wer Sie sind, und sich daran zu erinnern, wer wir sind.",
      aboutP8: "Ich glaube, dass jeder Mensch einen Platz verdient, um seine Geschichte zu bewahren. Nicht nur für heute, sondern für kommende Generationen.",
      aboutP9: "Deshalb baue ich lifeli.me. Nicht als Produkt. Sondern als Versprechen.",
      aboutSignature: "Adam Trnka",
      aboutSignatureTitle: "Gründer von lifeli.me",
    },
    ES: {
      waitlist: "Lista de espera",
      about: "Acerca de",
      title: "Preservando tu verdadero legado",
      description: "Tu legado no se escribe algún día - se construye hoy. Lifeli.me preserva los momentos, pensamientos y lecciones que hacen que tu historia valga la pena recordar.",
      emailPlaceholder: "Ingresa tu correo electrónico",
      joinButton: "Unirse a la lista de espera",
      aboutTitle: "Una Promesa Personal",
      aboutSubtitle: "De Adam Trnka, Fundador de lifeli.me",
      aboutP1: "Crecí con mi mamá y mi abuela, tratando de entender quién era a partir de historias y fotos en cajas. Ahora soy padre y todo cambió cuando nació mi hijo.",
      aboutP2: "Me encontré filmando pequeños videos solo para él. No para redes sociales. No para likes. Para el día en que cumpla 15... 18... 30. Quería que supiera quién era realmente, cómo reía, en qué creía, qué me importaba.",
      aboutP3: "Pero estas piezas de mi vida y la suya estaban dispersas por todas partes. En teléfonos. Nubes. Discos antiguos. Nada se sentía duradero. Nada se sentía seguro. Así que construí lifeli.me.",
      aboutP4: "lifeli.me es mi respuesta a una pregunta simple pero poderosa:",
      aboutP4b: "¿Qué dejamos atrás - y seguirá importando en 30... 50... 100... años?",
      aboutP5: "Es un lugar para crear tu legado, un recuerdo a la vez. Está construido para familias—para los momentos tranquilos e importantes. Nacimientos. Primeros pasos. Últimos abrazos.",
      aboutP6: "Fotos, videos, cartas a tu yo futuro. Hitos. Tus tesoros. Todo organizado, preservado y portable durante décadas—como la Bóveda Global de Semillas de Svalbard, solo que para tus recuerdos.",
      aboutP7: "Esto no se trata de volverse viral. Se trata de ser recordado por quién eres y recordar quiénes somos.",
      aboutP8: "Creo que cada persona merece un lugar para guardar su historia. No solo para hoy, sino para las generaciones venideras.",
      aboutP9: "Por eso estoy construyendo lifeli.me. No como un producto. Sino como una promesa.",
      aboutSignature: "Adam Trnka",
      aboutSignatureTitle: "Fundador de lifeli.me",
    },
    PL: {
      waitlist: "Lista oczekujących",
      about: "O nas",
      title: "Zachowywanie twojego prawdziwego dziedzictwa",
      description: "Twoje dziedzictwo nie jest pisane kiedyś - jest budowane dzisiaj. Lifeli.me zachowuje chwile, myśli i lekcje, które sprawiają, że Twoja historia jest warta zapamiętania.",
      emailPlaceholder: "Wprowadź swój email",
      joinButton: "Dołącz do listy oczekujących",
      aboutTitle: "Osobista Obietnica",
      aboutSubtitle: "Od Adama Trnki, założyciela lifeli.me",
      aboutP1: "Dorastałem z mamą i babcią, próbując zrozumieć, kim jestem, z historii i zdjęć w pudełkach. Teraz jestem ojcem i wszystko się zmieniło, kiedy urodził się mój syn.",
      aboutP2: "Zacząłem nagrywać małe filmy tylko dla niego. Nie dla mediów społecznościowych. Nie dla polubień. Na dzień, kiedy skończy 15... 18... 30. Chciałem, żeby wiedział, kim naprawdę byłem, jak się śmiałem, w co wierzyłem, co było dla mnie ważne.",
      aboutP3: "Ale te kawałki mojego życia i jego były rozproszone wszędzie. W telefonach. Chmurach. Starych dyskach. Nic nie wydawało się trwałe. Nic nie wydawało się bezpieczne. Więc zbudowałem lifeli.me.",
      aboutP4: "lifeli.me jest moją odpowiedzią na proste, ale potężne pytanie:",
      aboutP4b: "Co zostawiamy po sobie - i czy będzie to miało znaczenie za 30... 50... 100... lat?",
      aboutP5: "To miejsce do tworzenia twojego dziedzictwa, jedna pamięć na raz. Jest zbudowane dla rodzin—dla cichych, ważnych chwil. Narodziny. Pierwsze kroki. Ostatnie uściski.",
      aboutP6: "Zdjęcia, filmy, listy do przyszłego siebie. Kamienie milowe. Twoje skarby. Wszystko zorganizowane, zachowane i przenośne przez dziesięciolecia—jak Globalny Skarbiec Nasion w Svalbardzie, tylko dla twoich wspomnień.",
      aboutP7: "To nie o stawanie się viralem. To o bycie zapamiętanym za to, kim jesteś i pamiętaniu, kim jesteśmy.",
      aboutP8: "Wierzę, że każda osoba zasługuje na miejsce do przechowywania swojej historii. Nie tylko na dziś, ale dla przyszłych pokoleń.",
      aboutP9: "Dlatego buduję lifeli.me. Nie jako produkt. Ale jako obietnicę.",
      aboutSignature: "Adam Trnka",
      aboutSignatureTitle: "Założyciel lifeli.me",
    },
  };

  const t = translations[selectedLanguage as keyof typeof translations];

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-4 md:p-6 lg:p-8 bg-white lg:bg-transparent">
        {/* Mobile: Logo + Hamburger */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          {/* Logo - visible on mobile */}
          <img 
            src={logo} 
            alt="LifeLime Logo" 
            className="h-8 w-auto lg:hidden" 
          />
          
          {/* Mobile Hamburger Menu */}
          <Sheet>
            <SheetTrigger className="lg:hidden text-primary p-2">
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent side="right" className="bg-white/30 backdrop-blur-xl border-white/30" style={{ boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.5), 0 8px 32px 0 rgba(0, 0, 0, 0.1)' }}>
              <div className="flex flex-col gap-4 mt-8">
                <a 
                  href="#about" 
                  onClick={(e) => { e.preventDefault(); setCurrentView('about'); }}
                  className="text-gray-900 hover:text-primary transition-colors font-semibold px-4 py-2"
                >
                  {t.about}
                </a>
                
                {/* Language Selector in Mobile Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 text-gray-900 hover:text-primary transition-colors font-semibold outline-none px-4 py-2">
                    <Languages size={18} />
                    {selectedLanguage}
                    <ChevronDown size={16} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white/95 backdrop-blur-sm">
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => setSelectedLanguage(lang.code)}
                        className={selectedLanguage === lang.code ? "bg-primary/10" : ""}
                      >
                        {lang.code} - {lang.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden lg:flex items-center justify-end gap-2 w-full">
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); setCurrentView('about'); }}
            className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium px-4 py-2 rounded-lg"
          >
            {t.about}
          </a>
          
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium outline-none px-4 py-2 rounded-lg">
              <Languages size={18} />
              {selectedLanguage}
              <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white/95 backdrop-blur-sm">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setSelectedLanguage(lang.code)}
                  className={selectedLanguage === lang.code ? "bg-primary/10" : ""}
                >
                  {lang.code} - {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Split Background - 1/3 left, 2/3 right */}
      <div className="absolute inset-0 flex">
        {/* Left 1/3 - Darker gradient */}
        <div 
          className="w-1/3"
          style={{
            background: 'linear-gradient(135deg, #5A1FD8 0%, #6C2AFD 100%)'
          }}
        />
        {/* Right 2/3 - Lighter gradient */}
        <div 
          className="w-2/3"
          style={{
            background: 'linear-gradient(135deg, #6C2AFD 0%, #835BD9 100%)'
          }}
        />
      </div>

      {/* Animated Background Shapes - Mobile Only */}
      <div className="lg:hidden absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating blob 1 */}
        <div 
          className="absolute w-64 h-64 rounded-full blur-2xl opacity-40"
          style={{
            background: 'radial-gradient(circle, #9B6FFF 0%, transparent 60%)',
            top: '15%',
            left: '-20%',
            animation: 'float1 8s ease-in-out infinite'
          }}
        />
        
        {/* Floating blob 2 */}
        <div 
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, #7C3FED 0%, transparent 60%)',
            bottom: '10%',
            right: '-25%',
            animation: 'float2 10s ease-in-out infinite'
          }}
        />
        
        {/* Floating blob 3 */}
        <div 
          className="absolute w-56 h-56 rounded-full blur-xl opacity-50"
          style={{
            background: 'radial-gradient(circle, #A78BFA 0%, transparent 60%)',
            top: '45%',
            right: '5%',
            animation: 'float3 7s ease-in-out infinite'
          }}
        />
      </div>

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.1); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 30px) scale(1.15); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, -30px) scale(1.05); }
        }
      `}</style>
      
      {/* White Section with Organic Wave Divider - Desktop Only */}
      <svg
        className="hidden lg:block absolute top-0 left-[-10%] w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Wave Layer 1 - Background */}
        <path
          d="M0,0 L40,0 Q45,25 50,50 T60,100 L0,100 Z"
          fill="hsl(var(--background))"
          opacity="0.4"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,0 L40,0 Q45,25 50,50 T60,100 L0,100 Z;
              M0,0 L42,0 Q47,23 52,48 T62,100 L0,100 Z;
              M0,0 L40,0 Q45,25 50,50 T60,100 L0,100 Z
            "
          />
        </path>
        
        {/* Wave Layer 2 - Middle */}
        <path
          d="M0,0 L42,0 Q47,27 52,52 T62,100 L0,100 Z"
          fill="hsl(var(--background))"
          opacity="0.7"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,0 L42,0 Q47,27 52,52 T62,100 L0,100 Z;
              M0,0 L40,0 Q45,30 50,55 T60,100 L0,100 Z;
              M0,0 L42,0 Q47,27 52,52 T62,100 L0,100 Z
            "
          />
        </path>
        
        {/* Wave Layer 3 - Front */}
        <path
          d="M0,0 L44,0 Q49,30 54,55 T64,100 L0,100 Z"
          fill="hsl(var(--background))"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,0 L44,0 Q49,30 54,55 T64,100 L0,100 Z;
              M0,0 L46,0 Q51,28 56,53 T66,100 L0,100 Z;
              M0,0 L44,0 Q49,30 54,55 T64,100 L0,100 Z
            "
          />
        </path>
        
        {/* Second Layer - Wave 1 with Lower Opacity */}
        <path
          d="M0,0 L46,0 Q51,32 56,57 T66,100 L0,100 Z"
          fill="hsl(var(--background))"
          opacity="0.2"
        >
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
              M0,0 L46,0 Q51,32 56,57 T66,100 L0,100 Z;
              M0,0 L48,0 Q53,35 58,60 T68,100 L0,100 Z;
              M0,0 L46,0 Q51,32 56,57 T66,100 L0,100 Z
            "
          />
        </path>
        
        {/* Second Layer - Wave 2 with Lower Opacity */}
        <path
          d="M0,0 L48,0 Q53,35 58,60 T68,100 L0,100 Z"
          fill="hsl(var(--background))"
          opacity="0.15"
        >
          <animate
            attributeName="d"
            dur="9s"
            repeatCount="indefinite"
            values="
              M0,0 L48,0 Q53,35 58,60 T68,100 L0,100 Z;
              M0,0 L50,0 Q55,33 60,58 T70,100 L0,100 Z;
              M0,0 L48,0 Q53,35 58,60 T68,100 L0,100 Z
            "
          />
        </path>
        
        {/* Third Layer - Wave 1 with Lower Opacity */}
        <path
          d="M0,0 L50,0 Q55,38 60,63 T70,100 L0,100 Z"
          fill="hsl(var(--background))"
          opacity="0.12"
        >
          <animate
            attributeName="d"
            dur="11s"
            repeatCount="indefinite"
            values="
              M0,0 L50,0 Q55,38 60,63 T70,100 L0,100 Z;
              M0,0 L52,0 Q57,36 62,61 T72,100 L0,100 Z;
              M0,0 L50,0 Q55,38 60,63 T70,100 L0,100 Z
            "
          />
        </path>
        
        {/* Third Layer - Wave 2 with Lower Opacity */}
        <path
          d="M0,0 L52,0 Q57,40 62,65 T72,100 L0,100 Z"
          fill="hsl(var(--background))"
          opacity="0.1"
        >
          <animate
            attributeName="d"
            dur="13s"
            repeatCount="indefinite"
            values="
              M0,0 L52,0 Q57,40 62,65 T72,100 L0,100 Z;
              M0,0 L54,0 Q59,38 64,63 T74,100 L0,100 Z;
              M0,0 L52,0 Q57,40 62,65 T72,100 L0,100 Z
            "
          />
        </path>
      </svg>


      {/* Content */}
      <div className="relative h-full flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-8 lg:gap-0 p-4 sm:p-6 md:p-12 lg:p-16 xl:p-24 overflow-y-auto lg:overflow-y-hidden">
        {/* Logo Section - Left - hidden on mobile */}
        <div className="hidden lg:block max-w-xs sm:max-w-sm md:max-w-md w-full relative lg:-mt-[10vh] lg:ml-[10%]">
          {/* Ground spot shadow */}
          <div 
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full h-16 rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(108, 42, 253, 0.8) 0%, rgba(108, 42, 253, 0.5) 40%, transparent 70%)'
            }}
          />
          <img 
            src={logo} 
            alt="LifeLime Logo" 
            className="w-full h-auto relative z-10" 
          />
        </div>

        {/* Waitlist Section - Right */}
        <div className="max-w-md lg:max-w-xl w-full mx-auto lg:mx-0 lg:-mt-[10vh] lg:mr-[5%]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-white drop-shadow-lg">{t.title}</h2>
          <p className="text-white/90 mb-8 sm:mb-10 leading-relaxed text-lg sm:text-xl drop-shadow-md">
            {t.description}
          </p>
          <form className="space-y-5 sm:space-y-6" onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submitted, email value:", email);
            
            // Validate email
            const validation = emailSchema.safeParse({ email });
            console.log("Validation result:", validation);
            
            if (!validation.success) {
              const errorMessage = validation.error.errors[0].message;
              console.log("Validation error:", errorMessage);
              setEmailError(errorMessage);
              toast({
                title: "Invalid email",
                description: errorMessage,
                variant: "destructive",
              });
              return;
            }
            
            setEmailError("");
            console.log("Submitting to database...");
            
            // Submit to database
            submitWaitlist({ email }, {
              onSuccess: () => {
                console.log("Submission successful!");
                setEmail("");
                setShowSuccessModal(true);
              },
              onError: (error) => {
                console.error("Submission error:", error);
              }
            });
          }}>
            <div className="space-y-2">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => {
                  console.log("Email input changed:", e.target.value);
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 text-base sm:text-lg rounded-xl bg-white/95 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white shadow-xl backdrop-blur-sm border border-white/20"
                disabled={isPending}
                autoComplete="email"
              />
              {emailError && (
                <p className="text-red-100 bg-red-500/20 text-sm px-3 py-2 rounded-lg backdrop-blur-sm font-medium">
                  {emailError}
                </p>
              )}
            </div>
            <Button 
              type="submit"
              disabled={isPending}
              className="w-full bg-white text-primary hover:bg-white/90 text-lg sm:text-xl font-semibold shadow-2xl hover:shadow-white/20 transition-all duration-300" 
              size="lg"
            >
              {isPending ? "Joining..." : t.joinButton}
            </Button>
          </form>
        </div>

        {/* About Modal */}
        {currentView === 'about' && (
          <div className={`fixed inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8 z-[60] bg-black/60 backdrop-blur-sm transition-all duration-300 ease-out ${showModal && !isClosing ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`max-w-6xl w-full bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl relative max-h-[90vh] transition-all duration-300 ease-out ${showModal && !isClosing ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 20px 60px -15px rgba(0, 0, 0, 0.3)' }}>
              {/* Close Button - Fixed Position */}
              <button
                onClick={handleCloseAbout}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors z-10 bg-white/10 rounded-full p-2 backdrop-blur-sm"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              {/* Fade out gradient - Top */}
              <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-[5] rounded-t-3xl"
                style={{
                  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, transparent 100%)'
                }}
              />
              
              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[90vh] scrollbar-hide p-8 sm:p-10 lg:p-14">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">{t.aboutTitle}</h2>
                <p className="text-white/90 mb-6 text-base sm:text-lg italic">{t.aboutSubtitle}</p>
                
                {/* YouTube Video */}
                <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/_HWRGKfSq3A"
                    title="lifeli.me Story"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="space-y-5 text-white/90 leading-relaxed text-base sm:text-lg">
                  <p>{t.aboutP1}</p>
                  
                  <p>{t.aboutP2}</p>
                  
                  <p>{t.aboutP3}</p>
                  
                  <p className="font-semibold text-white">{t.aboutP4}<br />{t.aboutP4b}</p>
                  
                  <p>{t.aboutP5}</p>
                  
                  <p>{t.aboutP6}</p>
                  
                  <p>{t.aboutP7}</p>
                  
                  <p>{t.aboutP8}</p>
                  
                  <p>{t.aboutP9}</p>
                  
                  <p className="font-semibold text-white mt-6">{t.aboutSignature}<br />{t.aboutSignatureTitle}</p>
                </div>
              </div>
              
              {/* Fade out gradient - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-[5] rounded-b-3xl"
                style={{
                  background: 'linear-gradient(to top, rgba(255, 255, 255, 0.1) 0%, transparent 100%)'
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Success Modal */}
      <WaitlistSuccessModal 
        open={showSuccessModal}
        onOpenChange={setShowSuccessModal}
        language={selectedLanguage}
      />
    </div>
  );
};

export default HeroSection;
