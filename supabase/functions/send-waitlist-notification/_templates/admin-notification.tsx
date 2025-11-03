import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from 'https://esm.sh/@react-email/components@0.0.22'
import * as React from 'https://esm.sh/react@18.3.1'

interface AdminNotificationEmailProps {
  email: string
  browserName?: string
  osName?: string
  locationCountry?: string
}

export const AdminNotificationEmail = ({
  email,
  browserName,
  osName,
  locationCountry,
}: AdminNotificationEmailProps) => (
  <Html>
    <Head />
    <Preview>New user joined the Lifeli.me waitlist</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoSection}>
          <Img
            src="https://drljjepaolzzlirxhbit.supabase.co/storage/v1/object/public/assets/logo_lifelime_l.svg"
            width="120"
            height="40"
            alt="Lifeli.me"
            style={logo}
          />
        </Section>
        
        <Section style={contentSection}>
          <Heading style={h1}>New Waitlist Signup! 🎉</Heading>
          
          <Section style={infoBox}>
            <Text style={infoLabel}>Email:</Text>
            <Text style={infoValue}>{email}</Text>
          </Section>
          
          {browserName && (
            <Section style={infoBox}>
              <Text style={infoLabel}>Browser:</Text>
              <Text style={infoValue}>{browserName}</Text>
            </Section>
          )}
          
          {osName && (
            <Section style={infoBox}>
              <Text style={infoLabel}>OS:</Text>
              <Text style={infoValue}>{osName}</Text>
            </Section>
          )}
          
          {locationCountry && (
            <Section style={infoBox}>
              <Text style={infoLabel}>Location:</Text>
              <Text style={infoValue}>{locationCountry}</Text>
            </Section>
          )}
          
          <Section style={infoBox}>
            <Text style={infoLabel}>Time:</Text>
            <Text style={infoValue}>{new Date().toLocaleString()}</Text>
          </Section>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default AdminNotificationEmail

const main = {
  backgroundColor: '#f9fafb',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '600px',
}

const logoSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
}

const logo = {
  margin: '0 auto',
}

const contentSection = {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '32px',
  border: '1px solid #e5e7eb',
}

const h1 = {
  color: '#111827',
  fontSize: '24px',
  fontWeight: '700',
  margin: '0 0 24px',
  textAlign: 'center' as const,
}

const infoBox = {
  marginBottom: '16px',
  paddingBottom: '16px',
  borderBottom: '1px solid #f3f4f6',
}

const infoLabel = {
  color: '#6b7280',
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  margin: '0 0 4px',
}

const infoValue = {
  color: '#111827',
  fontSize: '16px',
  fontWeight: '500',
  margin: '0',
}
