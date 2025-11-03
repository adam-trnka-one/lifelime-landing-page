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

interface WaitlistConfirmationEmailProps {
  email: string
}

export const WaitlistConfirmationEmail = ({
  email,
}: WaitlistConfirmationEmailProps) => (
  <Html>
    <Head />
    <Preview>You're on the Lifeli.me waitlist! 🎉</Preview>
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
          <Heading style={h1}>You're on the list! 🎉</Heading>
          
          <Text style={text}>
            Thank you for joining the <strong>lifeli.me</strong> waitlist.
          </Text>
          
          <Text style={text}>
            I started building lifeli.me because I wanted a place to capture the parts of life that truly define us — the moments, sounds, stories, and lessons that deserve to last.
          </Text>
          
          <Text style={text}>
            Soon, you'll be able to craft your own timeline, week by week — adding photos, videos, voice notes, and reflections that grow into your personal legacy.
          </Text>
          
          <Text style={text}>
            You're now part of the early circle shaping how lifeli.me evolves. Until the public launch, you can follow our progress and updates on{' '}
            <a href="https://instagram.com/lifeli.me" style={link}>Instagram</a> |{' '}
            <a href="https://facebook.com/lifeli.me" style={link}>Facebook</a> |{' '}
            <a href="https://linkedin.com/company/lifeli-me" style={link}>LinkedIn</a>.
          </Text>
          
          <Text style={text}>
            If you'd like to share your thoughts, ideas, or just say hi — I'd love to hear from you. You can reach me directly at{' '}
            <a href="mailto:adam@lifeli.me" style={link}>adam@lifeli.me</a>.
          </Text>
        </Section>
        
        <Section style={footer}>
          <table style={{ margin: '0 auto', marginBottom: '16px' }}>
            <tr>
              <td style={{ paddingRight: '16px', verticalAlign: 'top' }}>
                <Img
                  src="https://drljjepaolzzlirxhbit.supabase.co/storage/v1/object/public/assets/adam_lifelime.png"
                  width="64"
                  height="64"
                  alt="Adam Trnka"
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />
              </td>
              <td style={{ verticalAlign: 'top' }}>
                <Text style={{ ...footerText, textAlign: 'left', margin: '0' }}>
                  Gratefully,<br />
                  <strong>Adam Trnka</strong><br />
                  Founder, lifeli.me<br />
                  <a href="https://www.lifeli.me" style={link}>www.lifeli.me</a>
                </Text>
              </td>
            </tr>
          </table>
          <Text style={footerSmall}>
            You received this email because you signed up for the lifeli.me waitlist with {email}
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default WaitlistConfirmationEmail

const main = {
  backgroundColor: '#f3f0ff',
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
  background: 'linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%)',
  borderRadius: '16px',
  padding: '40px 32px',
  boxShadow: '0 10px 30px -10px rgba(155, 135, 245, 0.3)',
}

const h1 = {
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: '700',
  margin: '0 0 24px',
  textAlign: 'center' as const,
  lineHeight: '1.2',
}

const text = {
  color: '#ffffff',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px',
}

const link = {
  color: '#ffffff',
  textDecoration: 'underline',
}

const highlightText = {
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '1.6',
  margin: '24px 0 0',
  textAlign: 'center' as const,
}

const footer = {
  marginTop: '32px',
  textAlign: 'center' as const,
}

const footerText = {
  color: '#666666',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '0 0 16px',
}

const footerSmall = {
  color: '#999999',
  fontSize: '12px',
  lineHeight: '1.5',
  margin: '0',
}
