-- Drop existing INSERT policy
DROP POLICY IF EXISTS "Anyone can register for waitlist" ON public.waitlist;

-- Create new permissive INSERT policy that allows anyone (authenticated or not)
CREATE POLICY "Anyone can register for waitlist" 
ON public.waitlist 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);