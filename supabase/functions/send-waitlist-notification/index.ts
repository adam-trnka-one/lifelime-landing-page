import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";
import generateWaitlistConfirmationHTML from './_templates/waitlist-confirmation.tsx';
import generateAdminNotificationHTML from './_templates/admin-notification.tsx';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WaitlistNotificationRequest {
  firstName: string;
  lastName?: string;
  email: string;
  unsubscribeToken?: string;
  browserName?: string;
  osName?: string;
  locationCountry?: string;
  language?: string;
  hasConsent?: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      unsubscribeToken,
      browserName,
      osName,
      locationCountry: providedLocation,
      language = 'en',
      hasConsent
    }: WaitlistNotificationRequest = await req.json();

    console.log("Sending waitlist notification for:", firstName, lastName, email, "in language:", language);

    let locationCountry = providedLocation;

    // Server-side location detection if consent is given and location not provided
    if (hasConsent && !locationCountry) {
      const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0].trim();
      if (clientIp) {
        try {
          const response = await fetch(`https://ipapi.co/${clientIp}/json/`);
          if (response.ok) {
            const ipData = await response.json();
            locationCountry = ipData.country_name;

            // Update the database record with the detected location
            const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
            const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
            const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

            await supabase
              .from("waitlist")
              .update({
                location_country: ipData.country_name,
                location_region: ipData.region,
                location_city: ipData.city
              })
              .eq("email", email);
          }
        } catch (error) {
          console.error("Error detecting location server-side:", error);
        }
      }
    }

    // Translate email subject based on language
    const subjectTranslations: Record<string, string> = {
      en: `Welcome to lifeli.me waiting list ${firstName}`,
      de: `Willkommen auf der lifeli.me Warteliste ${firstName}`,
      es: `Bienvenido a la lista de espera de lifeli.me ${firstName}`,
      fr: `Bienvenue sur la liste d'attente lifeli.me ${firstName}`,
      cz: `Vítejte na čekací listině lifeli.me ${firstName}`,
      pl: `Witamy na liście oczekujących lifeli.me ${firstName}`,
    };
    
    const emailSubject = subjectTranslations[language] || subjectTranslations['en'];

    // Generate admin email HTML
    const adminHtml = generateAdminNotificationHTML({
      firstName,
      lastName,
      email,
      browserName,
      osName,
      locationCountry,
      language,
    });

    // Send notification to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Lifeli.me Waitlist <newjoinwaitlist@lifeli.me>",
      to: ["newjoinwaitlist@lifeli.me"],
      subject: "New Waitlist Signup",
      html: adminHtml,
    });

    console.log("Admin notification sent:", adminEmailResponse);

    // Generate user confirmation email HTML
    const userHtml = generateWaitlistConfirmationHTML(firstName, email, language, unsubscribeToken);

    // Send confirmation to user
    const userEmailResponse = await resend.emails.send({
      from: "Adam from lifeli.me waitlist <waitlist@lifeli.me>",
      to: [email],
      subject: emailSubject,
      html: userHtml,
    });

    console.log("User confirmation sent:", userEmailResponse);

    const emailResponse = { admin: adminEmailResponse, user: userEmailResponse };

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
