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
      
      {/* White Section with Organic Wave */}
      <div className="absolute inset-0 bg-background">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Layer 1 - Deepest wave with opacity */}
          <path
            d="M0 0 L0 800 L400 800 C450 750 500 700 550 680 C600 660 650 650 700 630 C750 610 800 580 850 550 C900 520 950 500 1000 400 C1050 300 1100 200 1150 150 C1200 100 1250 80 1300 50 C1350 20 1400 10 1440 0 L0 0 Z"
            fill="white"
            fillOpacity="0.3"
          />
          
          {/* Layer 2 - Middle wave */}
          <path
            d="M0 0 L0 800 L420 800 C470 740 520 690 570 670 C620 650 670 640 720 620 C770 600 820 570 870 540 C920 510 970 490 1020 380 C1070 270 1120 180 1170 130 C1220 80 1270 60 1320 35 C1370 10 1420 5 1440 0 L0 0 Z"
            fill="white"
            fillOpacity="0.6"
          />
          
          {/* Layer 3 - Front wave - solid */}
          <path
            d="M0 0 L0 800 L440 800 C490 730 540 680 590 660 C640 640 690 630 740 610 C790 590 840 560 890 530 C940 500 990 480 1040 360 C1090 240 1140 160 1190 110 C1240 60 1290 40 1340 20 C1390 5 1440 0 1440 0 L0 0 Z"
            fill="white"
          />
        </svg>
      </div>

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
