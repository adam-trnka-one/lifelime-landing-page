import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const email = url.searchParams.get("email");

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email parameter is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    console.log("Attempting to unsubscribe email:", email);

    // Delete the waitlist entry
    const { error } = await supabase
      .from("waitlist")
      .delete()
      .eq("email", email);

    if (error) {
      console.error("Error unsubscribing:", error);
      throw error;
    }

    console.log("Successfully unsubscribed:", email);

    // Return a user-friendly HTML page
    return new Response(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Unsubscribed - lifeli.me</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
              background: linear-gradient(135deg, #f3f0ff 0%, #e5deff 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              margin: 0;
              padding: 20px;
            }
            .container {
              background: white;
              border-radius: 16px;
              padding: 40px;
              max-width: 500px;
              box-shadow: 0 10px 30px -10px rgba(155, 135, 245, 0.3);
              text-align: center;
            }
            h1 {
              color: #9b87f5;
              margin-bottom: 16px;
            }
            p {
              color: #666;
              line-height: 1.6;
              margin-bottom: 24px;
            }
            a {
              color: #9b87f5;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Successfully Unsubscribed</h1>
            <p>You have been removed from the lifeli.me waitlist.</p>
            <p>We're sorry to see you go. If you change your mind, you can always sign up again at <a href="https://www.lifeli.me">www.lifeli.me</a></p>
          </div>
        </body>
      </html>
      `,
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "text/html" },
      }
    );
  } catch (error: any) {
    console.error("Error in unsubscribe-waitlist function:", error);
    
    return new Response(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Error - lifeli.me</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
              background: linear-gradient(135deg, #f3f0ff 0%, #e5deff 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              margin: 0;
              padding: 20px;
            }
            .container {
              background: white;
              border-radius: 16px;
              padding: 40px;
              max-width: 500px;
              box-shadow: 0 10px 30px -10px rgba(155, 135, 245, 0.3);
              text-align: center;
            }
            h1 {
              color: #ef4444;
              margin-bottom: 16px;
            }
            p {
              color: #666;
              line-height: 1.6;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Error</h1>
            <p>There was an error processing your unsubscribe request. Please try again later or contact us at <a href="mailto:adam@lifeli.me">adam@lifeli.me</a></p>
          </div>
        </body>
      </html>
      `,
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "text/html" },
      }
    );
  }
});
