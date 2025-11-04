import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

interface About2ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const About2Modal = ({ open, onOpenChange }: About2ModalProps) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onOpenChange(false);
      setIsClosing(false);
      setShowModal(false);
    }, 300);
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => setShowModal(true), 10);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8 z-[60] bg-black/60 backdrop-blur-sm transition-all duration-300 ease-out ${showModal && !isClosing ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      <div 
        className={`max-w-6xl w-full relative transition-all duration-300 ease-out ${showModal && !isClosing ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-700 hover:text-gray-900 transition-colors z-10 p-2 touch-manipulation"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        {/* Scrollable Content */}
        <div 
          className="bg-white rounded-3xl p-6 sm:p-8 lg:p-14 shadow-2xl overflow-y-auto max-h-[85vh] sm:max-h-[90vh] overscroll-contain touch-pan-y scrollbar-hide"
          style={{ 
            boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.3)',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            {t('privacyTitle')}
          </h2>
          <p className="text-gray-700 mb-8 text-base sm:text-lg leading-relaxed">
            {t('privacyIntro')}
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed text-base sm:text-lg">
            {/* What We Collect */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{t('privacyWhatWeCollectTitle')}</h3>
              <p className="mb-4">{t('privacyWhatWeCollectIntro')}</p>
              <ul className="space-y-3 ml-4">
                <li>
                  <span className="font-semibold text-gray-900">{t('privacyWhatWeCollectItem1Title')}</span> — {t('privacyWhatWeCollectItem1')}
                </li>
                <li>
                  <span className="font-semibold text-gray-900">{t('privacyWhatWeCollectItem2Title')}</span> — {t('privacyWhatWeCollectItem2')}
                </li>
              </ul>
              <p className="mt-4">{t('privacyWhatWeCollectFooter')}</p>
            </div>

            {/* Where Your Data Lives */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{t('privacyWhereDataTitle')}</h3>
              <p className="mb-4">{t('privacyWhereDataIntro')}</p>
              <ul className="space-y-2 ml-4">
                <li>
                  <span className="font-semibold text-gray-900">{t('privacyWhereDataItem1Title')}</span> — {t('privacyWhereDataItem1')}
                </li>
                <li>
                  <span className="font-semibold text-gray-900">{t('privacyWhereDataItem2Title')}</span> — {t('privacyWhereDataItem2')}
                </li>
              </ul>
              <p className="mt-4">{t('privacyWhereDataFooter')}</p>
            </div>

            {/* Your Rights */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{t('privacyRightsTitle')}</h3>
              <p className="mb-4">{t('privacyRightsIntro')}</p>
              <ul className="space-y-2 ml-4">
                <li>• {t('privacyRightsItem1')}</li>
                <li>• {t('privacyRightsItem2')}</li>
                <li>• {t('privacyRightsItem3')}</li>
              </ul>
            </div>

            {/* How We Protect It */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{t('privacyProtectionTitle')}</h3>
              <ul className="space-y-2 ml-4">
                <li>• {t('privacyProtectionItem1')}</li>
                <li>• {t('privacyProtectionItem2')}</li>
                <li>• {t('privacyProtectionItem3')}</li>
              </ul>
            </div>

            {/* Cookies & Analytics */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{t('privacyCookiesTitle')}</h3>
              <p className="mb-4">{t('privacyCookiesIntro')}</p>
              <p className="mb-3">{t('privacyCookiesWhenAccept')}</p>
              <ul className="space-y-2 ml-4">
                <li>• {t('privacyCookiesItem1')}</li>
                <li>• {t('privacyCookiesItem2')}</li>
                <li>• {t('privacyCookiesItem3')}</li>
              </ul>
              <p className="mt-4">{t('privacyCookiesFooter')}</p>
            </div>

            {/* In Short */}
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{t('privacyInShortTitle')}</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                {t('privacyInShort')}
              </p>
            </div>

            {/* Contact */}
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-lg text-gray-700">
                {t('privacyContact')}{' '}
                <a href="mailto:privacy@lifeli.me" className="font-semibold text-primary hover:underline">
                  privacy@lifeli.me
                </a>{' '}
                {t('privacyContactOr')}{' '}
                <a href="mailto:adam@lifeli.me" className="font-semibold text-primary hover:underline">
                  adam@lifeli.me
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2Modal;
