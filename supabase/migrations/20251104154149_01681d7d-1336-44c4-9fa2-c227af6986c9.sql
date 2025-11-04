-- Add first_name and last_name columns to waitlist table
ALTER TABLE public.waitlist
ADD COLUMN first_name text,
ADD COLUMN last_name text;

-- Update name column to be nullable for future flexibility
ALTER TABLE public.waitlist
ALTER COLUMN name DROP NOT NULL;