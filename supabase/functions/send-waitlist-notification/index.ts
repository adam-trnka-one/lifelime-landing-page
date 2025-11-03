import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

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
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, browserName, osName, locationCountry }: WaitlistNotificationRequest = await req.json();

    console.log("Sending waitlist notification for:", email);

    const emailResponse = await resend.emails.send({
      from: "Lifeli.me Waitlist <newjoinwaitlist@lifeli.me>",
      to: ["newjoinwaitlist@lifeli.me"],
      subject: "New Waitlist Signup",
      html: `
        <h2>New User Joined the Waitlist!</h2>
        <p><strong>Email:</strong> ${email}</p>
        ${browserName ? `<p><strong>Browser:</strong> ${browserName}</p>` : ''}
        ${osName ? `<p><strong>OS:</strong> ${osName}</p>` : ''}
        ${locationCountry ? `<p><strong>Location:</strong> ${locationCountry}</p>` : ''}
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

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
