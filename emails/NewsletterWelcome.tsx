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

type ResourceItem = { title: string; description: string; href: string };

const resources: ResourceItem[] = [
  {
    title: "YouTube",
    description:
      "Practical frameworks, honest conversations, and ideas you can use right now. Start with the most watched videos.",
    href: YOUTUBE_URL,
  },
  {
    title: "Instagram",
    description:
      "Daily prompts, behind-the-scenes content, and community conversations. Follow along at @staceyelsie.",
    href: "https://instagram.com/staceyelsie",
  },
  {
    title: "LinkedIn",
    description:
      "Speaker announcements, long-form thinking on growth, and professional insights. Connect there.",
    href: "https://linkedin.com/in/staceyelsie",
  },
];

const socialLinks = [
  { label: "YouTube", href: YOUTUBE_URL },
  { label: "Instagram", href: "https://instagram.com/staceyelsie" },
  { label: "LinkedIn", href: "https://linkedin.com/in/staceyelsie" },
  { label: "X", href: "https://twitter.com/staceyelsie" },
];

interface NewsletterWelcomeProps {
  email: string;
}

export default function NewsletterWelcome({ email }: NewsletterWelcomeProps) {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Body
          className="m-0 p-0 bg-[#f5f5f4]"
          style={{ fontFamily: "'Open Sans', Arial, sans-serif" }}
        >
          <Preview>You are in. Welcome to the community.</Preview>
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

                {/* Welcome content */}
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
                    Welcome
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
                    You are in.
                  </Text>
                  <Text
                    className="m-0 mt-5"
                    style={{ color: "#555555", fontSize: "15px", lineHeight: "1.75" }}
                  >
                    So glad you are here. This is a space for growth, clarity,
                    and conversations that actually move things forward. You will
                    hear from us with ideas, tools, and updates built to help you
                    step further into who you are becoming.
                  </Text>
                  <Text
                    className="m-0 mt-3"
                    style={{ color: "#555555", fontSize: "15px", lineHeight: "1.75" }}
                  >
                    The best place to start is the YouTube channel. Packed with
                    frameworks and honest conversations you can use today.
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

                {/* Where to go from here */}
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
                      Where to go from here
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
                      A few places to connect, learn, and stay close to
                      everything Stacey is building.
                    </Text>
                  </Section>
                  <Section className="px-6 pt-10">
                    {resources.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        style={{ textDecoration: "none", display: "block" }}
                      >
                        <Section
                          style={{
                            borderBottom: "1px solid #e8e8e8",
                            paddingTop: "20px",
                            paddingBottom: "20px",
                          }}
                        >
                          <Row>
                            <Column style={{ width: "92%", verticalAlign: "top" }}>
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
                              <Text className="m-0" style={{ color: "#d69729", fontSize: "18px" }}>
                                →
                              </Text>
                            </Column>
                          </Row>
                        </Section>
                      </Link>
                    ))}
                  </Section>
                </Section>

                {/* Footer */}
                <Section style={{ borderTop: "1px solid #e8e8e8", padding: "40px" }}>
                  <Text
                    className="m-0"
                    style={{
                      color: "#888888",
                      fontSize: "13px",
                      lineHeight: "1.7",
                      maxWidth: "340px",
                    }}
                  >
                    Stacey Elsie Lamptey is a speaker, growth strategist, and
                    community builder working with individuals and organisations
                    across Africa and beyond.
                  </Text>

                  <Row align="left" style={{ marginTop: "24px" }}>
                    {socialLinks.map((s, i) => (
                      <Column
                        key={s.label}
                        style={{
                          width: "auto",
                          paddingRight: i < socialLinks.length - 1 ? "20px" : "0",
                        }}
                      >
                        <Link
                          href={s.href}
                          style={{
                            color: "#d69729",
                            fontSize: "12px",
                            fontWeight: 700,
                            textDecoration: "none",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {s.label}
                        </Link>
                      </Column>
                    ))}
                  </Row>

                  <Row align="left" style={{ marginTop: "24px" }}>
                    <Column>
                      <Text
                        className="m-0"
                        style={{ color: "#bbbbbb", fontSize: "11px", lineHeight: "1.6" }}
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
                        You are receiving this because you signed up at
                        staceyelsie.com. Sent to {email}.
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

NewsletterWelcome.PreviewProps = {
  email: "hello@example.com",
} satisfies NewsletterWelcomeProps;
