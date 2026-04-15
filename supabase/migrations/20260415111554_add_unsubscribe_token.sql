-- Add unsubscribe_token column to waitlist table
ALTER TABLE public.waitlist
ADD COLUMN unsubscribe_token UUID DEFAULT gen_random_uuid();

-- Create index for faster lookups during unsubscribe
CREATE INDEX idx_waitlist_unsubscribe_token ON public.waitlist(unsubscribe_token);
