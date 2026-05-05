import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

type NotificationType = "enquiry" | "newsletter";

interface EnquiryDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  phoneCode?: string;
  country?: string;
  subject: string;
  message: string;
}

interface NewsletterDetails {
  email: string;
  source: string;
}

interface NotificationProps {
  type: NotificationType;
  enquiry?: EnquiryDetails;
  newsletter?: NewsletterDetails;
}

export default function InternalNotification({
  type,
  enquiry,
  newsletter,
}: NotificationProps) {
  const isEnquiry = type === "enquiry";

  const previewText = isEnquiry
    ? `New enquiry from ${enquiry?.firstName} ${enquiry?.lastName} (${enquiry?.subject})`
    : `New newsletter signup: ${newsletter?.email}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={logoText}>Stacey Elsie Lamptey</Text>
            <Text style={headerBadge}>
              {isEnquiry ? "New Enquiry" : "New Subscriber"}
            </Text>
          </Section>

          {/* Content */}
          <Section style={content}>
            {isEnquiry && enquiry ? (
              <>
                <Text style={title}>Someone reached out.</Text>
                <Text style={subtitle}>
                  A new enquiry has been submitted via the website contact form.
                  Here are the details.
                </Text>

                <Section style={card}>
                  <Row
                    label="Name"
                    value={`${enquiry.firstName} ${enquiry.lastName}`}
                  />
                  <Row label="Email" value={enquiry.email} />
                  {(enquiry.phoneCode || enquiry.phone) && (
                    <Row
                      label="Phone"
                      value={`${enquiry.phoneCode ?? ""} ${enquiry.phone ?? ""}`.trim()}
                    />
                  )}
                  {enquiry.country && (
                    <Row label="Country" value={enquiry.country} />
                  )}
                  <Row label="Subject" value={enquiry.subject} highlight />
                </Section>

                <Text style={messageLabel}>Message</Text>
                <Section style={messageBox}>
                  <Text style={messageText}>{enquiry.message}</Text>
                </Section>
              </>
            ) : (
              newsletter && (
                <>
                  <Text style={title}>New subscriber.</Text>
                  <Text style={subtitle}>
                    Someone just joined the newsletter from your website.
                  </Text>

                  <Section style={card}>
                    <Row label="Email" value={newsletter.email} highlight />
                    <Row label="Source" value={newsletter.source} />
                  </Section>
                </>
              )
            )}
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This notification was sent automatically from staceyelsie.com.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

function Row({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <Section style={rowContainer}>
      <Text style={rowLabel}>{label}</Text>
      <Text style={highlight ? rowValueHighlight : rowValue}>{value}</Text>
    </Section>
  );
}

InternalNotification.PreviewProps = {
  type: "enquiry" as const,
  enquiry: {
    firstName: "Ama",
    lastName: "Asante",
    email: "ama@example.com",
    phone: "0244000000",
    phoneCode: "+233",
    country: "Ghana",
    subject: "Speaking Engagement",
    message:
      "Hi Stacey, we would love to have you speak at our annual conference in Accra this November. Please let us know your availability.",
  },
} satisfies NotificationProps;

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
  margin: "0 0 6px",
};

const headerBadge: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "11px",
  fontWeight: "600",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  margin: 0,
  opacity: 0.6,
};

const content: React.CSSProperties = {
  padding: "40px 40px 32px",
};

const title: React.CSSProperties = {
  color: "#0d0d0d",
  fontSize: "28px",
  fontWeight: "800",
  lineHeight: "1.15",
  margin: "0 0 12px",
};

const subtitle: React.CSSProperties = {
  color: "#666666",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 28px",
};

const card: React.CSSProperties = {
  backgroundColor: "#fafaf9",
  borderRadius: "6px",
  border: "1px solid #eeeeee",
  padding: "4px 20px",
  marginBottom: "24px",
};

const rowContainer: React.CSSProperties = {
  padding: "12px 0",
  borderBottom: "1px solid #eeeeee",
};

const rowLabel: React.CSSProperties = {
  color: "#aaaaaa",
  fontSize: "10px",
  fontWeight: "700",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  margin: "0 0 2px",
};

const rowValue: React.CSSProperties = {
  color: "#333333",
  fontSize: "14px",
  fontWeight: "500",
  margin: 0,
};

const rowValueHighlight: React.CSSProperties = {
  color: "#d69729",
  fontSize: "14px",
  fontWeight: "700",
  margin: 0,
};

const messageLabel: React.CSSProperties = {
  color: "#aaaaaa",
  fontSize: "10px",
  fontWeight: "700",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  margin: "0 0 8px",
};

const messageBox: React.CSSProperties = {
  backgroundColor: "#fafaf9",
  border: "1px solid #eeeeee",
  borderLeft: "3px solid #d69729",
  borderRadius: "4px",
  padding: "16px 20px",
};

const messageText: React.CSSProperties = {
  color: "#444444",
  fontSize: "14px",
  lineHeight: "1.7",
  margin: 0,
  whiteSpace: "pre-wrap",
};

const divider: React.CSSProperties = {
  borderColor: "#eeeeee",
  margin: "0",
};

const footer: React.CSSProperties = {
  padding: "20px 40px",
  backgroundColor: "#ffffff",
};

const footerText: React.CSSProperties = {
  color: "#cccccc",
  fontSize: "11px",
  margin: 0,
};
