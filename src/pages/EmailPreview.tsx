import emailBackground from "@/assets/bg_lifelime.png";
import logoLifelime from "@/assets/logo_lifelime_l_white.svg";

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
            <p className="text-lg text-foreground">
              Thank you for joining the <strong className="text-primary">Lifeli.me</strong> waitlist. 
              We're excited to have you!
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-xl p-6 border border-primary/20">
              <p className="text-foreground italic">
                We're building something special – a place where you can{" "}
                <span className="text-primary font-semibold">craft your legacy</span> and{" "}
                <span className="text-primary font-semibold">preserve what defines you</span>.
              </p>
            </div>

            <p className="text-foreground">
              We'll keep you updated on our progress and let you know as soon as we're ready to launch.
            </p>

            <div className="text-center py-4">
              <p className="text-xl font-semibold text-primary">
                Stay tuned!
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-muted/50 p-6 text-center border-t">
            <p className="text-sm text-muted-foreground mb-2">
              Best regards,<br />
              <span className="font-semibold">The Lifeli.me Team</span>
            </p>
            <p className="text-xs text-muted-foreground/70 mt-4">
              You received this email because you signed up for the Lifeli.me waitlist
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
