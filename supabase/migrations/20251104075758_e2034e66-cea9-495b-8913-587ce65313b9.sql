-- Add name column to waitlist table
ALTER TABLE public.waitlist 
ADD COLUMN name text;

-- Add a comment to document the column
COMMENT ON COLUMN public.waitlist.name IS 'User full name from waitlist signup';