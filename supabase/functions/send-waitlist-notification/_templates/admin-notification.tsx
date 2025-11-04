interface AdminNotificationEmailProps {
  email: string
  browserName?: string
  osName?: string
  locationCountry?: string
}

export const generateAdminNotificationHTML = ({
  email,
  browserName,
  osName,
  locationCountry,
}: AdminNotificationEmailProps): string => {
  const timestamp = new Date().toLocaleString();
  
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; background-color: #f9fafb; background-image: url('http://lifelime.trnka.one/bg_lifelime.png'); background-size: cover; background-position: center; background-repeat: no-repeat; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;">
        <div style="margin: 0 auto; padding: 40px 20px; max-width: 600px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <img 
              src="http://lifelime.trnka.one/logo_lifelime_l_white.png" 
              width="60" 
              height="60" 
              alt="Lifeli.me"
              style="margin: 0 auto;"
            />
          </div>
          
          <div style="background-color: #ffffff; border-radius: 12px; padding: 32px; border: 1px solid #e5e7eb;">
            <h1 style="color: #111827; font-size: 24px; font-weight: 700; margin: 0 0 24px; text-align: center;">
              New Waitlist Signup! 🎉
            </h1>
            
            <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #f3f4f6;">
              <p style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 4px;">Email:</p>
              <p style="color: #111827; font-size: 16px; font-weight: 500; margin: 0;">${email}</p>
            </div>
            
            ${browserName ? `
            <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #f3f4f6;">
              <p style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 4px;">Browser:</p>
              <p style="color: #111827; font-size: 16px; font-weight: 500; margin: 0;">${browserName}</p>
            </div>
            ` : ''}
            
            ${osName ? `
            <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #f3f4f6;">
              <p style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 4px;">OS:</p>
              <p style="color: #111827; font-size: 16px; font-weight: 500; margin: 0;">${osName}</p>
            </div>
            ` : ''}
            
            ${locationCountry ? `
            <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #f3f4f6;">
              <p style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 4px;">Location:</p>
              <p style="color: #111827; font-size: 16px; font-weight: 500; margin: 0;">${locationCountry}</p>
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
