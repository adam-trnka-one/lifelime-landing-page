import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

const getCorsHeaders = (origin: string | null) => {
  const ALLOWED_ORIGIN = Deno.env.get("ALLOWED_ORIGIN") || "*";
  const finalOrigin = ALLOWED_ORIGIN === "*" ? "*" : (origin === ALLOWED_ORIGIN ? origin : ALLOWED_ORIGIN);

  return {
    "Access-Control-Allow-Origin": finalOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
};

serve(async (req: Request): Promise<Response> => {
  const origin = req.headers.get("origin");
  const headers = getCorsHeaders(origin);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers });
  }

  try {
    const url = new URL(req.url);
    const email = url.searchParams.get("email");
    const token = url.searchParams.get("token");

    if (!email || !token) {
      return new Response(
        JSON.stringify({ error: "Email and token parameters are required" }),
        {
          status: 400,
          headers: { ...headers, "Content-Type": "application/json" },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    console.log("Attempting to unsubscribe email:", email, "with token:", token);

    // Delete the waitlist entry only if both email and token match
    const { error, count } = await supabase
      .from("waitlist")
      .delete({ count: 'exact' })
      .eq("email", email)
      .eq("unsubscribe_token", token);

    if (error) {
      console.error("Error unsubscribing:", error);
      throw error;
    }

    if (count === 0) {
      console.error("No record found with that email and token combination");
      throw new Error("Invalid unsubscribe link");
    }

    console.log("Successfully unsubscribed:", email);

    // Get the app URL from environment or use the origin from the request
    const appUrl = Deno.env.get("APP_URL") || "https://lifeli.me";
    
    // Redirect to homepage with success message
    return new Response(null, {
      status: 302,
      headers: {
        "Location": `${appUrl}?unsubscribed=true`,
        ...headers
      },
    });
  } catch (error: any) {
    console.error("Error in unsubscribe-waitlist function:", error);
    
    // Get the app URL from environment or use the origin from the request
    const appUrl = Deno.env.get("APP_URL") || "https://lifeli.me";
    
    // Redirect to homepage with error message
    return new Response(null, {
      status: 302,
      headers: {
        "Location": `${appUrl}?unsubscribe_error=true`,
        ...headers
      },
    });
  }
});
