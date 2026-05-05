import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface NewsletterWelcomeProps {
  email: string;
}

export default function NewsletterWelcome({ email }: NewsletterWelcomeProps) {
  return (
    <Html>
      <Head />
      <Preview>You are in. Welcome to the community.</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header bar */}
          <Section style={header}>
            <Text style={logoText}>Stacey Elsie Lamptey</Text>
          </Section>

          {/* Hero */}
          <Section style={hero}>
            <Text style={heroLabel}>Welcome</Text>
            <Text style={heroTitle}>
              You are in.
            </Text>
            <Text style={heroSubtitle}>
              So glad you are here. This is a space for growth, clarity, and the kind of conversations that move things forward. You will hear from us with ideas, resources, and updates designed to help you step further into who you are becoming.
            </Text>
            <Button href="https://staceyelsie.com" style={button}>
              Visit the Site
            </Button>
          </Section>

          {/* Divider */}
          <Hr style={divider} />

          {/* Social CTAs */}
          <Section style={socialSection}>
            <Text style={socialHeading}>Stay connected</Text>
            <Text style={socialSubtext}>
              The best conversations happen across platforms. Join in wherever you feel most at home.
            </Text>
            <Section style={socialRow}>
              <Link href="https://instagram.com/staceyelsie" style={socialLink}>
                Instagram
              </Link>
              <Text style={socialSep}>|</Text>
              <Link href="https://linkedin.com/in/staceyelsie" style={socialLink}>
                LinkedIn
              </Link>
              <Text style={socialSep}>|</Text>
              <Link href="https://twitter.com/staceyelsie" style={socialLink}>
                X (Twitter)
              </Link>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              You are receiving this because you signed up at staceyelsie.com.
            </Text>
            <Text style={footerText}>
              Sent to {email}. Questions? Reach us at{" "}
              <Link href="mailto:stacey.elsie.lamptey@gmail.com" style={footerLink}>
                stacey.elsie.lamptey@gmail.com
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

NewsletterWelcome.PreviewProps = {
  email: "hello@example.com",
} satisfies NewsletterWelcomeProps;

// Styles
const body: React.CSSProperties = {
  backgroundColor: "#f5f5f4",
  fontFamily:
    "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  margin: 0,
  padding: 0,
};

const container: React.CSSProperties = {
  maxWidth: "600px",
  margin: "40px auto",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
};

const header: React.CSSProperties = {
  backgroundColor: "#0d0d0d",
  padding: "24px 40px",
};

const logoText: React.CSSProperties = {
  color: "#d69729",
  fontSize: "16px",
  fontWeight: "700",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  margin: 0,
};

const hero: React.CSSProperties = {
  padding: "48px 40px 40px",
  backgroundColor: "#ffffff",
};

const heroLabel: React.CSSProperties = {
  color: "#d69729",
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  margin: "0 0 12px",
};

const heroTitle: React.CSSProperties = {
  color: "#0d0d0d",
  fontSize: "36px",
  fontWeight: "800",
  lineHeight: "1.1",
  margin: "0 0 20px",
};

const heroSubtitle: React.CSSProperties = {
  color: "#555555",
  fontSize: "15px",
  lineHeight: "1.7",
  margin: "0 0 32px",
};

const button: React.CSSProperties = {
  backgroundColor: "#d69729",
  color: "#ffffff",
  fontSize: "13px",
  fontWeight: "700",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: "4px",
  display: "inline-block",
};

const divider: React.CSSProperties = {
  borderColor: "#eeeeee",
  margin: "0",
};

const socialSection: React.CSSProperties = {
  padding: "36px 40px",
  backgroundColor: "#fafaf9",
};

const socialHeading: React.CSSProperties = {
  color: "#0d0d0d",
  fontSize: "18px",
  fontWeight: "700",
  margin: "0 0 8px",
};

const socialSubtext: React.CSSProperties = {
  color: "#888888",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 20px",
};

const socialRow: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const socialLink: React.CSSProperties = {
  color: "#d69729",
  fontSize: "13px",
  fontWeight: "700",
  textDecoration: "none",
  letterSpacing: "0.05em",
};

const socialSep: React.CSSProperties = {
  color: "#cccccc",
  fontSize: "13px",
  margin: "0 4px",
  display: "inline",
};

const footer: React.CSSProperties = {
  padding: "28px 40px",
  backgroundColor: "#ffffff",
};

const footerText: React.CSSProperties = {
  color: "#aaaaaa",
  fontSize: "11px",
  lineHeight: "1.6",
  margin: "0 0 4px",
};

const footerLink: React.CSSProperties = {
  color: "#aaaaaa",
  textDecoration: "underline",
};
