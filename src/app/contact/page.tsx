"use client";

import { useState } from "react";

export default function Contact() {
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
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gold-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-sm font-medium tracking-[0.25em] uppercase mb-4">Reach Out</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brown-800 mb-6">Let&apos;s Connect</h1>
          <p className="text-brown-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Have a question, want to learn more, or just not sure where to start? We&apos;re here for it.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <h2 className="font-serif text-3xl text-brown-800 mb-8">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brown-100 flex items-center justify-center text-brown-600 shrink-0">
                  ✉️
                </div>
                <div>
                  <p className="text-sm font-medium text-brown-700 mb-1">Email</p>
                  <a
                    href="mailto:info@evokewellness.net"
                    className="text-brown-600 hover:text-gold-600 transition-colors text-sm"
                  >
                    info@evokewellness.net
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brown-100 flex items-center justify-center text-brown-600 shrink-0">
                  📅
                </div>
                <div>
                  <p className="text-sm font-medium text-brown-700 mb-1">Book a Consultation</p>
                  <a
                    href="https://secure.gethealthie.com/users/sign_in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown-600 hover:text-gold-600 transition-colors text-sm"
                  >
                    Schedule via Healthie →
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brown-100 flex items-center justify-center text-brown-600 shrink-0">
                  📱
                </div>
                <div>
                  <p className="text-sm font-medium text-brown-700 mb-1">Social</p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/evoke_wellness719/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brown-600 hover:text-gold-600 transition-colors text-sm"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61580707843038"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brown-600 hover:text-gold-600 transition-colors text-sm"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-cream-50 border border-cream-200">
              <h3 className="font-serif text-xl text-brown-800 mb-2">Response Time</h3>
              <p className="text-brown-500 text-sm leading-relaxed">
                We typically respond to all inquiries within 1–2 business days. For appointment-specific questions, booking directly through Healthie is the fastest route.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-10 bg-brown-50 rounded-3xl border border-brown-200">
                  <div className="text-5xl mb-4">🌿</div>
                  <h3 className="font-serif text-2xl text-brown-800 mb-3">Message Received</h3>
                  <p className="text-brown-600 text-sm leading-relaxed">
                    Thank you for reaching out. We&apos;ll be in touch within 1–2 business days.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brown-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full border border-cream-300 rounded-xl px-4 py-3 text-sm text-brown-700 focus:outline-none focus:border-brown-400 bg-white"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brown-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full border border-cream-300 rounded-xl px-4 py-3 text-sm text-brown-700 focus:outline-none focus:border-brown-400 bg-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-cream-300 rounded-xl px-4 py-3 text-sm text-brown-700 focus:outline-none focus:border-brown-400 bg-white"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown-700 mb-2">Subject</label>
                  <select name="subject" className="w-full border border-cream-300 rounded-xl px-4 py-3 text-sm text-brown-700 focus:outline-none focus:border-brown-400 bg-white">
                    <option>General Inquiry</option>
                    <option>Appointment Question</option>
                    <option>Product Question</option>
                    <option>Partnership / Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full border border-cream-300 rounded-xl px-4 py-3 text-sm text-brown-700 focus:outline-none focus:border-brown-400 bg-white resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-brown-700 text-white font-medium py-4 rounded-full hover:bg-brown-800 transition-all text-sm tracking-wide disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
