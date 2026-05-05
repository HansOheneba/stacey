import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/sheets";
import {
  sendNewsletterWelcome,
  sendNewsletterNotification,
} from "@/lib/email";

const HEADERS = ["Timestamp", "Email", "Source"];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, source } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 },
      );
    }

    const timestamp = new Date().toLocaleString("en-GB", {
      timeZone: "Africa/Accra",
    });

    await appendToSheet("newsletter", HEADERS, [
      timestamp,
      email,
      source ?? "website",
    ]);

    await Promise.allSettled([
      sendNewsletterWelcome(email),
      sendNewsletterNotification(email, source ?? "website"),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter API error:", err);
    return NextResponse.json(
      { error: "Failed to save subscriber." },
      { status: 500 },
    );
  }
}
