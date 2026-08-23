import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, lastName, email, subject, message } = await request.json();

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "EVOKE Wellness Contact Form <contact@evokewellness.net>",
      to: process.env.CONTACT_TO_EMAIL ?? "info@evokewellness.net",
      replyTo: email,
      subject: `[Contact Form] ${subject || "General Inquiry"} — ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject || "General Inquiry"}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
