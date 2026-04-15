interface AdminNotificationEmailProps {
  firstName: string
  lastName?: string
  email: string
  browserName?: string
  osName?: string
  locationCountry?: string
  language?: string
}

const escapeHtml = (unsafe: string) => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export const generateAdminNotificationHTML = ({
  firstName,
  lastName,
  email,
  browserName,
  osName,
  locationCountry,
  language,
}: AdminNotificationEmailProps): string => {
  const timestamp = new Date().toLocaleString();

  const safeFirstName = escapeHtml(firstName);
  const safeLastName = lastName ? escapeHtml(lastName) : "";
  const safeEmail = escapeHtml(email);
  const safeBrowser = browserName ? escapeHtml(browserName) : "";
  const safeOS = osName ? escapeHtml(osName) : "";
  const safeLocation = locationCountry ? escapeHtml(locationCountry) : "";
  const safeLanguage = language ? escapeHtml(language) : "";

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; background-color: #f9fafb; background-image: url('https://images.lifeli.me/bg_lifelime.png'); background-size: cover; background-position: center; background-repeat: no-repeat; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;">
        <div style="margin: 0 auto; padding: 40px 20px; max-width: 600px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <img
              src="https://images.lifeli.me/adam_lifelime.png"
              width="80"
              height="80"
              alt="Adam Trnka"
              style="margin: 0 auto; border-radius: 50%; object-fit: cover;"
            />
          </div>

          <div style="background-color: #ffffff; border-radius: 12px; padding: 32px; border: 1px solid #e5e7eb;">
            <h1 style="color: #111827; font-size: 24px; font-weight: 700; margin: 0 0 24px; text-align: center;">
              New Waitlist Signup! 🎉
            </h1>

            <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #f3f4f6;">
              <p style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 4px;">First Name:</p>
              <p style="color: #111827; font-size: 16px; font-weight: 500; margin: 0;">${safeFirstName}</p>
            </div>

            ${safeLastName ? `
            <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #f3f4f6;">
              <p style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 4px;">Last Name:</p>
              <p style="color: #111827; font-size: 16px; font-weight: 500; margin: 0;">${safeLastName}</p>
            </div>
            ` : ''}

            <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #f3f4f6;">
              <p style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 4px;">Email:</p>
              <p style="color: #111827; font-size: 16px; font-weight: 500; margin: 0;">${safeEmail}</p>
            </div>

            ${safeBrowser ? `
            <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #f3f4f6;">
              <p style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 4px;">Browser:</p>
              <p style="color: #111827; font-size: 16px; font-weight: 500; margin: 0;">${safeBrowser}</p>
            </div>
            ` : ''}

            ${safeOS ? `
            <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #f3f4f6;">
              <p style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 4px;">OS:</p>
              <p style="color: #111827; font-size: 16px; font-weight: 500; margin: 0;">${safeOS}</p>
            </div>
            ` : ''}

            ${safeLocation ? `
            <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #f3f4f6;">
              <p style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 4px;">Location:</p>
              <p style="color: #111827; font-size: 16px; font-weight: 500; margin: 0;">${safeLocation}</p>
            </div>
            ` : ''}

            ${safeLanguage ? `
            <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #f3f4f6;">
              <p style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 4px;">Website Language:</p>
              <p style="color: #111827; font-size: 16px; font-weight: 500; margin: 0;">${safeLanguage}</p>
            </div>
            ` : ''}

            <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #f3f4f6;">
              <p style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 4px;">Time:</p>
              <p style="color: #111827; font-size: 16px; font-weight: 500; margin: 0;">${timestamp}</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};

export default generateAdminNotificationHTML;
