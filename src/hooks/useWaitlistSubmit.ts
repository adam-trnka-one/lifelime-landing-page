import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

interface WaitlistData {
  firstName: string;
  lastName?: string;
  email: string;
  turnstileToken: string;
}

// Helper function to parse user agent
const getBrowserInfo = () => {
  const ua = navigator.userAgent;
  let browserName = "Unknown";
  let browserVersion = "Unknown";
  let osName = "Unknown";

  // Detect browser
  if (ua.includes("Firefox/")) {
    browserName = "Firefox";
    browserVersion = ua.match(/Firefox\/(\d+\.\d+)/)?.[1] || "Unknown";
  } else if (ua.includes("Edg/")) {
    browserName = "Edge";
    browserVersion = ua.match(/Edg\/(\d+\.\d+)/)?.[1] || "Unknown";
  } else if (ua.includes("Chrome/") && !ua.includes("Edg/")) {
    browserName = "Chrome";
    browserVersion = ua.match(/Chrome\/(\d+\.\d+)/)?.[1] || "Unknown";
  } else if (ua.includes("Safari/") && !ua.includes("Chrome/")) {
    browserName = "Safari";
    browserVersion = ua.match(/Version\/(\d+\.\d+)/)?.[1] || "Unknown";
  }

  // Detect OS
  if (ua.includes("Windows NT")) {
    osName = "Windows";
  } else if (ua.includes("Mac OS X")) {
    osName = "macOS";
  } else if (ua.includes("Linux")) {
    osName = "Linux";
  } else if (ua.includes("Android")) {
    osName = "Android";
  } else if (ua.includes("iOS") || ua.includes("iPhone") || ua.includes("iPad")) {
    osName = "iOS";
  }

  return { browserName, browserVersion, osName };
};

export const useWaitlistSubmit = () => {
  const { toast } = useToast();
  const { i18n } = useTranslation();

  return useMutation({
    mutationFn: async (data: WaitlistData) => {
      // Check for cookie consent
      const cookieConsent = localStorage.getItem("cookie_consent");
      const hasConsent = cookieConsent === "accepted";

      // Get browser information
      const { browserName, browserVersion, osName } = getBrowserInfo();

      // Get screen information
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;

      // Get language and timezone
      const websiteLanguage = i18n.language;
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      // Get user agent
      const userAgent = navigator.userAgent;

      // Invoke the centralized join-waitlist function
      const { data: responseData, error } = await supabase.functions.invoke('join-waitlist', {
        body: {
          firstName: data.firstName.trim(),
          lastName: data.lastName?.trim(),
          email: data.email.trim().toLowerCase(),
          turnstileToken: data.turnstileToken,
          browserName,
          browserVersion,
          osName,
          screenWidth,
          screenHeight,
          language: websiteLanguage,
          timezone,
          userAgent,
          hasConsent,
        }
      });

      if (error) {
        // Handle Edge Function error
        const body = await error.context?.json();
        throw new Error(body?.error || error.message || 'Failed to join waitlist');
      }

      return responseData;
    },
    onSuccess: () => {
      // Remove toast notification since we're showing modal
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
