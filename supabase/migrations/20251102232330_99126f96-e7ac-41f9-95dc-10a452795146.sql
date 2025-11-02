-- Add consent tracking to waitlist table
ALTER TABLE public.waitlist 
ADD COLUMN cookies_consent BOOLEAN DEFAULT false,
ADD COLUMN consent_timestamp TIMESTAMP WITH TIME ZONE;