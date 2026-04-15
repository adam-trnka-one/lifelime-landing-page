import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";
import { Resend } from "https://esm.sh/resend@4.0.0";
import generateWaitlistConfirmationHTML from './_templates/waitlist-confirmation.tsx';
import generateAdminNotificationHTML from './_templates/admin-notification.tsx';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const TURNSTILE_SECRET_KEY = Deno.env.get("TURNSTILE_SECRET_KEY");

const getCorsHeaders = (origin: string | null) => {
  const ALLOWED_ORIGIN = Deno.env.get("ALLOWED_ORIGIN") || "*";
  const finalOrigin = ALLOWED_ORIGIN === "*" ? "*" : (origin === ALLOWED_ORIGIN ? origin : ALLOWED_ORIGIN);

  return {
    "Access-Control-Allow-Origin": finalOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
};

interface JoinWaitlistRequest {
  firstName: string;
  lastName?: string;
  email: string;
  turnstileToken: string;
  browserName?: string;
  browserVersion?: string;
  osName?: string;
  screenWidth?: number;
  screenHeight?: number;
  language?: string;
  timezone?: string;
  userAgent?: string;
  hasConsent?: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  const origin = req.headers.get("origin");
  const headers = getCorsHeaders(origin);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers });
  }

  try {
    const data: JoinWaitlistRequest = await req.json();
    const {
      firstName,
      lastName,
      email,
      turnstileToken,
      browserName,
      browserVersion,
      osName,
      screenWidth,
      screenHeight,
      language = 'en',
      timezone,
      userAgent,
      hasConsent
    } = data;

    // 1. Verify Turnstile Token
    if (TURNSTILE_SECRET_KEY) {
      const formData = new FormData();
      formData.append("secret", TURNSTILE_SECRET_KEY);
      formData.append("response", turnstileToken);
      formData.append("remoteip", req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "");

      const result = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        body: formData,
        method: "POST",
      });

      const outcome = await result.json();
      if (!outcome.success) {
        return new Response(JSON.stringify({ error: "Invalid CAPTCHA token" }), {
          status: 400,
          headers: { "Content-Type": "application/json", ...headers },
        });
      }
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    // 2. Location detection (Server-side) - Privacy-first using headers
    let locationData = {
      location_country: req.headers.get("x-country-name") || req.headers.get("cf-ipcountry"),
      location_region: req.headers.get("x-region-name"),
      location_city: req.headers.get("x-city-name") || req.headers.get("cf-ipcity"),
    };

    // Fallback to ipapi.co only if headers are missing and user gave consent
    if (hasConsent && (!locationData.location_country || !locationData.location_city)) {
      const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0].trim();
      if (clientIp) {
        try {
          const response = await fetch(`https://ipapi.co/${clientIp}/json/`);
          if (response.ok) {
            const ipData = await response.json();
            locationData = {
              location_country: locationData.location_country || ipData.country_name,
              location_region: locationData.location_region || ipData.region,
              location_city: locationData.location_city || ipData.city,
            };
          }
        } catch (error) {
          console.error("Error detecting location via fallback:", error);
        }
      }
    }

    const unsubscribeToken = crypto.randomUUID();

    // 3. Insert into Database
    const { error: dbError } = await supabase
      .from("waitlist")
      .insert([
        {
          first_name: firstName.trim(),
          last_name: lastName?.trim() || null,
          email: email.trim().toLowerCase(),
          unsubscribe_token: unsubscribeToken,
          browser_name: browserName,
          browser_version: browserVersion,
          os_name: osName,
          screen_width: screenWidth,
          screen_height: screenHeight,
          language: language,
          timezone: timezone,
          user_agent: userAgent,
          cookies_consent: hasConsent,
          consent_timestamp: hasConsent ? new Date().toISOString() : null,
          ...locationData,
        },
      ]);

    if (dbError) {
      if (dbError.code === '23505') {
        return new Response(JSON.stringify({ error: "This email is already registered" }), {
          status: 400,
          headers: { "Content-Type": "application/json", ...headers },
        });
      }
      throw dbError;
    }

    // 4. Send Emails
    const subjectTranslations: Record<string, string> = {
      en: `Welcome to lifeli.me waiting list ${firstName}`,
      de: `Willkommen auf der lifeli.me Warteliste ${firstName}`,
      es: `Bienvenido a la lista de espera de lifeli.me ${firstName}`,
      fr: `Bienvenue sur la liste d'attente lifeli.me ${firstName}`,
      cz: `Vítejte na čekací listině lifeli.me ${firstName}`,
      pl: `Witamy na liście oczekujących lifeli.me ${firstName}`,
    };

    const emailSubject = subjectTranslations[language] || subjectTranslations['en'];

    const adminHtml = generateAdminNotificationHTML({
      firstName,
      lastName,
      email,
      browserName,
      osName,
      locationCountry: locationData.location_country,
      language,
    });

    const userHtml = generateWaitlistConfirmationHTML(firstName, email, language, unsubscribeToken);

    await Promise.all([
      resend.emails.send({
        from: "Lifeli.me Waitlist <newjoinwaitlist@lifeli.me>",
        to: ["newjoinwaitlist@lifeli.me"],
        subject: "New Waitlist Signup",
        html: adminHtml,
      }),
      resend.emails.send({
        from: "Adam from lifeli.me waitlist <waitlist@lifeli.me>",
        to: [email],
        subject: emailSubject,
        html: userHtml,
      })
    ]);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...headers },
    });
  } catch (error: any) {
    console.error("Error in join-waitlist function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...headers },
    });
  }
};

serve(handler);
