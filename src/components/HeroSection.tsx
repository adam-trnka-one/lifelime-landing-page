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
          d="M0,0 L35,0 Q40,25 45,50 T55,100 L0,100 Z"
          fill="hsl(var(--background))"
          opacity="0.4"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,0 L35,0 Q40,25 45,50 T55,100 L0,100 Z;
              M0,0 L38,0 Q43,20 48,45 T58,100 L0,100 Z;
              M0,0 L35,0 Q40,25 45,50 T55,100 L0,100 Z
            "
          />
        </path>
        
        {/* Wave Layer 2 - Middle */}
        <path
          d="M0,0 L38,0 Q43,30 48,55 T58,100 L0,100 Z"
          fill="hsl(var(--background))"
          opacity="0.7"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,0 L38,0 Q43,30 48,55 T58,100 L0,100 Z;
              M0,0 L35,0 Q40,35 45,60 T55,100 L0,100 Z;
              M0,0 L38,0 Q43,30 48,55 T58,100 L0,100 Z
            "
          />
        </path>
        
        {/* Wave Layer 3 - Front */}
        <path
          d="M0,0 L40,0 Q45,35 50,60 T60,100 L0,100 Z"
          fill="hsl(var(--background))"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,0 L40,0 Q45,35 50,60 T60,100 L0,100 Z;
              M0,0 L42,0 Q47,30 52,55 T62,100 L0,100 Z;
              M0,0 L40,0 Q45,35 50,60 T60,100 L0,100 Z
            "
          />
        </path>
        
        {/* Second Layer - Wave 1 with Lower Opacity */}
        <path
          d="M0,5 L42,5 Q47,28 52,53 T62,95 L0,95 Z"
          fill="hsl(var(--background))"
          opacity="0.2"
        >
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
              M0,5 L42,5 Q47,28 52,53 T62,95 L0,95 Z;
              M0,5 L45,5 Q50,33 55,58 T65,95 L0,95 Z;
              M0,5 L42,5 Q47,28 52,53 T62,95 L0,95 Z
            "
          />
        </path>
        
        {/* Second Layer - Wave 2 with Lower Opacity */}
        <path
          d="M0,8 L38,8 Q43,35 48,60 T58,92 L0,92 Z"
          fill="hsl(var(--background))"
          opacity="0.15"
        >
          <animate
            attributeName="d"
            dur="9s"
            repeatCount="indefinite"
            values="
              M0,8 L38,8 Q43,35 48,60 T58,92 L0,92 Z;
              M0,8 L40,8 Q45,30 50,55 T60,92 L0,92 Z;
              M0,8 L38,8 Q43,35 48,60 T58,92 L0,92 Z
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
