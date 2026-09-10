"use client";

import { useState } from "react";
import Link from "next/link";

const BOOK_URL = "https://secure.gethealthie.com/users/sign_in";

const faqs = [
  {
    q: "What is naturopathic medicine?",
    a: "Naturopathic medicine is a system of healthcare that combines modern scientific knowledge with traditional and natural healing methods. It treats the root cause of illness, not just symptoms, using approaches like clinical nutrition, botanical medicine, and lifestyle counseling.",
  },
  {
    q: "What can I expect at my first consultation?",
    a: "Your first visit is a comprehensive intake where we get to know you fully — your health history, current concerns, lifestyle, stress levels, diet, and goals. From there, we craft a personalized protocol just for you.",
  },
  {
    q: "How do I book an appointment?",
    a: "All appointments are booked through our Healthie portal. Click 'Book Now' in the navigation and you'll be guided through scheduling.",
  },
  {
    q: "Do you accept insurance?",
    a: "We currently operate on a self-pay basis. Many clients submit receipts to their insurance for potential reimbursement depending on their plan. We're happy to provide documentation to assist with that process.",
  },
  {
    q: "What is The Local Loyalty Link?",
    a: "A free digital loyalty pass for Colorado locals. Scan a QR code at any participating business, keep the card in your Apple or Google Wallet, and unlock rewards — typically 7% off — at partner businesses across Old Colorado City.",
  },
  {
    q: "Are your herbal products safe to use on my own?",
    a: "Many products are suitable for general use, but we always recommend a consultation before starting any new protocol — especially if you're managing a health condition or taking medications. Our team is here to guide you.",
  },
  {
    q: "Do you offer virtual appointments?",
    a: "Yes. We offer both in-person and virtual consultations so you can access quality naturopathic care from wherever you are.",
  },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-cream-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-6"
        aria-expanded={open}
      >
        <span className="font-serif text-lg md:text-xl text-brown-800">{q}</span>
        <span className={`text-brown-500 text-2xl leading-none transition-transform shrink-0 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <div className="pb-6 text-brown-600 leading-relaxed">{a}</div>}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-5">FAQ</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brown-800 leading-tight mb-6">Frequently asked questions</h1>
          <p className="text-brown-600 text-lg leading-relaxed max-w-xl mx-auto">
            Everything you need to know about EVOKE Wellness, our services, and what to expect.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-cream-200 rounded-2xl px-8">
            {faqs.map((faq) => (
              <FAQ key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-brown-800 mb-4">Still have questions?</h2>
          <p className="text-brown-600 leading-relaxed mb-8">
            Reach out directly — we&apos;re happy to help you figure out if EVOKE Wellness is the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-brown-700 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-brown-800 transition-colors"
            >
              Contact Us
            </Link>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brown-300 text-brown-700 text-sm font-medium px-8 py-4 rounded-full hover:border-brown-500 transition-colors"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
