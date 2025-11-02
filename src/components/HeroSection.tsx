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
import { useState } from "react";
import logo from "@/assets/logo_lifelime_l.svg";

const HeroSection = () => {
  const getBrowserLanguage = () => {
    const browserLang = navigator.language.split('-')[0].toUpperCase();
    const supportedLangs = ['CZ', 'EN', 'DE', 'ES', 'PL'];
    return supportedLangs.includes(browserLang) ? browserLang : 'EN';
  };

  const [selectedLanguage, setSelectedLanguage] = useState(getBrowserLanguage());
  
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
      title: "Start preserving your true legacy",
      description: "Your legacy isn't written someday - it's built today. Lifeli.me preserve the moments, thoughts, and lessons that make your story worth remembering.",
      emailPlaceholder: "Enter your email",
      joinButton: "Join Waitlist",
    },
    CZ: {
      waitlist: "Čekací listina",
      about: "O nás",
      title: "Začněte uchovávat své pravé dědictví",
      description: "Vaše dědictví není napsáno někdy - je budováno dnes. Lifeli.me uchovává okamžiky, myšlenky a lekce, které dělají váš příběh hodný zapamatování.",
      emailPlaceholder: "Zadejte svůj email",
      joinButton: "Připojit se k čekací listině",
    },
    DE: {
      waitlist: "Warteliste",
      about: "Über uns",
      title: "Beginnen Sie, Ihr wahres Erbe zu bewahren",
      description: "Ihr Vermächtnis wird nicht irgendwann geschrieben - es wird heute aufgebaut. Lifeli.me bewahrt die Momente, Gedanken und Lektionen, die Ihre Geschichte erinnernswert machen.",
      emailPlaceholder: "Geben Sie Ihre E-Mail ein",
      joinButton: "Der Warteliste beitreten",
    },
    ES: {
      waitlist: "Lista de espera",
      about: "Acerca de",
      title: "Comienza a preservar tu verdadero legado",
      description: "Tu legado no se escribe algún día - se construye hoy. Lifeli.me preserva los momentos, pensamientos y lecciones que hacen que tu historia valga la pena recordar.",
      emailPlaceholder: "Ingresa tu correo electrónico",
      joinButton: "Unirse a la lista de espera",
    },
    PL: {
      waitlist: "Lista oczekujących",
      about: "O nas",
      title: "Zacznij zachowywać swoje prawdziwe dziedzictwo",
      description: "Twoje dziedzictwo nie jest pisane kiedyś - jest budowane dzisiaj. Lifeli.me zachowuje chwile, myśli i lekcje, które sprawiają, że Twoja historia jest warta zapamiętania.",
      emailPlaceholder: "Wprowadź swój email",
      joinButton: "Dołącz do listy oczekujących",
    },
  };

  const t = translations[selectedLanguage as keyof typeof translations];

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-4 md:p-6 lg:p-8">
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
            <SheetTrigger className="lg:hidden text-white p-2">
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent side="right" className="bg-white/10 backdrop-blur-2xl border-white/20" style={{ boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)' }}>
              <div className="flex flex-col gap-4 mt-8">
                <a 
                  href="#waitlist" 
                  className="text-white hover:text-white/80 transition-colors font-medium px-4 py-2"
                >
                  {t.waitlist}
                </a>
                <a 
                  href="#about" 
                  className="text-white hover:text-white/80 transition-colors font-medium px-4 py-2"
                >
                  {t.about}
                </a>
                
                {/* Language Selector in Mobile Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium outline-none px-4 py-2">
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
            href="#waitlist" 
            className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium px-4 py-2 rounded-lg"
          >
            {t.waitlist}
          </a>
          <a 
            href="#about" 
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

      {/* Gradient Background - Full Width */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #6C2AFD 0%, #835BD9 100%)'
        }}
      />
      
      {/* White Section with Organic Wave Divider */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
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
      <div className="relative h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-0 p-4 sm:p-6 md:p-12 lg:p-16 xl:p-24 overflow-y-auto lg:overflow-y-hidden">
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
        <div className="max-w-md lg:max-w-xl w-full bg-white/10 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl lg:-mt-[10vh] lg:mr-[10%]" style={{ boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 20px 60px -15px rgba(0, 0, 0, 0.3)' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">{t.title}</h2>
          <p className="text-white/80 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
            {t.description}
          </p>
          <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg rounded-lg bg-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 border-none"
              required
            />
            <Button className="w-full bg-white text-primary hover:bg-white/90 text-base sm:text-lg" size="lg">
              {t.joinButton}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
