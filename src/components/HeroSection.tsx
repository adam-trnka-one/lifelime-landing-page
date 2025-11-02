import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
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
          d="M0,0 L100,0 L100,100 Q75,85 50,75 T0,70 Z"
          fill="hsl(var(--background))"
          opacity="0.4"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,0 L100,0 L100,100 Q75,85 50,75 T0,70 Z;
              M0,0 L100,0 L100,100 Q75,80 50,70 T0,65 Z;
              M0,0 L100,0 L100,100 Q75,85 50,75 T0,70 Z
            "
          />
        </path>
        
        {/* Wave Layer 2 - Middle */}
        <path
          d="M0,0 L100,0 L100,100 Q70,80 45,68 T0,60 Z"
          fill="hsl(var(--background))"
          opacity="0.7"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,0 L100,0 L100,100 Q70,80 45,68 T0,60 Z;
              M0,0 L100,0 L100,100 Q70,75 45,63 T0,55 Z;
              M0,0 L100,0 L100,100 Q70,80 45,68 T0,60 Z
            "
          />
        </path>
        
        {/* Wave Layer 3 - Front */}
        <path
          d="M0,0 L100,0 L100,100 Q65,75 40,60 T0,50 Z"
          fill="hsl(var(--background))"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,0 L100,0 L100,100 Q65,75 40,60 T0,50 Z;
              M0,0 L100,0 L100,100 Q65,70 40,55 T0,45 Z;
              M0,0 L100,0 L100,100 Q65,75 40,60 T0,50 Z
            "
          />
        </path>
        
        {/* Second Layer - Wave 1 with Lower Opacity */}
        <path
          d="M0,0 L100,0 L100,100 Q60,70 35,53 T0,43 Z"
          fill="hsl(var(--background))"
          opacity="0.2"
        >
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
              M0,0 L100,0 L100,100 Q60,70 35,53 T0,43 Z;
              M0,0 L100,0 L100,100 Q60,65 35,48 T0,38 Z;
              M0,0 L100,0 L100,100 Q60,70 35,53 T0,43 Z
            "
          />
        </path>
        
        {/* Second Layer - Wave 2 with Lower Opacity */}
        <path
          d="M0,0 L100,0 L100,100 Q55,65 30,48 T0,38 Z"
          fill="hsl(var(--background))"
          opacity="0.15"
        >
          <animate
            attributeName="d"
            dur="9s"
            repeatCount="indefinite"
            values="
              M0,0 L100,0 L100,100 Q55,65 30,48 T0,38 Z;
              M0,0 L100,0 L100,100 Q55,60 30,43 T0,33 Z;
              M0,0 L100,0 L100,100 Q55,65 30,48 T0,38 Z
            "
          />
        </path>
      </svg>

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-start p-8 md:p-16 lg:p-24">
        <div className="max-w-xl w-full space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Transform Your Digital Experience
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Discover innovative solutions that empower your business to reach new heights with cutting-edge technology and seamless design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
