import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

interface AboutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AboutModal = ({ open, onOpenChange }: AboutModalProps) => {
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
          className="bg-white rounded-3xl p-6 sm:p-8 lg:p-14 shadow-2xl overflow-y-auto max-h-[85vh] sm:max-h-[90vh] overscroll-contain scrollbar-hide"
          style={{ 
            boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.3)',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-y'
          }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">{t('aboutTitle')}</h2>
          <p className="text-gray-700 mb-6 text-base sm:text-lg italic">{t('aboutSubtitle')}</p>
          
          {/* YouTube Video */}
          <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-2xl touch-auto">
            <iframe
              className="absolute inset-0 w-full h-full pointer-events-auto"
              src="https://www.youtube.com/embed/_HWRGKfSq3A"
              title="lifeli.me Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            <p>{t('aboutP1')}</p>
            
            <p>{t('aboutP2')}</p>
            
            <p>{t('aboutP3')}</p>
            
            <p className="font-semibold text-gray-900">{t('aboutP4')}<br />{t('aboutP4b')}</p>
            
            <p>{t('aboutP5')}</p>
            
            <p>{t('aboutP6')}</p>
            
            <p>{t('aboutP7')}</p>
            
            <p>{t('aboutP8')}</p>
            
            <p>{t('aboutP9')}</p>
            
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-200">
              <img 
                src="/adam_lifelime.png"
                alt="Adam Trnka" 
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <p className="text-gray-900">
                <span className="font-semibold">Adam Trnka</span><br />
                Founder, lifeli.me<br />
                www.lifeli.me
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
