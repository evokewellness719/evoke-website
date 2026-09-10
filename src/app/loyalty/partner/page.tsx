import Link from "next/link";

export const metadata = {
  title: "Partner With the Local Loyalty Link | EVOKE Wellness",
  description:
    "Join the Local Loyalty Link — a visibility and marketing program for Colorado Springs businesses that want to stay top of mind with locals year-round.",
};

const CONTACT_EMAIL = "info@evokewellness.net";
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Local Loyalty Link — Partner Inquiry")}`;

const perks = [
  {
    title: "Introductory video",
    desc: "A professionally produced video introducing your business to the EVOKE community.",
  },
  {
    title: "Monthly promo videos",
    desc: "Ongoing promotional videos to keep your business visible, shareable, and top of mind.",
  },
  {
    title: "Network exposure",
    desc: "Featured across the Local Loyalty Link network and the EVOKE Wellness audience — locals who are ready to spend.",
  },
  {
    title: "Directory listing",
    desc: "A permanent profile on the partner page driving locals directly to your door.",
  },
];

const included = [
  "Introductory video produced for your business",
  "Monthly promotional videos",
  "Featured in the partner network",
  "Exposure to local loyalty members",
  "Directory listing on evokewellness.net",
];

export default function Partner() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-5">For local businesses</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brown-800 leading-tight mb-6">
            Partner with the Local Loyalty Link
          </h1>
          <p className="text-brown-600 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            More than a discount program — a visibility and marketing platform for businesses that want to stay top of mind with Colorado locals all year.
          </p>
          <a
            href={MAILTO}
            className="inline-block bg-brown-700 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-brown-800 transition-colors"
          >
            Email us to get started
          </a>
        </div>
      </section>

      {/* What you get */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-4">What you get</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brown-800">Built to bring locals through your door</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {perks.map((p, i) => (
              <div key={p.title} className="bg-cream-50 border border-cream-200 rounded-2xl p-7 flex gap-5">
                <p className="font-serif text-2xl text-gold-400 shrink-0">0{i + 1}</p>
                <div>
                  <h3 className="font-serif text-lg text-brown-800 mb-2">{p.title}</h3>
                  <p className="text-brown-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-4">Membership</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brown-800">Simple, transparent pricing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-brown-300 rounded-2xl p-8 md:p-10 relative">
              <span className="absolute top-6 right-6 text-[11px] font-semibold tracking-widest uppercase text-gold-600">
                Limited spots
              </span>
              <h3 className="font-serif text-2xl text-brown-800 mb-1">Founding Member</h3>
              <p className="text-brown-500 text-sm mb-6">For our first 14 business partners</p>
              <p className="font-serif text-5xl text-brown-800 mb-8">Free</p>
              <ul className="space-y-3 text-sm text-brown-600 mb-8">
                {included.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-gold-600">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={MAILTO}
                className="block text-center bg-brown-700 text-white text-sm font-medium py-3.5 rounded-full hover:bg-brown-800 transition-colors"
              >
                Claim a founding spot
              </a>
            </div>

            <div className="bg-white border border-cream-200 rounded-2xl p-8 md:p-10">
              <h3 className="font-serif text-2xl text-brown-800 mb-1">Standard Member</h3>
              <p className="text-brown-500 text-sm mb-6">After the founding spots are filled</p>
              <p className="font-serif text-5xl text-brown-800 mb-8">
                $30<span className="text-lg text-brown-500"> / month</span>
              </p>
              <ul className="space-y-3 text-sm text-brown-600 mb-8">
                {included.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-gold-600">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={MAILTO}
                className="block text-center border border-brown-300 text-brown-700 text-sm font-medium py-3.5 rounded-full hover:border-brown-500 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How to join */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-4">How to join</p>
          <h2 className="font-serif text-3xl md:text-4xl text-brown-800 mb-5">Send us a note</h2>
          <p className="text-brown-600 leading-relaxed mb-8">
            Tell us a little about your business and the reward you&apos;d like to offer members. We&apos;ll reply within 1–2 business days with next steps.
          </p>
          <a
            href={MAILTO}
            className="font-serif text-2xl md:text-3xl text-brown-800 underline underline-offset-8 decoration-brown-300 hover:decoration-gold-600 transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-12 text-sm text-brown-500">
            Not a business owner?{" "}
            <Link href="/loyalty" className="text-brown-800 underline underline-offset-4 decoration-brown-300 hover:decoration-gold-600">
              See how locals join
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
