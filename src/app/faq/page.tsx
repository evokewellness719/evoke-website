"use client";

import { useState } from "react";

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
    a: "All appointments are booked through our Healthie portal. Just click the 'Book Now' button in the navigation or the link below and you'll be guided through the scheduling process.",
  },
  {
    q: "Do you accept insurance?",
    a: "We currently operate on a self-pay basis. Many clients submit receipts to their insurance for potential reimbursement depending on their plan. We're happy to provide documentation to assist with that process.",
  },
  {
    q: "What is The Local Loyalty Link?",
    a: "The Local Loyalty Link is our community wellness program offering exclusive access to local partnerships, member-only discounts on our apothecary products, and wellness resources curated just for our community.",
  },
  {
    q: "Are the apothecary products safe to use on my own?",
    a: "Many products are suitable for general use, but we always recommend a consultation before starting any new protocol — especially if you're managing a health condition or taking medications. Our team is here to guide you.",
  },
  {
    q: "Do you offer virtual appointments?",
    a: "Yes! We offer both in-person and virtual consultations so you can access quality naturopathic care from wherever you are.",
  },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-cream-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-4"
      >
        <span className="font-serif text-lg text-brown-800">{q}</span>
        <span className={`text-brown-500 text-xl transition-transform shrink-0 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="pb-6 text-brown-600 text-sm leading-relaxed">{a}</div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-cream-200 to-cream-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-sm font-medium tracking-[0.25em] uppercase mb-4">Got Questions?</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brown-800 mb-6">Frequently Asked Questions</h1>
          <p className="text-brown-600 text-lg leading-relaxed">
            Everything you need to know about EVOKE Wellness, our services, and what to expect.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6">
          {faqs.map((faq) => (
            <FAQ key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      <section className="py-20 bg-cream-100 text-brown-800 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-3xl mb-4">Still Have Questions?</h2>
          <p className="text-brown-600 mb-8 text-sm leading-relaxed">
            Reach out directly — we&apos;re happy to help you figure out if EVOKE Wellness is the right fit for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-brown-700 text-white font-medium px-8 py-3 rounded-full hover:bg-brown-800 transition-all text-sm"
            >
              Contact Us
            </a>
            <a
              href="https://secure.gethealthie.com/users/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brown-400 text-brown-700 font-medium px-8 py-3 rounded-full hover:bg-white/10 transition-all text-sm"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
