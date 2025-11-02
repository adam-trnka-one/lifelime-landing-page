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
  const [currentView, setCurrentView] = useState<'waitlist' | 'about'>('waitlist');
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseAbout = () => {
    setIsClosing(true);
    setTimeout(() => {
      setCurrentView('waitlist');
      setIsClosing(false);
    }, 300); // Match animation duration
  };
  
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

      {/* Gradient Background - Full Width */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #6C2AFD 0%, #835BD9 100%)'
        }}
      />

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
        className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none"
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
          <form className="space-y-5 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              className="w-full px-5 sm:px-6 py-4 sm:py-5 text-base sm:text-lg rounded-xl bg-white/95 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white shadow-xl backdrop-blur-sm border border-white/20"
              required
            />
            <Button className="w-full bg-white text-primary hover:bg-white/90 text-lg sm:text-xl font-semibold shadow-2xl hover:shadow-white/20 transition-all duration-300" size="lg">
              {t.joinButton}
            </Button>
          </form>
        </div>

        {/* About Modal */}
        {currentView === 'about' && (
          <div className={`fixed inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100 animate-fade-in'}`}>
            <div className={`max-w-6xl w-full bg-white/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 lg:p-14 shadow-2xl overflow-y-auto max-h-[90vh] scrollbar-hide relative transition-all duration-300 ${isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100 animate-scale-in'}`} style={{ boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 20px 60px -15px rgba(0, 0, 0, 0.3)' }}>
              {/* Close Button */}
              <button
                onClick={handleCloseAbout}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">A Personal Promise</h2>
              <p className="text-white/90 mb-6 text-base sm:text-lg italic">From Adam Trnka, Founder of lifeli.me</p>
              
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
                <p>I grew up with my mom and grandma, trying to piece together who I was from stories, photos in boxes. I'm a father now and everything changed when my son was born.</p>
                
                <p>I found myself filming little videos just for him. Not for social media. Not for likes. For the day he turns 15… 18… 30. I wanted him to know who I really was, how I laughed, what I believed, what mattered to me.</p>
                
                <p>But these pieces of my life and his were scattered everywhere. On phones. Clouds. Old drives. Nothing felt lasting. Nothing felt safe. So I built lifeli.me.</p>
                
                <p className="font-semibold text-white">lifeli.me is my answer to a simple but powerful question:<br />What do we leave behind - and will it still matter 30... 50... 100... years from now?</p>
                
                <p>It's a place to craft your legacy, one memory at a time. It's built for families—for the quiet, important moments. Births. First steps. Last hugs.</p>
                
                <p>Photos, videos, letters to your future self. Milestones. Your treasures. All organized, preserved, and portable for decades—like a Svalbard Global Seed Vault, only for your memories.</p>
                
                <p>This isn't about going viral. It's about being remembered for who you are and remembering who we are.</p>
                
                <p>I believe every person deserves a place to hold their story. Not just for today, but for generations to come.</p>
                
                <p>That's why I'm building lifeli.me. Not as a product. But as a promise.</p>
                
                <p className="font-semibold text-white mt-6">Adam Trnka<br />Founder of lifeli.me</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
