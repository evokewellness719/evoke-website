"use client";

import { useState } from "react";

const inputClass =
  "w-full border border-cream-300 rounded-xl px-4 py-3 text-sm text-brown-800 bg-white placeholder:text-brown-400 focus:outline-none focus:border-brown-500 transition-colors";
const labelClass = "block text-xs font-medium tracking-wide uppercase text-brown-500 mb-2";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly at info@evokewellness.net.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white border border-cream-200 rounded-2xl p-10 text-center">
        <h3 className="font-serif text-2xl text-brown-800 mb-3">Message received</h3>
        <p className="text-brown-600 text-sm leading-relaxed">
          Thank you for reaching out. We&apos;ll be in touch within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-cream-200 rounded-2xl p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className={labelClass}>First name</label>
          <input id="firstName" name="firstName" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>Last name</label>
          <input id="lastName" name="lastName" type="text" required className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="subject" className={labelClass}>Subject</label>
        <select id="subject" name="subject" className={inputClass}>
          <option>General Inquiry</option>
          <option>Appointment Question</option>
          <option>Product Question</option>
          <option>Loyalty Link Partnership</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea id="message" name="message" required rows={5} className={`${inputClass} resize-none`} />
      </div>
      {error && <p className="text-sm text-red-700">{error}</p>}
      <button
        type="submit"
        disabled={sending}
        className="w-full bg-brown-700 text-white text-sm font-medium py-3.5 rounded-full hover:bg-brown-800 transition-colors disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
