import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/sheets";
import {
  sendEnquiryReceived,
  sendEnquiryNotification,
} from "@/lib/email";

const HEADERS = [
  "Timestamp",
  "First Name",
  "Last Name",
  "Email",
  "Phone Country Code",
  "Phone Number",
  "Country",
  "Subject",
  "Message",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phoneCode,
      phone,
      country,
      subject,
      message,
    } = body;

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    const timestamp = new Date().toLocaleString("en-GB", {
      timeZone: "Africa/Accra",
    });

    await appendToSheet("enquiries", HEADERS, [
      timestamp,
      firstName,
      lastName,
      email,
      phoneCode ?? "",
      phone ?? "",
      country ?? "",
      subject,
      message,
    ]);

    await Promise.allSettled([
      sendEnquiryReceived(firstName, email, subject),
      sendEnquiryNotification({
        firstName,
        lastName,
        email,
        phoneCode,
        phone,
        country,
        subject,
        message,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to save enquiry." },
      { status: 500 },
    );
  }
}
