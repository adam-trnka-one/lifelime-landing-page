import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import HeroSection from "@/components/HeroSection";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("unsubscribed") === "true") {
      toast({
        title: "Successfully Unsubscribed",
        description: "You have been removed from the lifeli.me waitlist.",
      });
      // Clean up the URL
      searchParams.delete("unsubscribed");
      setSearchParams(searchParams, { replace: true });
    }
    
    if (searchParams.get("unsubscribe_error") === "true") {
      toast({
        title: "Error",
        description: "There was an error processing your unsubscribe request. Please try again later.",
        variant: "destructive",
      });
      // Clean up the URL
      searchParams.delete("unsubscribe_error");
      setSearchParams(searchParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  return (
    <>
      <HeroSection />
      <CookieConsent />
    </>
  );
};

export default Index;
