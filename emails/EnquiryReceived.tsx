import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

const YOUTUBE_URL = "https://www.youtube.com/@staceyelsie";
const SITE_URL = "https://staceyelsie.com";

const socialLinks = [
  {
    label: "YouTube",
    href: YOUTUBE_URL,
    icon: "https://cdn.simpleicons.org/youtube/d69729",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/stacey_elsie_/",
    icon: "https://cdn.simpleicons.org/instagram/d69729",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/stacey-elsie-lamptey-966b901b4/",
    icon: "https://cdn.simpleicons.org/linkedin/d69729",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@stacey_elsie",
    icon: "https://cdn.simpleicons.org/tiktok/d69729",
  },
];

interface EnquiryReceivedProps {
  firstName: string;
  subject: string;
}

export default function EnquiryReceived({
  firstName,
  subject,
}: EnquiryReceivedProps) {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Body
          className="m-0 p-0 bg-[#f5f5f4]"
          style={{ fontFamily: "'Open Sans', Arial, sans-serif" }}
        >
          <Preview>
            Your message has been received. I will be in touch shortly.
          </Preview>
          <Container className="mx-auto max-w-[640px] px-4 pt-14 pb-8">
            <Section
              className="rounded-lg overflow-hidden"
              style={{ boxShadow: "0 2px 14px rgba(0,0,0,0.09)" }}
            >
              <Section className="rounded-lg overflow-hidden border border-[#e8e8e8] bg-white">
                {/* Hero image */}
                <Section className="p-0 m-0">
                  <Img
                    src={`${SITE_URL}/stacey/4.jpg`}
                    alt="Stacey Elsie Lamptey"
                    width={640}
                    style={{
                      display: "block",
                      width: "100%",
                      maxWidth: "640px",
                      height: "300px",
                      objectFit: "cover",
                      objectPosition: "top",
                      border: "none",
                    }}
                  />
                </Section>

                {/* Main content */}
                <Section className="px-10 pt-16 pb-12 text-left">
                  <Text
                    className="m-0"
                    style={{
                      color: "#d69729",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    Message Received
                  </Text>
                  <Text
                    className="m-0 mt-3"
                    style={{
                      color: "#0d0d0d",
                      fontSize: "42px",
                      fontWeight: 800,
                      lineHeight: "1.08",
                    }}
                  >
                    Thank you, {firstName}.
                  </Text>
                  <Text
                    className="m-0 mt-5"
                    style={{
                      color: "#555555",
                      fontSize: "15px",
                      lineHeight: "1.75",
                    }}
                  >
                    Your message about{" "}
                    <strong style={{ color: "#0d0d0d" }}>{subject}</strong> has
                    landed safely. I will get back to you within 2 working days
                    from{" "}
                    <Link
                      href="mailto:stacey.elsie.lamptey@gmail.com"
                      style={{ color: "#d69729", textDecoration: "underline" }}
                    >
                      stacey.elsie.lamptey@gmail.com
                    </Link>
                    .
                  </Text>
                  <Text
                    className="m-0 mt-3"
                    style={{
                      color: "#555555",
                      fontSize: "15px",
                      lineHeight: "1.75",
                    }}
                  >
                    While you wait, my YouTube channel is the best place to get
                    a feel for how I think and the kind of work I do.
                  </Text>
                  <Section className="mt-9 text-left">
                    <Button
                      href={YOUTUBE_URL}
                      style={{
                        backgroundColor: "#d69729",
                        color: "#ffffff",
                        fontSize: "13px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        padding: "14px 30px",
                        borderRadius: "4px",
                        display: "inline-block",
                      }}
                    >
                      Watch on YouTube
                    </Button>
                  </Section>
                </Section>

                {/* What happens next */}
                <Section className="bg-[#fafaf9] px-4 py-16">
                  <Section className="px-6">
                    <Text
                      className="m-0"
                      style={{
                        color: "#0d0d0d",
                        fontSize: "30px",
                        fontWeight: 800,
                        lineHeight: "1.15",
                        maxWidth: "400px",
                      }}
                    >
                      What happens next
                    </Text>
                    <Text
                      className="m-0 mt-4"
                      style={{
                        color: "#666666",
                        fontSize: "14px",
                        lineHeight: "1.7",
                        maxWidth: "460px",
                      }}
                    >
                      A simple overview of what to expect from here.
                    </Text>
                  </Section>
                  <Section className="px-6 pt-10">
                    {[
                      {
                        title: "Your message is reviewed",
                        description:
                          "Every message is read carefully. I review each one personally and will determine the best next step.",
                      },
                      {
                        title: "You hear back within 2 working days",
                        description:
                          "A response will come from stacey.elsie.lamptey@gmail.com. Check your spam folder if you do not see it.",
                      },
                      {
                        title: "A conversation begins",
                        description:
                          "If there is a good fit, I will reach out to discuss further. Either way, you will always hear back from me.",
                      },
                    ].map((item, idx) => (
                      <Section
                        key={idx}
                        style={{
                          borderBottom: "1px solid #e8e8e8",
                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <Row>
                          <Column
                            style={{ width: "92%", verticalAlign: "top" }}
                          >
                            <Text
                              className="m-0"
                              style={{
                                color: "#0d0d0d",
                                fontSize: "16px",
                                fontWeight: 700,
                                lineHeight: "1.4",
                              }}
                            >
                              {item.title}
                            </Text>
                            <Text
                              className="m-0 mt-1"
                              style={{
                                color: "#777777",
                                fontSize: "13px",
                                lineHeight: "1.65",
                                maxWidth: "380px",
                              }}
                            >
                              {item.description}
                            </Text>
                          </Column>
                          <Column
                            style={{
                              width: "8%",
                              textAlign: "right",
                              verticalAlign: "middle",
                            }}
                          >
                            <Text
                              className="m-0"
                              style={{ color: "#d69729", fontSize: "18px" }}
                            >
                              →
                            </Text>
                          </Column>
                        </Row>
                      </Section>
                    ))}
                  </Section>
                </Section>

                {/* Footer */}
                <Section
                  style={{ borderTop: "1px solid #e8e8e8", padding: "40px" }}
                >
                  <Text
                    className="m-0"
                    style={{
                      color: "#888888",
                      fontSize: "13px",
                      lineHeight: "1.7",
                      maxWidth: "340px",
                    }}
                  >
                    I am a speaker, growth strategist, and community builder. I
                    work with individuals and organisations across Africa and
                    beyond.
                  </Text>

                  <Row align="left" style={{ marginTop: "24px" }}>
                    {socialLinks.map((s, i) => (
                      <Column
                        key={s.label}
                        style={{
                          width: "auto",
                          paddingRight:
                            i < socialLinks.length - 1 ? "16px" : "0",
                        }}
                      >
                        <Link
                          href={s.href}
                          style={{ textDecoration: "none", display: "block" }}
                        >
                          <Img
                            src={s.icon}
                            alt={s.label}
                            width={22}
                            height={22}
                            style={{ display: "block" }}
                          />
                        </Link>
                      </Column>
                    ))}
                  </Row>

                  <Row align="left" style={{ marginTop: "24px" }}>
                    <Column>
                      <Text
                        className="m-0"
                        style={{
                          color: "#bbbbbb",
                          fontSize: "11px",
                          lineHeight: "1.6",
                        }}
                      >
                        Accra, Ghana
                      </Text>
                    </Column>
                  </Row>

                  <Row align="left" style={{ marginTop: "12px" }}>
                    <Column>
                      <Text
                        className="m-0"
                        style={{
                          color: "#bbbbbb",
                          fontSize: "11px",
                          lineHeight: "1.6",
                          maxWidth: "340px",
                        }}
                      >
                        You are receiving this because you submitted an enquiry
                        at staceyelsie.com. Questions? Reply to this email.
                      </Text>
                    </Column>
                  </Row>
                </Section>
              </Section>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}

EnquiryReceived.PreviewProps = {
  firstName: "Kofi",
  subject: "Speaking Engagement",
} satisfies EnquiryReceivedProps;
