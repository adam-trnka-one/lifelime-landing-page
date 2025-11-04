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

    // Redirect to homepage with success message
    return new Response(null, {
      status: 302,
      headers: {
        "Location": "/?unsubscribed=true",
        ...corsHeaders
      },
    });
  } catch (error: any) {
    console.error("Error in unsubscribe-waitlist function:", error);
    
    // Redirect to homepage with error message
    return new Response(null, {
      status: 302,
      headers: {
        "Location": "/?unsubscribe_error=true",
        ...corsHeaders
      },
    });
  }
});
