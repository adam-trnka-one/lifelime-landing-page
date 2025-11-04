import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Cookie, X, Settings } from "lucide-react";

const CookieConsent = () => {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasConsent, setHasConsent] = useState<string | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    setHasConsent(consent);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setHasConsent("accepted");
    setShowBanner(false);
    setIsExpanded(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setHasConsent("rejected");
    setShowBanner(false);
    setIsExpanded(false);
  };

  const handleEditPreferences = () => {
    setShowBanner(true);
    setIsExpanded(true);
  };

  // Show edit button if user has made a choice
  if (!showBanner && hasConsent) {
    return (
      <button
        onClick={handleEditPreferences}
        className="fixed bottom-4 left-4 z-50 text-primary hover:text-primary/80 hover:bg-primary/10 transition-all duration-300 p-2 rounded-lg"
        aria-label="Edit cookie preferences"
      >
        <Settings className="w-5 h-5 hover:rotate-90 transition-all duration-300" />
      </button>
    );
  }

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 md:max-w-sm z-50 animate-in slide-in-from-bottom-5">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Compact View */}
        {!isExpanded && (
          <div className="p-4 flex items-center gap-3">
            <Cookie className="text-primary flex-shrink-0" size={24} />
            <p className="text-sm text-gray-700 flex-1">
              {t('cookieCompact')}
            </p>
            <Button
              onClick={() => setIsExpanded(true)}
              variant="ghost"
              size="sm"
              className="text-primary hover:text-white"
            >
              {t('cookieDetails')}
            </Button>
          </div>
        )}

        {/* Expanded View */}
        {isExpanded && (
          <div className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Cookie className="text-primary" size={24} />
                <h3 className="font-semibold text-gray-900">{t('cookieTitle')}</h3>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              {t('cookieDescription')}
            </p>

            <div className="space-y-2">
              <Button
                onClick={handleAccept}
                className="w-full bg-primary text-white hover:bg-primary/90"
                size="sm"
              >
                {t('cookieAccept')}
              </Button>
              <Button
                onClick={handleReject}
                variant="outline"
                className="w-full"
                size="sm"
              >
                {t('cookieReject')}
              </Button>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              {t('cookieFooter')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
