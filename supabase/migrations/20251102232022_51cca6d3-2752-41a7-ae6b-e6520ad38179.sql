-- Create waitlist table
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  location_country TEXT,
  location_region TEXT,
  location_city TEXT,
  browser_name TEXT,
  browser_version TEXT,
  os_name TEXT,
  screen_width INTEGER,
  screen_height INTEGER,
  language TEXT,
  timezone TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert their own waitlist entry (public registration)
CREATE POLICY "Anyone can register for waitlist" 
ON public.waitlist 
FOR INSERT 
WITH CHECK (true);

-- Policy: Only allow authenticated admins to view waitlist entries
-- For now, we'll allow service role only (via edge functions)
-- No direct SELECT access for public users
CREATE POLICY "Service role can view all waitlist entries" 
ON public.waitlist 
FOR SELECT 
USING (false);

-- Create index for email lookups
CREATE INDEX idx_waitlist_email ON public.waitlist(email);

-- Create index for created_at for chronological queries
CREATE INDEX idx_waitlist_created_at ON public.waitlist(created_at DESC);