interface WaitlistConfirmationEmailProps {
  firstName: string
  email: string
  language?: string
}

// Translations for all supported languages
const translations: Record<string, any> = {
  en: {
    emailTitle: "Amazing, You're on the list! 🎉",
    emailGreeting: "Hello",
    emailP1: "I'm Adam, founder of lifeli.me and I want to personaly thank you for joining the waitlist.",
    emailP2: "I started building lifeli.me because I wanted a place to capture the parts of life that truly define us - the moments, sounds, stories, and lessons that deserve to last for future generations.",
    emailP3: "Soon, you'll be able to craft your own timeline, week by week - adding photos, videos, voice, notes, and reflections that grow into your personal legacy - same as the medieval kings and monarchs.",
    emailP4: "You're now part of the early circle shaping how lifeli.me evolves. Until the public launch, you can follow our progress and updates on social like",
    emailP5: "If you'd like to share your thoughts, ideas, or just say hi - I'd love to hear from you. You can reach me directly at",
    emailP5b: "and we can even plan a call ;-)",
    emailSignature: "Gratefully,",
    emailFooter: "You're receiving this because you joined our waitlist - thank you for that!",
    emailUnsubscribe: "No pressure though - if you change your mind, you can",
    unsubscribeLink: "unsubscribe anytime"
  },
  fr: {
    emailTitle: "Incroyable, vous êtes sur la liste ! 🎉",
    emailGreeting: "Bonjour",
    emailP1: "Je suis Adam, fondateur de lifeli.me et je tiens à vous remercier personnellement d'avoir rejoint la liste d'attente.",
    emailP2: "J'ai commencé à construire lifeli.me parce que je voulais un endroit pour capturer les parties de la vie qui nous définissent vraiment - les moments, les sons, les histoires et les leçons qui méritent de durer pour les générations futures.",
    emailP3: "Bientôt, vous pourrez créer votre propre chronologie, semaine après semaine - en ajoutant des photos, des vidéos, de la voix, des notes et des réflexions qui se transforment en votre héritage personnel - tout comme les rois et monarques médiévaux.",
    emailP4: "Vous faites maintenant partie du cercle précoce qui façonne l'évolution de lifeli.me. Jusqu'au lancement public, vous pouvez suivre nos progrès et mises à jour sur les réseaux sociaux comme",
    emailP5: "Si vous souhaitez partager vos pensées, vos idées ou simplement dire bonjour - j'aimerais avoir de vos nouvelles. Vous pouvez me contacter directement à",
    emailP5b: "et nous pouvons même planifier un appel ;-)",
    emailSignature: "Avec gratitude,",
    emailFooter: "Vous recevez ceci parce que vous avez rejoint notre liste d'attente - merci pour cela!",
    emailUnsubscribe: "Aucune pression cependant - si vous changez d'avis, vous pouvez",
    unsubscribeLink: "vous désabonner à tout moment"
  },
  de: {
    emailTitle: "Fantastisch, Sie sind auf der Liste! 🎉",
    emailGreeting: "Hallo",
    emailP1: "Ich bin Adam, Gründer von lifeli.me und ich möchte mich persönlich bei Ihnen für die Anmeldung zur Warteliste bedanken.",
    emailP2: "Ich habe angefangen, lifeli.me zu bauen, weil ich einen Ort wollte, um die Teile des Lebens festzuhalten, die uns wirklich definieren - die Momente, Klänge, Geschichten und Lektionen, die für zukünftige Generationen bewahrt werden sollten.",
    emailP3: "Bald können Sie Ihre eigene Zeitleiste erstellen, Woche für Woche - Fotos, Videos, Stimme, Notizen und Reflexionen hinzufügen, die zu Ihrem persönlichen Vermächtnis werden - genau wie die mittelalterlichen Könige und Monarchen.",
    emailP4: "Sie sind jetzt Teil des frühen Kreises, der die Entwicklung von lifeli.me prägt. Bis zum öffentlichen Start können Sie unseren Fortschritt und Updates in sozialen Medien verfolgen wie",
    emailP5: "Wenn Sie Ihre Gedanken, Ideen teilen oder einfach Hallo sagen möchten - ich würde mich freuen, von Ihnen zu hören. Sie können mich direkt erreichen unter",
    emailP5b: "und wir können sogar einen Anruf planen ;-)",
    emailSignature: "Mit Dankbarkeit,",
    emailFooter: "Sie erhalten dies, weil Sie unserer Warteliste beigetreten sind - vielen Dank dafür!",
    emailUnsubscribe: "Kein Druck - wenn Sie Ihre Meinung ändern, können Sie sich jederzeit",
    unsubscribeLink: "jederzeit abmelden"
  },
  cz: {
    emailTitle: "Úžasné, jste na seznamu! 🎉",
    emailGreeting: "Dobrý den",
    emailP1: "Jsem Adam, zakladatel lifeli.me a chci vám osobně poděkovat za připojení k čekací listině.",
    emailP2: "Začal jsem stavět lifeli.me, protože jsem chtěl místo pro zachycení částí života, které nás skutečně definují - okamžiky, zvuky, příběhy a lekce, které si zaslouží trvat pro budoucí generace.",
    emailP3: "Brzy si budete moci vytvořit vlastní časovou osu, týden po týdnu - přidávat fotky, videa, hlas, poznámky a úvahy, které se změní ve váš osobní odkaz - stejně jako středověcí králové a panovníci.",
    emailP4: "Nyní jste součástí raného kruhu, který formuje, jak se lifeli.me vyvíjí. Do veřejného spuštění můžete sledovat náš pokrok a aktualizace na sociálních sítích jako",
    emailP5: "Pokud byste chtěli sdílet své myšlenky, nápady nebo jen říct ahoj - rád se od vás ozvu. Můžete mě kontaktovat přímo na",
    emailP5b: "a můžeme si dokonce naplánovat hovor ;-)",
    emailSignature: "S vděčností,",
    emailFooter: "Dostáváte toto, protože jste se připojili k naší čekací listině - děkujeme vám za to!",
    emailUnsubscribe: "Žádný tlak - pokud si to rozmyslíte, můžete se kdykoli",
    unsubscribeLink: "kdykoli odhlásit"
  },
  es: {
    emailTitle: "¡Increíble, estás en la lista! 🎉",
    emailGreeting: "Hola",
    emailP1: "Soy Adam, fundador de lifeli.me y quiero agradecerte personalmente por unirte a la lista de espera.",
    emailP2: "Comencé a construir lifeli.me porque quería un lugar para capturar las partes de la vida que realmente nos definen: los momentos, sonidos, historias y lecciones que merecen durar para las generaciones futuras.",
    emailP3: "Pronto podrás crear tu propia línea de tiempo, semana tras semana: agregando fotos, videos, voz, notas y reflexiones que se convierten en tu legado personal, igual que los reyes y monarcas medievales.",
    emailP4: "Ahora eres parte del círculo temprano que da forma a cómo evoluciona lifeli.me. Hasta el lanzamiento público, puedes seguir nuestro progreso y actualizaciones en redes sociales como",
    emailP5: "Si te gustaría compartir tus pensamientos, ideas o simplemente saludar, me encantaría saber de ti. Puedes contactarme directamente en",
    emailP5b: "¡y hasta podemos planear una llamada! ;-)",
    emailSignature: "Agradecidamente,",
    emailFooter: "Recibes esto porque te uniste a nuestra lista de espera - ¡gracias por eso!",
    emailUnsubscribe: "Sin presión - si cambias de opinión, puedes",
    unsubscribeLink: "cancelar tu suscripción en cualquier momento"
  },
  pl: {
    emailTitle: "Niesamowite, jesteś na liście! 🎉",
    emailGreeting: "Witaj",
    emailP1: "Jestem Adam, założyciel lifeli.me i chcę osobiście podziękować za dołączenie do listy oczekujących.",
    emailP2: "Zacząłem budować lifeli.me, ponieważ chciałem miejsce do uchwycenia części życia, które naprawdę nas definiują - chwile, dźwięki, historie i lekcje, które zasługują na to, by trwać dla przyszłych pokoleń.",
    emailP3: "Wkrótce będziesz mógł stworzyć własną oś czasu, tydzień po tygodniu - dodając zdjęcia, filmy, głos, notatki i refleksje, które przekształcają się w twoje osobiste dziedzictwo - tak samo jak średniowieczni królowie i monarchowie.",
    emailP4: "Jesteś teraz częścią wczesnego kręgu kształtującego rozwój lifeli.me. Do czasu publicznego uruchomienia możesz śledzić nasze postępy i aktualizacje w mediach społecznościowych, takich jak",
    emailP5: "Jeśli chciałbyś podzielić się swoimi przemyśleniami, pomysłami lub po prostu porozmawiać - chętnie od ciebie usłyszę. Możesz skontaktować się ze mną bezpośrednio pod adresem",
    emailP5b: "i możemy nawet zaplanować rozmowę ;-)",
    emailSignature: "Z wdzięcznością,",
    emailFooter: "Otrzymujesz to, ponieważ dołączyłeś do naszej listy oczekujących - dziękujemy za to!",
    emailUnsubscribe: "Bez presji - jeśli zmienisz zdanie, możesz",
    unsubscribeLink: "zrezygnować w dowolnym momencie"
  }
}

const escapeHtml = (unsafe: string) => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export const generateWaitlistConfirmationHTML = (
  firstName: string,
  email: string,
  language: string = 'en',
  unsubscribeToken?: string
): string => {
  // Normalize language code (en-US -> en, etc.)
  const normalizedLang = language.split('-')[0].toLowerCase()
  const t = translations[normalizedLang] || translations.en

  const safeFirstName = escapeHtml(firstName);
  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "https://drljjepaolzzlirxhbit.supabase.co";

  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body style="margin: 0; padding: 0; background-color: #f3f0ff; background-image: url('https://images.lifeli.me/bg_lifelime.png'); background-size: cover; background-position: center; background-repeat: no-repeat; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;">
    <div style="max-width: 672px; margin: 100px auto; padding: 80px 20px;">
      <!-- Email Container -->
      <div style="background-color: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px); border-radius: 16px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); overflow: hidden;">

        <!-- Header Section -->
        <div style="background: linear-gradient(to right, #9b87f5, #9333ea, rgba(155, 135, 245, 0.8)); padding: 48px 32px; text-align: center;">
          <img
            src="https://images.lifeli.me/adam_lifelime.png"
            alt="Adam Trnka"
            style="width: 80px; height: 80px; margin: 0 auto 24px; display: block; border-radius: 50%; object-fit: cover;"
          />
          <h1 style="color: #ffffff; font-size: 36px; font-weight: 700; margin: 0; line-height: 1.2;">
            ${t.emailTitle}
          </h1>
        </div>

        <!-- Content Section -->
        <div style="padding: 48px 32px; background-color: #ffffff;">
          <p style="color: #0f172a; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
            ${t.emailGreeting} ${safeFirstName},
          </p>

          <p style="color: #0f172a; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
            ${t.emailP1}
          </p>

          <p style="color: #0f172a; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
            ${t.emailP2}
          </p>

          <p style="color: #0f172a; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
            ${t.emailP3}
          </p>

          <p style="color: #0f172a; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
            ${t.emailP4} <a href="https://www.instagram.com/lifeli.me" target="_blank" style="color: #9b87f5; text-decoration: none; font-weight: 600;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Instagram</a>, <a href="https://facebook.com/mylifelime/" target="_blank" style="color: #9b87f5; text-decoration: none; font-weight: 600;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Facebook</a> and <a href="https://linkedin.com/company/lifelime/" target="_blank" style="color: #9b87f5; text-decoration: none; font-weight: 600;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">LinkedIn</a>.
          </p>

          <p style="color: #0f172a; font-size: 16px; line-height: 1.6; margin: 0;">
            ${t.emailP5} <a href="mailto:adam@lifeli.me" style="color: #9b87f5; text-decoration: none; font-weight: 600;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">adam@lifeli.me</a> ${t.emailP5b}
          </p>
        </div>

        <!-- Footer Section -->
        <div style="background-color: #f8fafc; padding: 24px 32px; border-top: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="vertical-align: top; padding-bottom: 16px;">
                <table style="border-collapse: collapse;">
                  <tr>
                    <td style="padding-right: 16px; vertical-align: top;">
                      <img
                        src="https://images.lifeli.me/adam_lifelime.png"
                        alt="Adam Trnka"
                        style="width: 64px; height: 64px; border-radius: 50%; object-fit: cover; display: block;"
                      />
                    </td>
                    <td style="vertical-align: top;">
                      <p style="color: #64748b; font-size: 14px; line-height: 1.5; margin: 0; text-align: left;">
                        ${t.emailSignature}<br />
                        <strong style="color: #0f172a;">Adam Trnka</strong><br />
                        Founder<br />
                        <a href="mailto:adam@lifeli.me" style="color: #9b87f5; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">adam@lifeli.me</a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
              <td style="text-align: right; vertical-align: top; padding-bottom: 16px;">
                <a href="https://www.instagram.com/lifeli.me" target="_blank" style="display: inline-block; margin-left: 12px; color: #64748b; text-decoration: none; font-size: 14px;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Instagram</a>
                <a href="https://facebook.com/mylifelime/" target="_blank" style="display: inline-block; margin-left: 12px; color: #64748b; text-decoration: none; font-size: 14px;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Facebook</a>
                <a href="https://linkedin.com/company/lifelime/" target="_blank" style="display: inline-block; margin-left: 12px; color: #64748b; text-decoration: none; font-size: 14px;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">LinkedIn</a>
              </td>
            </tr>
          </table>

          <p style="color: #94a3b8; font-size: 12px; line-height: 1.5; margin: 16px 0 0; text-align: center;">
            ${t.emailFooter}<br />
            ${t.emailUnsubscribe} <a href="${supabaseUrl}/functions/v1/unsubscribe-waitlist?email=${encodeURIComponent(email)}${unsubscribeToken ? `&token=${unsubscribeToken}` : ''}" style="color: #9b87f5; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">${t.unsubscribeLink}</a>.
          </p>
        </div>
      </div>
    </div>
  </body>
</html>
  `
}

export default generateWaitlistConfirmationHTML
