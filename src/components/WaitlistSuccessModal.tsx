import { useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface WaitlistSuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  language?: string;
}

const translations = {
  EN: {
    title: "You're on the list!",
    description: "Thank you for joining our waitlist. We'll notify you as soon as we launch.",
    button: "Got it!"
  },
  CZ: {
    title: "Jste na seznamu!",
    description: "Děkujeme za připojení k naší čekací listině. Dáme vám vědět, jakmile spustíme.",
    button: "Rozumím!"
  },
  DE: {
    title: "Sie sind auf der Liste!",
    description: "Vielen Dank für Ihre Anmeldung. Wir benachrichtigen Sie, sobald wir starten.",
    button: "Verstanden!"
  },
  ES: {
    title: "¡Estás en la lista!",
    description: "Gracias por unirte a nuestra lista de espera. Te notificaremos tan pronto como lancemos.",
    button: "¡Entendido!"
  },
  PL: {
    title: "Jesteś na liście!",
    description: "Dziękujemy za dołączenie do naszej listy oczekujących. Powiadomimy Cię, gdy tylko wystartujemy.",
    button: "Rozumiem!"
  }
};

const WaitlistSuccessModal = ({ open, onOpenChange, language = "EN" }: WaitlistSuccessModalProps) => {
  const t = translations[language as keyof typeof translations] || translations.EN;

  useEffect(() => {
    if (open) {
      // Trigger confetti animation
      const duration = 3000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // Fire confetti from different angles
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ['#9B6FFF', '#7C3FED', '#A78BFA', '#DDD6FE']
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ['#9B6FFF', '#7C3FED', '#A78BFA', '#DDD6FE']
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-xl border-2 border-primary/20 shadow-2xl">
        <DialogHeader className="space-y-4">
          <div className="mx-auto bg-gradient-to-br from-primary to-primary/70 rounded-full p-4 w-20 h-20 flex items-center justify-center animate-scale-in shadow-lg">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {t.title}
          </DialogTitle>
          <DialogDescription className="text-center text-base sm:text-lg text-gray-600 px-2">
            {t.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex items-center justify-center gap-2 my-4 text-primary/60 animate-fade-in">
          <Sparkles className="w-5 h-5 animate-pulse" />
          <Sparkles className="w-4 h-4 animate-pulse delay-100" />
          <Sparkles className="w-5 h-5 animate-pulse delay-200" />
        </div>

        <Button
          onClick={() => onOpenChange(false)}
          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {t.button}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistSuccessModal;
