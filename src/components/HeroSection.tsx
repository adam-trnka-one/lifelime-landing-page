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
      
      {/* White Section with Angled Edge */}
      <div 
        className="absolute inset-0 bg-background"
        style={{
          clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)'
        }}
      />

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
