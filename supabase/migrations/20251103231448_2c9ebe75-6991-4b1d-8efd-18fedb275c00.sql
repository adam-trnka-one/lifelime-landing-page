-- Temporarily allow public uploads to assets bucket for initial file upload
CREATE POLICY "Allow public uploads to assets bucket"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'assets');