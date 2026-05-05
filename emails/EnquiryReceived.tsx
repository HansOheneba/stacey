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

interface EnquiryReceivedProps {
  firstName: string;
  subject: string;
}

export default function EnquiryReceived({
  firstName,
  subject,
}: EnquiryReceivedProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Your message has been received. We will be in touch shortly.
      </Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={logoText}>Stacey Elsie Lamptey</Text>
          </Section>

          {/* Message */}
          <Section style={hero}>
            <Text style={heroLabel}>Message Received</Text>
            <Text style={heroTitle}>Thank you, {firstName}.</Text>
            <Text style={heroSubtitle}>
              Your message about{" "}
              <strong style={{ color: "#0d0d0d" }}>{subject}</strong> has landed
              safely. Stacey or a member of the team will get back to you within
              2 working days from{" "}
              <Link
                href="mailto:stacey.elsie.lamptey@gmail.com"
                style={inlineLink}
              >
                stacey.elsie.lamptey@gmail.com
              </Link>
              .
            </Text>
            <Text style={heroSubtitle}>
              While you wait, feel free to explore the site or connect across
              the social links below.
            </Text>
            <Button href="https://staceyelsie.com" style={button}>
              Back to the Site
            </Button>
          </Section>

          <Hr style={divider} />

          {/* Social CTAs */}
          <Section style={socialSection}>
            <Text style={socialHeading}>Stay connected</Text>
            <Text style={socialSubtext}>
              Follow along for ideas, insights, and updates on what is coming.
            </Text>
            <Section style={socialRow}>
              <Link href="https://instagram.com/staceyelsie" style={socialLink}>
                Instagram
              </Link>
              <Text style={socialSep}>|</Text>
              <Link
                href="https://linkedin.com/in/staceyelsie"
                style={socialLink}
              >
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
              You are receiving this because you submitted an enquiry at
              staceyelsie.com.
            </Text>
            <Text style={footerText}>
              Questions? Reply directly to this email or write to{" "}
              <Link
                href="mailto:stacey.elsie.lamptey@gmail.com"
                style={footerLink}
              >
                stacey.elsie.lamptey@gmail.com
              </Link>
              .
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

EnquiryReceived.PreviewProps = {
  firstName: "Kofi",
  subject: "Speaking Engagement",
} satisfies EnquiryReceivedProps;

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
  margin: "0 0 16px",
};

const inlineLink: React.CSSProperties = {
  color: "#d69729",
  textDecoration: "underline",
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
  marginTop: "16px",
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
