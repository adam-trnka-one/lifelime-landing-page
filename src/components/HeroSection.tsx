import { Button } from "@/components/ui/button";
import { Settings, Instagram, Facebook, Linkedin, Flower2, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import logo from "@/assets/logo_lifelime_l.svg";
import cornPoppy from "@/assets/corn_poppy.png";
import { useWaitlistSubmit } from "@/hooks/useWaitlistSubmit";
import { useToast } from "@/hooks/use-toast";
import WaitlistSuccessModal from "@/components/WaitlistSuccessModal";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";
import ServiceMembersModal from "@/components/ServiceMembersModal";
import AboutModal from "@/components/AboutModal";
import About2Modal from "@/components/About2Modal";

// Form validation schema
const formSchema = z.object({
  firstName: z.string().trim().nonempty({
    message: "First name cannot be empty"
  }).max(100, {
    message: "First name must be less than 100 characters"
  }),
  lastName: z.string().trim().max(100, {
    message: "Last name must be less than 100 characters"
  }).optional(),
  email: z.string().trim().nonempty({
    message: "Email cannot be empty"
  }).email({
    message: "Invalid email address"
  }).max(255, {
    message: "Email must be less than 255 characters"
  })
});
const HeroSection = () => {
  const {
    t
  } = useTranslation();
  const {
    toast
  } = useToast();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showAbout2Modal, setShowAbout2Modal] = useState(false);
  const {
    mutate: submitWaitlist,
    isPending
  } = useWaitlistSubmit();

  // Check if today is Veterans Day (November 11th)
  const isVeteransDay = () => {
    const today = new Date();
    return today.getMonth() === 10 && today.getDate() === 11; // Month is 0-indexed, so 10 = November
  };
  return <div className="min-h-screen relative overflow-y-auto lg:overflow-hidden">
      {/* Navigation */}
      <nav className="sticky lg:fixed top-0 left-0 right-0 z-20 flex items-center justify-between p-4 md:p-6 lg:p-8 bg-white lg:bg-transparent">
        {/* Mobile: Logo + About + Language */}
        <div className="flex items-center justify-between w-full lg:hidden">
          {/* Logo - visible on mobile */}
          <img src={logo} alt="LifeLime Logo" className="h-8 w-auto" />
          
          {/* Mobile Menu Items */}
          <div className="flex items-center gap-2">
            <a href="#about" onClick={e => {
              e.preventDefault();
              setShowAboutModal(true);
            }} className="text-primary hover:text-primary/80 transition-colors font-semibold px-3 py-2">
              {t('about')}
            </a>
            <LanguageSwitcher variant="dark" />
          </div>
        </div>

        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden lg:flex items-center justify-end gap-2 w-full">
          <a href="#about" onClick={e => {
          e.preventDefault();
          setShowAboutModal(true);
        }} className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium px-4 py-2 rounded-lg">
            {t('about')}
          </a>
          
          
          
          {/* Language Selector */}
          <LanguageSwitcher variant="light" />
        </div>
      </nav>

      {/* Background - Unified on mobile, split on desktop */}
      <div className="absolute inset-0">
        {/* Mobile: Single unified gradient */}
        <div className="lg:hidden absolute inset-0" style={{
        background: 'linear-gradient(135deg, #5A1FD8 0%, #6C2AFD 50%, #835BD9 100%)'
      }} />
        
        {/* Desktop: Split Background - 1/3 left, 2/3 right */}
        <div className="hidden lg:flex absolute inset-0">
          {/* Left 1/3 - Darker gradient */}
          <div className="w-1/3" style={{
          background: 'linear-gradient(135deg, #5A1FD8 0%, #6C2AFD 100%)'
        }} />
          {/* Right 2/3 - Lighter gradient */}
          <div className="w-2/3" style={{
          background: 'linear-gradient(135deg, #6C2AFD 0%, #835BD9 100%)'
        }} />
        </div>
      </div>

      {/* Animated Background Shapes - Mobile Only */}
      <div className="lg:hidden absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating blob 1 */}
        <div className="absolute w-64 h-64 rounded-full blur-2xl opacity-40" style={{
        background: 'radial-gradient(circle, #9B6FFF 0%, transparent 60%)',
        top: '15%',
        left: '-20%',
        animation: 'float1 8s ease-in-out infinite'
      }} />
        
        {/* Floating blob 2 */}
        <div className="absolute w-80 h-80 rounded-full blur-3xl opacity-30" style={{
        background: 'radial-gradient(circle, #7C3FED 0%, transparent 60%)',
        bottom: '10%',
        right: '-25%',
        animation: 'float2 10s ease-in-out infinite'
      }} />
        
        {/* Floating blob 3 */}
        <div className="absolute w-56 h-56 rounded-full blur-xl opacity-50" style={{
        background: 'radial-gradient(circle, #A78BFA 0%, transparent 60%)',
        top: '45%',
        right: '5%',
        animation: 'float3 7s ease-in-out infinite'
      }} />
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
      <svg className="hidden lg:block absolute top-0 left-[-10%] w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Wave Layer 1 - Background */}
        <path d="M0,0 L40,0 Q45,25 50,50 T60,100 L0,100 Z" fill="hsl(var(--background))" opacity="0.4">
          <animate attributeName="d" dur="8s" repeatCount="indefinite" values="
              M0,0 L40,0 Q45,25 50,50 T60,100 L0,100 Z;
              M0,0 L42,0 Q47,23 52,48 T62,100 L0,100 Z;
              M0,0 L40,0 Q45,25 50,50 T60,100 L0,100 Z
            " />
        </path>
        
        {/* Wave Layer 2 - Middle */}
        <path d="M0,0 L42,0 Q47,27 52,52 T62,100 L0,100 Z" fill="hsl(var(--background))" opacity="0.7">
          <animate attributeName="d" dur="6s" repeatCount="indefinite" values="
              M0,0 L42,0 Q47,27 52,52 T62,100 L0,100 Z;
              M0,0 L40,0 Q45,30 50,55 T60,100 L0,100 Z;
              M0,0 L42,0 Q47,27 52,52 T62,100 L0,100 Z
            " />
        </path>
        
        {/* Wave Layer 3 - Front */}
        <path d="M0,0 L44,0 Q49,30 54,55 T64,100 L0,100 Z" fill="hsl(var(--background))">
          <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
              M0,0 L44,0 Q49,30 54,55 T64,100 L0,100 Z;
              M0,0 L46,0 Q51,28 56,53 T66,100 L0,100 Z;
              M0,0 L44,0 Q49,30 54,55 T64,100 L0,100 Z
            " />
        </path>
        
        {/* Second Layer - Wave 1 with Lower Opacity */}
        <path d="M0,0 L46,0 Q51,32 56,57 T66,100 L0,100 Z" fill="hsl(var(--background))" opacity="0.2">
          <animate attributeName="d" dur="12s" repeatCount="indefinite" values="
              M0,0 L46,0 Q51,32 56,57 T66,100 L0,100 Z;
              M0,0 L48,0 Q53,35 58,60 T68,100 L0,100 Z;
              M0,0 L46,0 Q51,32 56,57 T66,100 L0,100 Z
            " />
        </path>
        
        {/* Second Layer - Wave 2 with Lower Opacity */}
        <path d="M0,0 L48,0 Q53,35 58,60 T68,100 L0,100 Z" fill="hsl(var(--background))" opacity="0.15">
          <animate attributeName="d" dur="9s" repeatCount="indefinite" values="
              M0,0 L48,0 Q53,35 58,60 T68,100 L0,100 Z;
              M0,0 L50,0 Q55,33 60,58 T70,100 L0,100 Z;
              M0,0 L48,0 Q53,35 58,60 T68,100 L0,100 Z
            " />
        </path>
        
        {/* Third Layer - Wave 1 with Lower Opacity */}
        <path d="M0,0 L50,0 Q55,38 60,63 T70,100 L0,100 Z" fill="hsl(var(--background))" opacity="0.12">
          <animate attributeName="d" dur="11s" repeatCount="indefinite" values="
              M0,0 L50,0 Q55,38 60,63 T70,100 L0,100 Z;
              M0,0 L52,0 Q57,36 62,61 T72,100 L0,100 Z;
              M0,0 L50,0 Q55,38 60,63 T70,100 L0,100 Z
            " />
        </path>
        
        {/* Third Layer - Wave 2 with Lower Opacity */}
        <path d="M0,0 L52,0 Q57,40 62,65 T72,100 L0,100 Z" fill="hsl(var(--background))" opacity="0.1">
          <animate attributeName="d" dur="13s" repeatCount="indefinite" values="
              M0,0 L52,0 Q57,40 62,65 T72,100 L0,100 Z;
              M0,0 L54,0 Q59,38 64,63 T74,100 L0,100 Z;
              M0,0 L52,0 Q57,40 62,65 T72,100 L0,100 Z
            " />
        </path>
      </svg>


      {/* Content */}
      <div className="relative h-full lg:h-screen flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-8 lg:gap-0 p-4 sm:p-6 md:p-12 lg:px-16 xl:px-24 lg:py-0 pb-24 overflow-y-auto lg:overflow-hidden">
        {/* Logo Section - Left - hidden on mobile */}
        <div className="hidden lg:block max-w-xs sm:max-w-sm md:max-w-md w-full relative lg:ml-[10%] lg:-mt-[5vh] scale-90">
          {/* Ground spot shadow */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full h-16 rounded-full blur-3xl" style={{
          background: 'radial-gradient(ellipse at center, rgba(108, 42, 253, 0.8) 0%, rgba(108, 42, 253, 0.5) 40%, transparent 70%)'
        }} />
          <img src={logo} alt="LifeLime Logo" className="w-full h-auto relative z-10" />
          {/* Corn poppy positioned at top of logo - only shown on Veterans Day (November 11th) */}
          {isVeteransDay() && <img src={cornPoppy} alt="Corn Poppy" className="absolute -top-[6%] left-[25%] w-[20%] h-auto z-20" />}
        </div>

        {/* Waitlist Section - Right */}
        <div className="max-w-md lg:max-w-xl w-full mx-auto lg:mx-0 lg:mr-[5%] lg:-mt-[5vh] scale-90 lg:origin-right">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-white drop-shadow-lg tracking-tight">{t('title')}</h2>
          <p className="text-white/90 mb-8 sm:mb-10 leading-relaxed text-lg sm:text-xl drop-shadow-md">
            {t('description')}
          </p>
          <form className="space-y-5 sm:space-y-6" onSubmit={e => {
          e.preventDefault();

          // Validate form
          const validation = formSchema.safeParse({
            firstName,
            lastName,
            email
          });
          if (!validation.success) {
            const errors = validation.error.errors;
            const firstNameErr = errors.find(e => e.path[0] === 'firstName');
            const lastNameErr = errors.find(e => e.path[0] === 'lastName');
            const emailErr = errors.find(e => e.path[0] === 'email');
            if (firstNameErr) {
              setFirstNameError(firstNameErr.message);
              toast({
                title: "Invalid first name",
                description: firstNameErr.message,
                variant: "destructive"
              });
            }
            if (lastNameErr) {
              setLastNameError(lastNameErr.message);
              toast({
                title: "Invalid last name",
                description: lastNameErr.message,
                variant: "destructive"
              });
            }
            if (emailErr) {
              setEmailError(emailErr.message);
              toast({
                title: "Invalid email",
                description: emailErr.message,
                variant: "destructive"
              });
            }
            return;
          }
          setFirstNameError("");
          setLastNameError("");
          setEmailError("");

          // Submit to database
          submitWaitlist({
            firstName,
            lastName,
            email
          }, {
            onSuccess: () => {
              setFirstName("");
              setLastName("");
              setEmail("");
              setShowSuccessModal(true);
            },
            onError: error => {
              console.error("Submission error:", error);
            }
          });
        }}>
            <div className="space-y-3">
              {/* First row: First name and Last name */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1 space-y-2">
                  <input type="text" placeholder="Firstname" value={firstName} onChange={e => {
                  setFirstName(e.target.value);
                  setFirstNameError("");
                }} className="w-full px-5 sm:px-6 py-4 sm:py-5 text-base sm:text-lg rounded-xl bg-white/95 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white shadow-xl backdrop-blur-sm border border-white/20" disabled={isPending} autoComplete="given-name" required />
                  {firstNameError && <p className="text-red-100 bg-red-500/20 text-sm px-3 py-2 rounded-lg backdrop-blur-sm font-medium">
                      {firstNameError}
                    </p>}
                </div>
                <div className="flex-1 space-y-2">
                  <input type="text" placeholder="Lastname" value={lastName} onChange={e => {
                  setLastName(e.target.value);
                  setLastNameError("");
                }} className="w-full px-5 sm:px-6 py-4 sm:py-5 text-base sm:text-lg rounded-xl bg-white/95 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white shadow-xl backdrop-blur-sm border border-white/20" disabled={isPending} autoComplete="family-name" />
                  {lastNameError && <p className="text-red-100 bg-red-500/20 text-sm px-3 py-2 rounded-lg backdrop-blur-sm font-medium">
                      {lastNameError}
                    </p>}
                </div>
              </div>
              
              {/* Second row: Email */}
              <div className="space-y-2">
                <input type="email" placeholder="Your email" value={email} onChange={e => {
                setEmail(e.target.value);
                setEmailError("");
              }} className="w-full px-5 sm:px-6 py-4 sm:py-5 text-base sm:text-lg rounded-xl bg-white/95 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white shadow-xl backdrop-blur-sm border border-white/20" disabled={isPending} autoComplete="email" required />
                {emailError && <p className="text-red-100 bg-red-500/20 text-sm px-3 py-2 rounded-lg backdrop-blur-sm font-medium">
                    {emailError}
                  </p>}
              </div>
            </div>
            
            {/* Tracking consent note */}
            <p className="text-white/70 text-sm text-center">
              {t('dataTrackingConsent')}
            </p>
            
            <Button type="submit" disabled={isPending} className="w-full bg-white text-primary hover:bg-white/90 text-lg sm:text-xl font-semibold shadow-2xl hover:shadow-white/20 transition-all duration-300" size="lg">
              {isPending ? "Joining..." : t('joinButton')}
            </Button>
          </form>
        </div>
      </div>

      {/* About Modal */}
      <AboutModal open={showAboutModal} onOpenChange={setShowAboutModal} />

      {/* Success Modal */}
      <WaitlistSuccessModal open={showSuccessModal} onOpenChange={setShowSuccessModal} />

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal open={showPrivacyModal} onOpenChange={setShowPrivacyModal} />

      {/* Service Members Modal */}
      <ServiceMembersModal open={showServiceModal} onOpenChange={setShowServiceModal} />

      {/* Footer - Mobile only, contains settings, privacy, service, and social icons */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-black/20 to-transparent backdrop-blur-sm">
        <div className="flex items-center justify-between p-4">
          {/* Left side: Settings, Privacy, Service */}
          <div className="flex gap-2">
            <button onClick={() => {
            const cookieConsent = document.querySelector('[aria-label="Edit cookie preferences"]') as HTMLElement;
            if (cookieConsent) cookieConsent.click();
          }} className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 p-2 rounded-lg" aria-label="Settings">
              <Settings className="w-5 h-5" />
            </button>
            <button onClick={() => setShowPrivacyModal(true)} className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 p-2 rounded-lg" aria-label="Privacy Policy">
              <Shield className="w-5 h-5" />
            </button>
            <button onClick={() => setShowServiceModal(true)} className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 p-2 rounded-lg" aria-label="For Those Who Serve">
              <Flower2 className="w-5 h-5" />
            </button>
          </div>

          {/* Right side: Social Links */}
          <div className="flex gap-2">
            <a href="https://www.instagram.com/lifeli.me" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 p-2 rounded-lg" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/mylifelime/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 p-2 rounded-lg" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/lifelime/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 p-2 rounded-lg" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop: Fixed settings links at bottom left */}
      <div className="hidden lg:flex fixed bottom-4 left-4 z-50 gap-2">
        <button onClick={() => {
            const cookieConsent = document.querySelector('[aria-label="Edit cookie preferences"]') as HTMLElement;
            if (cookieConsent) cookieConsent.click();
          }} className="text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300 p-2 rounded-lg" aria-label="Settings">
          <Settings className="w-5 h-5" />
        </button>
        <button onClick={() => setShowPrivacyModal(true)} className="text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300 p-2 rounded-lg" aria-label="Privacy Policy">
          <Shield className="w-5 h-5" />
        </button>
        <button onClick={() => setShowServiceModal(true)} className="text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300 p-2 rounded-lg" aria-label="For Those Who Serve">
          <Flower2 className="w-5 h-5" />
        </button>
      </div>

      {/* Desktop: Fixed social links at bottom right */}
      <div className="hidden lg:flex fixed bottom-4 right-4 z-50 gap-2">
        <a href="https://www.instagram.com/lifeli.me" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 p-2 rounded-lg" aria-label="Instagram">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="https://facebook.com/mylifelime/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 p-2 rounded-lg" aria-label="Facebook">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com/company/lifelime/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 p-2 rounded-lg" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>

    </div>;
};
export default HeroSection;