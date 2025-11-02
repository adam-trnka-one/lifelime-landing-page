import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import UAParser from "ua-parser-js";

interface WaitlistData {
  email: string;
}

export const useWaitlistSubmit = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: WaitlistData) => {
      // Get browser information
      const parser = new (UAParser as any)();
      const result = parser.getResult();

      // Get screen information
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;

      // Get language and timezone
      const language = navigator.language;
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      // Get user agent
      const userAgent = navigator.userAgent;

      // Get approximate location (using IP geolocation - will be null for now, can be enhanced)
      // For production, you'd use an IP geolocation service
      let locationData = {
        location_country: null,
        location_region: null,
        location_city: null,
      };

      // Try to get location from IP using a free service
      try {
        const response = await fetch('https://ipapi.co/json/');
        if (response.ok) {
          const ipData = await response.json();
          locationData = {
            location_country: ipData.country_name || null,
            location_region: ipData.region || null,
            location_city: ipData.city || null,
          };
        }
      } catch (error) {
        console.log('Location detection unavailable, continuing without location');
      }

      // Insert into database
      const { data: insertedData, error } = await supabase
        .from("waitlist")
        .insert([
          {
            email: data.email.trim().toLowerCase(),
            browser_name: result.browser.name || null,
            browser_version: result.browser.version || null,
            os_name: result.os.name || null,
            screen_width: screenWidth,
            screen_height: screenHeight,
            language: language,
            timezone: timezone,
            user_agent: userAgent,
            ...locationData,
          },
        ])
        .select()
        .single();

      if (error) {
        // Check if it's a duplicate email error
        if (error.code === '23505') {
          throw new Error('This email is already registered for the waitlist');
        }
        throw error;
      }

      return insertedData;
    },
    onSuccess: () => {
      toast({
        title: "Successfully joined the waitlist!",
        description: "We'll notify you when we launch.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to join waitlist",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });
};
