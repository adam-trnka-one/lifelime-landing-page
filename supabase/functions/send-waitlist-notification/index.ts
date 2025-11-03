import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import React from 'https://esm.sh/react@18.3.1';
import { renderAsync } from 'https://esm.sh/@react-email/components@0.0.22';
import generateWaitlistConfirmationHTML from './_templates/waitlist-confirmation.tsx';
import { AdminNotificationEmail } from './_templates/admin-notification.tsx';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WaitlistNotificationRequest {
  email: string;
  browserName?: string;
  osName?: string;
  locationCountry?: string;
  language?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, browserName, osName, locationCountry, language = 'en' }: WaitlistNotificationRequest = await req.json();

    console.log("Sending waitlist notification for:", email, "in language:", language);

    // Render admin email template
    const adminHtml = await renderAsync(
      React.createElement(AdminNotificationEmail, {
        email,
        browserName,
        osName,
        locationCountry,
      })
    );

    // Send notification to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Lifeli.me Waitlist <newjoinwaitlist@lifeli.me>",
      to: ["newjoinwaitlist@lifeli.me"],
      subject: "New Waitlist Signup",
      html: adminHtml,
    });

    console.log("Admin notification sent:", adminEmailResponse);

    // Generate user confirmation email HTML
    const userHtml = generateWaitlistConfirmationHTML(email, language);

    // Send confirmation to user
    const userEmailResponse = await resend.emails.send({
      from: "Lifeli.me <newjoinwaitlist@lifeli.me>",
      to: [email],
      subject: "Welcome to the Lifeli.me Waitlist!",
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
