import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative w-full py-16 px-4 md:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />
      
      <div className="relative max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🔒 {t('privacyTitle')}
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              {t('privacyIntro')}
            </p>
          </div>

          {/* What We Collect */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-white mb-4">{t('privacyWhatWeCollectTitle')}</h3>
            <p className="text-white/80 mb-4">{t('privacyWhatWeCollectIntro')}</p>
            <ul className="space-y-3 ml-4">
              <li className="text-white/80">
                <span className="font-semibold text-white">{t('privacyWhatWeCollectItem1Title')}</span> — {t('privacyWhatWeCollectItem1')}
              </li>
              <li className="text-white/80">
                <span className="font-semibold text-white">{t('privacyWhatWeCollectItem2Title')}</span> — {t('privacyWhatWeCollectItem2')}
              </li>
            </ul>
            <p className="text-white/80 mt-4">{t('privacyWhatWeCollectFooter')}</p>
          </div>

          {/* Where Your Data Lives */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-white mb-4">{t('privacyWhereDataTitle')}</h3>
            <p className="text-white/80 mb-4">{t('privacyWhereDataIntro')}</p>
            <ul className="space-y-2 ml-4">
              <li className="text-white/80">
                <span className="font-semibold text-white">{t('privacyWhereDataItem1Title')}</span> — {t('privacyWhereDataItem1')}
              </li>
              <li className="text-white/80">
                <span className="font-semibold text-white">{t('privacyWhereDataItem2Title')}</span> — {t('privacyWhereDataItem2')}
              </li>
            </ul>
            <p className="text-white/80 mt-4">{t('privacyWhereDataFooter')}</p>
          </div>

          {/* Your Rights */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-white mb-4">{t('privacyRightsTitle')}</h3>
            <p className="text-white/80 mb-4">{t('privacyRightsIntro')}</p>
            <ul className="space-y-2 ml-4">
              <li className="text-white/80">• {t('privacyRightsItem1')}</li>
              <li className="text-white/80">• {t('privacyRightsItem2')}</li>
              <li className="text-white/80">• {t('privacyRightsItem3')}</li>
            </ul>
          </div>

          {/* How We Protect It */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-white mb-4">{t('privacyProtectionTitle')}</h3>
            <ul className="space-y-2 ml-4">
              <li className="text-white/80">• {t('privacyProtectionItem1')}</li>
              <li className="text-white/80">• {t('privacyProtectionItem2')}</li>
              <li className="text-white/80">• {t('privacyProtectionItem3')}</li>
            </ul>
          </div>

          {/* Cookies & Analytics */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-white mb-4">{t('privacyCookiesTitle')}</h3>
            <p className="text-white/80 mb-4">{t('privacyCookiesIntro')}</p>
            <p className="text-white/80 mb-3">{t('privacyCookiesWhenAccept')}</p>
            <ul className="space-y-2 ml-4">
              <li className="text-white/80">• {t('privacyCookiesItem1')}</li>
              <li className="text-white/80">• {t('privacyCookiesItem2')}</li>
              <li className="text-white/80">• {t('privacyCookiesItem3')}</li>
            </ul>
            <p className="text-white/80 mt-4">{t('privacyCookiesFooter')}</p>
          </div>

          {/* In Short */}
          <div className="mb-10 bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-4">{t('privacyInShortTitle')}</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              {t('privacyInShort')}
            </p>
          </div>

          {/* Contact */}
          <div className="text-center pt-6 border-t border-white/20">
            <p className="text-white/80 text-lg">
              {t('privacyContact')}{' '}
              <a href="mailto:privacy@lifeli.me" className="text-white font-semibold hover:underline">
                privacy@lifeli.me
              </a>{' '}
              {t('privacyContactOr')}{' '}
              <a href="mailto:adam@lifeli.me" className="text-white font-semibold hover:underline">
                adam@lifeli.me
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
