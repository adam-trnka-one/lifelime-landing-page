import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Languages } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo_lifelime_l.svg";

const HeroSection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  
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
    },
    CZ: {
      waitlist: "Čekací listina",
      about: "O nás",
    },
    DE: {
      waitlist: "Warteliste",
      about: "Über uns",
    },
    ES: {
      waitlist: "Lista de espera",
      about: "Acerca de",
    },
    PL: {
      waitlist: "Lista oczekujących",
      about: "O nas",
    },
  };

  const t = translations[selectedLanguage as keyof typeof translations];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-end gap-2 p-6 md:p-8">
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
      <div className="relative min-h-screen flex items-center justify-start p-8 md:p-16 lg:p-24">
        <div className="max-w-md w-full ml-[10%] relative">
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
      </div>
    </div>
  );
};

export default HeroSection;
