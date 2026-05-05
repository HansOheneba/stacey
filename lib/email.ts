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

export async function sendNewsletterWelcome(email: string) {
  const html = await render(
    createElement(NewsletterWelcome, { email }),
  );

  await resend.emails.send({
    from: FROM,
    replyTo: REPLY_TO,
    to: [email],
    subject: "You are in. Welcome to the community.",
    html,
  });
}

export async function sendEnquiryReceived(firstName: string, email: string, subject: string) {
  const html = await render(
    createElement(EnquiryReceived, { firstName, subject }),
  );

  await resend.emails.send({
    from: FROM,
    replyTo: REPLY_TO,
    to: [email],
    subject: "Your message has been received.",
    html,
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

  const html = await render(
    createElement(InternalNotification, { type: "enquiry", enquiry }),
  );

  await resend.emails.send({
    from: FROM,
    replyTo: enquiry.email,
    to: notifyEmails,
    subject: `New enquiry: ${enquiry.subject} from ${enquiry.firstName} ${enquiry.lastName}`,
    html,
  });
}

export async function sendNewsletterNotification(email: string, source: string) {
  const notifyEmails = getNotificationEmails();
  if (!notifyEmails.length) return;

  const html = await render(
    createElement(InternalNotification, {
      type: "newsletter",
      newsletter: { email, source },
    }),
  );

  await resend.emails.send({
    from: FROM,
    replyTo: REPLY_TO,
    to: notifyEmails,
    subject: `New subscriber: ${email}`,
    html,
  });
}
