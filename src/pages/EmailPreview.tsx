import emailBackground from "@/assets/bg_lifelime.png";
import logoLifelime from "@/assets/logo_lifelime_l_white.svg";
import adamPhoto from "@/assets/adam_lifelime.png";

const EmailPreview = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${emailBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-2xl w-full">
        {/* Email Container */}
        <div className="bg-background/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary via-purple-600 to-primary/80 p-8 text-center">
            <img 
              src={logoLifelime} 
              alt="Lifeli.me" 
              className="h-12 mx-auto mb-6"
            />
            <h1 className="text-4xl font-bold text-white mb-4">
              You're on the list! 🎉
            </h1>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <p className="text-base text-foreground">
              Hello, thank you for joining the <strong className="text-primary">lifeli.me</strong> waitlist.
            </p>

            <p className="text-base text-foreground">
              I started building lifeli.me because I wanted a place to capture the parts of life that truly define us — the moments, sounds, stories, and lessons that deserve to last.
            </p>

            <p className="text-base text-foreground">
              Soon, you'll be able to craft your own timeline, week by week — adding photos, videos, voice notes, and reflections that grow into your personal legacy.
            </p>

            <p className="text-base text-foreground">
              You're now part of the early circle shaping how lifeli.me evolves. Until the public launch, you can follow our progress and updates on{" "}
              <a href="https://instagram.com/lifeli.me" className="text-primary hover:underline font-semibold">Instagram</a> |{" "}
              <a href="https://facebook.com/lifeli.me" className="text-primary hover:underline font-semibold">Facebook</a> |{" "}
              <a href="https://linkedin.com/company/lifeli-me" className="text-primary hover:underline font-semibold">LinkedIn</a>.
            </p>

            <p className="text-base text-foreground">
              If you'd like to share your thoughts, ideas, or just say hi — I'd love to hear from you. You can reach me directly at{" "}
              <a href="mailto:adam@lifeli.me" className="text-primary hover:underline font-semibold">adam@lifeli.me</a>.
            </p>
          </div>

          {/* Footer */}
          <div className="bg-muted/50 p-6 border-t">
            <div className="flex items-center justify-center gap-4 mb-2">
              <img 
                src={adamPhoto} 
                alt="Adam Trnka" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <p className="text-sm text-muted-foreground text-left">
                Gratefully,<br />
                <span className="font-semibold">Adam Trnka</span><br />
                Founder, lifeli.me<br />
                <a href="https://www.lifeli.me" className="text-primary hover:underline">www.lifeli.me</a>
              </p>
            </div>
            <p className="text-xs text-muted-foreground/70 mt-4 text-center">
              You received this email because you signed up for the lifeli.me waitlist<br />
              <a href="#" className="text-primary hover:underline">Unsubscribe</a>
            </p>
          </div>
        </div>

        {/* Preview Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-white/80 bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
            This is a preview of the email template sent to waitlist subscribers
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailPreview;
