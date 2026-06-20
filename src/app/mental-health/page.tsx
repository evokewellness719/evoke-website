import Link from "next/link";

export const metadata = {
  title: "Mental Health & Wellness | EVOKE Wellness",
  description: "Integrative mental health support — therapeutic arts, neurographic art, and wellness coaching.",
};

const team = [
  {
    name: "Caitlin",
    credential: "QBHA",
    role: "Mental Health & Wellness Lead",
    bio: "Caitlin leads our mental health and wellness practice with a compassionate, creative approach. As a Qualified Behavioral Health Associate, she specializes in therapeutic arts and neurographic art — using creativity as a powerful pathway to emotional healing and self-discovery.",
    icon: "🎨",
  },
  {
    name: "Our Founder",
    credential: "Wellness Coach",
    role: "Holistic Health Coaching",
    bio: "Alongside clinical care, our founder brings a coaching lens to wellness — supporting clients in building the mindset, habits, and clarity needed to sustain lasting well-being. Coaching bridges the gap between insight and action.",
    icon: "🌿",
  },
];

const services = [
  {
    icon: "🖼️",
    title: "Neurographic Art",
    desc: "A therapeutic drawing method that works directly with the nervous system — transforming stress, fear, and emotional blocks into new neural pathways through guided mark-making.",
  },
  {
    icon: "🎨",
    title: "Therapeutic Arts",
    desc: "Creative modalities used as therapeutic tools — helping clients access emotions, process experiences, and express what words sometimes can't reach.",
  },
  {
    icon: "🤝",
    title: "Wellness Coaching",
    desc: "One-on-one coaching sessions focused on building clarity, resilience, and sustainable well-being across all areas of life.",
  },
  {
    icon: "🔄",
    title: "Integrated Care",
    desc: "Seamless collaboration between mental health, naturopathic, and spiritual support — because your healing doesn't happen in silos.",
  },
];

export default function MentalHealth() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-brown-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-sm font-medium tracking-[0.25em] uppercase mb-4">
            EVOKE Wellness
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-brown-800 mb-4">
            Mental Health &amp; Wellness
          </h1>
          <p className="text-brown-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Compassionate, integrative support — blending behavioral health, therapeutic arts, and holistic coaching to meet you exactly where you are.
          </p>
          <a
            href="https://secure.gethealthie.com/users/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brown-700 text-white font-medium px-8 py-4 rounded-full hover:bg-brown-800 transition-all text-sm tracking-wide"
          >
            Book a Session
          </a>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-sm font-medium tracking-[0.2em] uppercase mb-3">Meet the Team</p>
            <h2 className="font-serif text-4xl text-brown-800">Who You&apos;ll Work With</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((t) => (
              <div key={t.name} className="bg-cream-50 border border-cream-200 rounded-3xl p-8">
                <div className="text-4xl mb-5">{t.icon}</div>
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="font-serif text-2xl text-brown-800">{t.name}</h3>
                  <span className="text-xs font-semibold text-gold-600 tracking-widest uppercase">{t.credential}</span>
                </div>
                <p className="text-sm text-brown-500 mb-4 font-medium">{t.role}</p>
                <p className="text-brown-600 text-sm leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-brown-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-sm font-medium tracking-[0.2em] uppercase mb-3">What We Offer</p>
            <h2 className="font-serif text-4xl text-brown-800">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-cream-50 border border-brown-100 rounded-3xl p-8">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-serif text-xl text-brown-800 mb-3">{s.title}</h3>
                <p className="text-brown-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neurographic art spotlight */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold-600 text-sm font-medium tracking-[0.2em] uppercase mb-3">Spotlight</p>
            <h2 className="font-serif text-4xl text-brown-800 mb-6 leading-tight">
              What Is<br />Neurographic Art?
            </h2>
            <p className="text-brown-600 leading-relaxed mb-5">
              Neurographic art is a therapeutic drawing method developed to create new neural connections in the brain. Through a specific sequence of mark-making guided by a trained practitioner, it helps release stress, reshape limiting beliefs, and open up new possibilities — without needing to talk through everything.
            </p>
            <p className="text-brown-600 leading-relaxed mb-8">
              It&apos;s accessible to everyone — no artistic experience needed. The process itself is the medicine.
            </p>
            <a
              href="https://secure.gethealthie.com/users/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brown-700 font-medium border-b border-brown-400 pb-0.5 hover:text-gold-600 hover:border-gold-600 transition-colors text-sm"
            >
              Book a session with Caitlin →
            </a>
          </div>
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-brown-100 to-cream-100 flex items-center justify-center border border-brown-200">
            <div className="text-center p-12">
              <div className="text-6xl mb-4">🎨</div>
              <p className="font-serif text-brown-700 text-lg italic leading-relaxed">
                "Creativity is a doorway to healing that doesn&apos;t require words."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream-200 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-3xl mb-4">You Don&apos;t Have to Do This Alone</h2>
          <p className="text-brown-600 mb-8 text-sm leading-relaxed">
            Whether you&apos;re drawn to therapeutic arts, coaching, or just need someone to talk to — we&apos;re here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://secure.gethealthie.com/users/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brown-700 text-white font-medium px-8 py-3 rounded-full hover:bg-brown-800 transition-all text-sm"
            >
              Book a Session
            </a>
            <Link
              href="/contact"
              className="border border-brown-400 text-brown-700 font-medium px-8 py-3 rounded-full hover:bg-white/10 transition-all text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
