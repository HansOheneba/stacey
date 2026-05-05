import { Resend } from "resend";
import { createElement } from "react";
import { render } from "@react-email/components";
import NewsletterWelcome from "@/emails/NewsletterWelcome";
import EnquiryReceived from "@/emails/EnquiryReceived";
import InternalNotification from "@/emails/InternalNotification";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "Stacey Elsie Lamptey <hello@staceyelsie.com>";
const REPLY_TO = "stacey.elsie.lamptey@gmail.com";

function getNotificationEmails(): string[] {
  const raw = process.env.NOTIFICATION_EMAILS ?? "";
  return raw
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);
}

async function renderBoth(component: React.ReactElement) {
  const [html, text] = await Promise.all([
    render(component),
    render(component, { plainText: true }),
  ]);
  return { html, text };
}

export async function sendNewsletterWelcome(email: string) {
  const el = createElement(NewsletterWelcome, { email });
  const { html, text } = await renderBoth(el);

  await resend.emails.send({
    from: FROM,
    replyTo: REPLY_TO,
    to: [email],
    subject: "You are in. Welcome to the community.",
    html,
    text,
    headers: {
      "List-Unsubscribe": `<mailto:${REPLY_TO}?subject=unsubscribe>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  });
}

export async function sendEnquiryReceived(
  firstName: string,
  email: string,
  subject: string,
) {
  const el = createElement(EnquiryReceived, { firstName, subject });
  const { html, text } = await renderBoth(el);

  await resend.emails.send({
    from: FROM,
    replyTo: REPLY_TO,
    to: [email],
    subject: "Your message has been received.",
    html,
    text,
  });
}

export async function sendEnquiryNotification(enquiry: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  phoneCode?: string;
  country?: string;
  subject: string;
  message: string;
}) {
  const notifyEmails = getNotificationEmails();
  if (!notifyEmails.length) return;

  const el = createElement(InternalNotification, {
    type: "enquiry",
    enquiry,
  });
  const { html, text } = await renderBoth(el);

  await resend.emails.send({
    from: FROM,
    replyTo: enquiry.email,
    to: notifyEmails,
    subject: `New enquiry: ${enquiry.subject} from ${enquiry.firstName} ${enquiry.lastName}`,
    html,
    text,
  });
}

export async function sendNewsletterNotification(
  email: string,
  source: string,
) {
  const notifyEmails = getNotificationEmails();
  if (!notifyEmails.length) return;

  const el = createElement(InternalNotification, {
    type: "newsletter",
    newsletter: { email, source },
  });
  const { html, text } = await renderBoth(el);

  await resend.emails.send({
    from: FROM,
    replyTo: REPLY_TO,
    to: notifyEmails,
    subject: `New subscriber: ${email}`,
    html,
    text,
  });
}
