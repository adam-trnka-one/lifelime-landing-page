import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyPolicyModal = ({ open, onOpenChange }: PrivacyPolicyModalProps) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">
            🔒 {t('privacyTitle')}
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-full pr-4">
          <div className="space-y-8">
            {/* Intro */}
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t('privacyIntro')}
            </p>

            {/* What We Collect */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t('privacyWhatWeCollectTitle')}</h3>
              <p className="text-muted-foreground mb-4">{t('privacyWhatWeCollectIntro')}</p>
              <ul className="space-y-3 ml-4">
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{t('privacyWhatWeCollectItem1Title')}</span> — {t('privacyWhatWeCollectItem1')}
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{t('privacyWhatWeCollectItem2Title')}</span> — {t('privacyWhatWeCollectItem2')}
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">{t('privacyWhatWeCollectFooter')}</p>
            </div>

            {/* Where Your Data Lives */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t('privacyWhereDataTitle')}</h3>
              <p className="text-muted-foreground mb-4">{t('privacyWhereDataIntro')}</p>
              <ul className="space-y-2 ml-4">
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{t('privacyWhereDataItem1Title')}</span> — {t('privacyWhereDataItem1')}
                </li>
                <li className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{t('privacyWhereDataItem2Title')}</span> — {t('privacyWhereDataItem2')}
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">{t('privacyWhereDataFooter')}</p>
            </div>

            {/* Your Rights */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t('privacyRightsTitle')}</h3>
              <p className="text-muted-foreground mb-4">{t('privacyRightsIntro')}</p>
              <ul className="space-y-2 ml-4">
                <li className="text-muted-foreground">• {t('privacyRightsItem1')}</li>
                <li className="text-muted-foreground">• {t('privacyRightsItem2')}</li>
                <li className="text-muted-foreground">• {t('privacyRightsItem3')}</li>
              </ul>
            </div>

            {/* How We Protect It */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t('privacyProtectionTitle')}</h3>
              <ul className="space-y-2 ml-4">
                <li className="text-muted-foreground">• {t('privacyProtectionItem1')}</li>
                <li className="text-muted-foreground">• {t('privacyProtectionItem2')}</li>
                <li className="text-muted-foreground">• {t('privacyProtectionItem3')}</li>
              </ul>
            </div>

            {/* Cookies & Analytics */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t('privacyCookiesTitle')}</h3>
              <p className="text-muted-foreground mb-4">{t('privacyCookiesIntro')}</p>
              <p className="text-muted-foreground mb-3">{t('privacyCookiesWhenAccept')}</p>
              <ul className="space-y-2 ml-4">
                <li className="text-muted-foreground">• {t('privacyCookiesItem1')}</li>
                <li className="text-muted-foreground">• {t('privacyCookiesItem2')}</li>
                <li className="text-muted-foreground">• {t('privacyCookiesItem3')}</li>
              </ul>
              <p className="text-muted-foreground mt-4">{t('privacyCookiesFooter')}</p>
            </div>

            {/* In Short */}
            <div className="bg-muted/50 rounded-xl p-6 border">
              <h3 className="text-2xl font-semibold mb-4">{t('privacyInShortTitle')}</h3>
              <p className="text-lg leading-relaxed">
                {t('privacyInShort')}
              </p>
            </div>

            {/* Contact */}
            <div className="text-center pt-6 border-t">
              <p className="text-lg text-muted-foreground">
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
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;
