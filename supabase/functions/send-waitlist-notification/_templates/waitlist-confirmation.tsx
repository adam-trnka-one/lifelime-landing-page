import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from 'https://esm.sh/@react-email/components@0.0.22'
import * as React from 'https://esm.sh/react@18.3.1'

interface WaitlistConfirmationEmailProps {
  email: string
  language?: string
}

// Translations for all supported languages
const translations: Record<string, any> = {
  en: {
    emailTitle: "Amazing, You're on the list! 🎉",
    emailGreeting: "Hello,",
    emailP1: "I'm Adam, founder of <strong>lifeli.me</strong> and I want to personaly thank you for joining the waitlist.",
    emailP2: "I started building lifeli.me because I wanted a place to capture the parts of life that truly define us - the moments, sounds, stories, and lessons that deserve to last for future generations.",
    emailP3: "Soon, you'll be able to craft your own timeline, week by week - adding photos, videos, voice, notes, and reflections that grow into your personal legacy - same as the medieval kings and monarchs.",
    emailP4: "You're now part of the early circle shaping how lifeli.me evolves. Until the public launch, you can follow our progress and updates on social like",
    emailP5: "If you'd like to share your thoughts, ideas, or just say hi - I'd love to hear from you. You can reach me directly at",
    emailP5b: "and we can even plan a call ;-)",
    emailSignature: "Gratefully,",
    emailFooter: "You received this email because you signed up for the lifeli.me waitlist.",
    emailUnsubscribe: "We dont wan't want to hold you and if you don't want you can"
  },
  fr: {
    emailTitle: "Incroyable, vous êtes sur la liste ! 🎉",
    emailGreeting: "Bonjour,",
    emailP1: "Je suis Adam, fondateur de <strong>lifeli.me</strong> et je tiens à vous remercier personnellement d'avoir rejoint la liste d'attente.",
    emailP2: "J'ai commencé à construire lifeli.me parce que je voulais un endroit pour capturer les parties de la vie qui nous définissent vraiment - les moments, les sons, les histoires et les leçons qui méritent de durer pour les générations futures.",
    emailP3: "Bientôt, vous pourrez créer votre propre chronologie, semaine après semaine - en ajoutant des photos, des vidéos, de la voix, des notes et des réflexions qui se transforment en votre héritage personnel - tout comme les rois et monarques médiévaux.",
    emailP4: "Vous faites maintenant partie du cercle précoce qui façonne l'évolution de lifeli.me. Jusqu'au lancement public, vous pouvez suivre nos progrès et mises à jour sur les réseaux sociaux comme",
    emailP5: "Si vous souhaitez partager vos pensées, vos idées ou simplement dire bonjour - j'aimerais avoir de vos nouvelles. Vous pouvez me contacter directement à",
    emailP5b: "et nous pouvons même planifier un appel ;-)",
    emailSignature: "Avec gratitude,",
    emailFooter: "Vous avez reçu cet e-mail parce que vous vous êtes inscrit à la liste d'attente de lifeli.me.",
    emailUnsubscribe: "Nous ne voulons pas vous retenir et si vous ne voulez pas vous pouvez"
  },
  de: {
    emailTitle: "Fantastisch, Sie sind auf der Liste! 🎉",
    emailGreeting: "Hallo,",
    emailP1: "Ich bin Adam, Gründer von <strong>lifeli.me</strong> und ich möchte mich persönlich bei Ihnen für die Anmeldung zur Warteliste bedanken.",
    emailP2: "Ich habe angefangen, lifeli.me zu bauen, weil ich einen Ort wollte, um die Teile des Lebens festzuhalten, die uns wirklich definieren - die Momente, Klänge, Geschichten und Lektionen, die für zukünftige Generationen bewahrt werden sollten.",
    emailP3: "Bald können Sie Ihre eigene Zeitleiste erstellen, Woche für Woche - Fotos, Videos, Stimme, Notizen und Reflexionen hinzufügen, die zu Ihrem persönlichen Vermächtnis werden - genau wie die mittelalterlichen Könige und Monarchen.",
    emailP4: "Sie sind jetzt Teil des frühen Kreises, der die Entwicklung von lifeli.me prägt. Bis zum öffentlichen Start können Sie unseren Fortschritt und Updates in sozialen Medien verfolgen wie",
    emailP5: "Wenn Sie Ihre Gedanken, Ideen teilen oder einfach Hallo sagen möchten - ich würde mich freuen, von Ihnen zu hören. Sie können mich direkt erreichen unter",
    emailP5b: "und wir können sogar einen Anruf planen ;-)",
    emailSignature: "Mit Dankbarkeit,",
    emailFooter: "Sie haben diese E-Mail erhalten, weil Sie sich für die lifeli.me-Warteliste angemeldet haben.",
    emailUnsubscribe: "Wir wollen Sie nicht festhalten und wenn Sie nicht möchten, können Sie sich"
  },
  cz: {
    emailTitle: "Úžasné, jste na seznamu! 🎉",
    emailGreeting: "Dobrý den,",
    emailP1: "Jsem Adam, zakladatel <strong>lifeli.me</strong> a chci vám osobně poděkovat za připojení k čekací listině.",
    emailP2: "Začal jsem stavět lifeli.me, protože jsem chtěl místo pro zachycení částí života, které nás skutečně definují - okamžiky, zvuky, příběhy a lekce, které si zaslouží trvat pro budoucí generace.",
    emailP3: "Brzy si budete moci vytvořit vlastní časovou osu, týden po týdnu - přidávat fotky, videa, hlas, poznámky a úvahy, které se změní ve váš osobní odkaz - stejně jako středověcí králové a panovníci.",
    emailP4: "Nyní jste součástí raného kruhu, který formuje, jak se lifeli.me vyvíjí. Do veřejného spuštění můžete sledovat náš pokrok a aktualizace na sociálních sítích jako",
    emailP5: "Pokud byste chtěli sdílet své myšlenky, nápady nebo jen říct ahoj - rád se od vás ozvu. Můžete mě kontaktovat přímo na",
    emailP5b: "a můžeme si dokonce naplánovat hovor ;-)",
    emailSignature: "S vděčností,",
    emailFooter: "Tento e-mail jste obdrželi, protože jste se zaregistrovali na čekací listinu lifeli.me.",
    emailUnsubscribe: "Nechceme vás držet a pokud nechcete, můžete se"
  },
  es: {
    emailTitle: "¡Increíble, estás en la lista! 🎉",
    emailGreeting: "Hola,",
    emailP1: "Soy Adam, fundador de <strong>lifeli.me</strong> y quiero agradecerte personalmente por unirte a la lista de espera.",
    emailP2: "Comencé a construir lifeli.me porque quería un lugar para capturar las partes de la vida que realmente nos definen: los momentos, sonidos, historias y lecciones que merecen durar para las generaciones futuras.",
    emailP3: "Pronto podrás crear tu propia línea de tiempo, semana tras semana: agregando fotos, videos, voz, notas y reflexiones que se convierten en tu legado personal, igual que los reyes y monarcas medievales.",
    emailP4: "Ahora eres parte del círculo temprano que da forma a cómo evoluciona lifeli.me. Hasta el lanzamiento público, puedes seguir nuestro progreso y actualizaciones en redes sociales como",
    emailP5: "Si te gustaría compartir tus pensamientos, ideas o simplemente saludar, me encantaría saber de ti. Puedes contactarme directamente en",
    emailP5b: "¡y hasta podemos planear una llamada! ;-)",
    emailSignature: "Agradecidamente,",
    emailFooter: "Recibiste este correo porque te registraste en la lista de espera de lifeli.me.",
    emailUnsubscribe: "No queremos retenerte y si no quieres puedes"
  },
  pl: {
    emailTitle: "Niesamowite, jesteś na liście! 🎉",
    emailGreeting: "Witaj,",
    emailP1: "Jestem Adam, założyciel <strong>lifeli.me</strong> i chcę osobiście podziękować za dołączenie do listy oczekujących.",
    emailP2: "Zacząłem budować lifeli.me, ponieważ chciałem miejsce do uchwycenia części życia, które naprawdę nas definiują - chwile, dźwięki, historie i lekcje, które zasługują na to, by trwać dla przyszłych pokoleń.",
    emailP3: "Wkrótce będziesz mógł stworzyć własną oś czasu, tydzień po tygodniu - dodając zdjęcia, filmy, głos, notatki i refleksje, które przekształcają się w twoje osobiste dziedzictwo - tak samo jak średniowieczni królowie i monarchowie.",
    emailP4: "Jesteś teraz częścią wczesnego kręgu kształtującego rozwój lifeli.me. Do czasu publicznego uruchomienia możesz śledzić nasze postępy i aktualizacje w mediach społecznościowych, takich jak",
    emailP5: "Jeśli chciałbyś podzielić się swoimi przemyśleniami, pomysłami lub po prostu porozmawiać - chętnie od ciebie usłyszę. Możesz skontaktować się ze mną bezpośrednio pod adresem",
    emailP5b: "i możemy nawet zaplanować rozmowę ;-)",
    emailSignature: "Z wdzięcznością,",
    emailFooter: "Otrzymałeś ten e-mail, ponieważ zapisałeś się na listę oczekujących lifeli.me.",
    emailUnsubscribe: "Nie chcemy cię zatrzymywać i jeśli nie chcesz, możesz"
  }
}

export const WaitlistConfirmationEmail = ({
  email,
  language = 'en',
}: WaitlistConfirmationEmailProps) => {
  const t = translations[language] || translations.en
  
  return (
    <Html>
      <Head />
      <Preview>{t.emailTitle}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Img
              src="https://drljjepaolzzlirxhbit.supabase.co/storage/v1/object/public/assets/logo_lifelime_l.svg"
              width="120"
              height="40"
              alt="Lifeli.me"
              style={logo}
            />
          </Section>
          
          <Section style={contentSection}>
            <Heading style={h1}>{t.emailTitle}</Heading>
            
            <Text style={text}>
              {t.emailGreeting}
            </Text>
            
            <Text style={text} dangerouslySetInnerHTML={{ __html: t.emailP1 }} />
            
            <Text style={text}>
              {t.emailP2}
            </Text>
            
            <Text style={text}>
              {t.emailP3}
            </Text>
            
            <Text style={text}>
              {t.emailP4}{' '}
              <a href="https://www.instagram.com/lifeli.me" target="_blank" style={link}>Instagram</a>,{' '}
              <a href="https://facebook.com/mylifelime/" target="_blank" style={link}>Facebook</a> and{' '}
              <a href="https://linkedin.com/company/lifelime/" target="_blank" style={link}>LinkedIn</a>.
            </Text>
            
            <Text style={text}>
              {t.emailP5}{' '}
              <a href="mailto:adam@lifeli.me" style={link}>adam@lifeli.me</a> {t.emailP5b}
            </Text>
          </Section>
          
          <Section style={footer}>
            <table style={{ width: '100%', marginBottom: '16px' }}>
              <tr>
                <td style={{ paddingRight: '16px', verticalAlign: 'middle' }}>
                  <table style={{ borderCollapse: 'collapse' }}>
                    <tr>
                      <td style={{ paddingRight: '16px', verticalAlign: 'middle' }}>
                        <Img
                          src="https://drljjepaolzzlirxhbit.supabase.co/storage/v1/object/public/assets/adam_lifelime.png"
                          width="64"
                          height="64"
                          alt="Adam Trnka"
                          style={{ borderRadius: '50%', objectFit: 'cover', display: 'block' }}
                        />
                      </td>
                      <td style={{ verticalAlign: 'middle' }}>
                        <Text style={{ ...footerText, textAlign: 'left', margin: '0', lineHeight: '1.4' }}>
                          {t.emailSignature}<br />
                          <strong>Adam Trnka</strong><br />
                          Founder, lifeli.me<br />
                          <a href="https://www.lifeli.me" target="_blank" style={link}>www.lifeli.me</a>
                        </Text>
                      </td>
                    </tr>
                  </table>
                </td>
                <td style={{ textAlign: 'right', verticalAlign: 'middle', paddingTop: '8px' }}>
                  <table style={{ marginLeft: 'auto' }}>
                    <tr>
                      <td style={{ paddingLeft: '12px' }}>
                        <a href="https://www.instagram.com/lifeli.me" target="_blank" style={{ textDecoration: 'none' }}>
                          <Img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" width="24" height="24" alt="Instagram" style={{ display: 'block' }} />
                        </a>
                      </td>
                      <td style={{ paddingLeft: '12px' }}>
                        <a href="https://facebook.com/mylifelime/" target="_blank" style={{ textDecoration: 'none' }}>
                          <Img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" width="24" height="24" alt="Facebook" style={{ display: 'block' }} />
                        </a>
                      </td>
                      <td style={{ paddingLeft: '12px' }}>
                        <a href="https://linkedin.com/company/lifelime/" target="_blank" style={{ textDecoration: 'none' }}>
                          <Img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" width="24" height="24" alt="LinkedIn" style={{ display: 'block' }} />
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <Text style={footerSmall}>
              {t.emailFooter}<br />
              {t.emailUnsubscribe} <a href={`https://drljjepaolzzlirxhbit.supabase.co/functions/v1/unsubscribe-waitlist?email=${encodeURIComponent(email)}`} style={link}>unsubscribe</a>.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default WaitlistConfirmationEmail

const main = {
  backgroundColor: '#f3f0ff',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '600px',
}

const logoSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
}

const logo = {
  margin: '0 auto',
}

const contentSection = {
  background: 'linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%)',
  borderRadius: '16px',
  padding: '40px 32px',
  boxShadow: '0 10px 30px -10px rgba(155, 135, 245, 0.3)',
}

const h1 = {
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: '700',
  margin: '0 0 24px',
  textAlign: 'center' as const,
  lineHeight: '1.2',
}

const text = {
  color: '#ffffff',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px',
}

const link = {
  color: '#ffffff',
  textDecoration: 'underline',
}

const highlightText = {
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '1.6',
  margin: '24px 0 0',
  textAlign: 'center' as const,
}

const footer = {
  marginTop: '32px',
  textAlign: 'center' as const,
}

const footerText = {
  color: '#666666',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '0 0 16px',
}

const footerSmall = {
  color: '#999999',
  fontSize: '12px',
  lineHeight: '1.5',
  margin: '0',
}
