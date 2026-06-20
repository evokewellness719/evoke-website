import Link from "next/link";

const facets = [
  {
    href: "/apothecary",
    label: "The Modern Apothecary",
    tag: "Botanicals & Products",
    description:
      "Curated botanical supplements, tinctures, and wellness products rooted in ancient wisdom and backed by clinical evidence.",
    icon: "⚗️",
    cta: "Shop the Apothecary",
    bg: "bg-cream-50 border-cream-200 hover:border-cream-400",
  },
  {
    href: "/mental-health",
    label: "Mental Health & Wellness",
    tag: "Therapy & Support",
    description:
      "Compassionate, integrative mental health support that honors the connection between mind, body, and spirit.",
    icon: "🧠",
    cta: "Explore Services",
    bg: "bg-brown-50 border-brown-200 hover:border-brown-400",
  },
  {
    href: "/rooted",
    label: "Rooted in Integration",
    tag: "Spiritual Center",
    description:
      "Our spiritual home — a church and community space for those seeking integration of faith, healing, and wholeness.",
    icon: "🌱",
    cta: "Visit Our Church",
    bg: "bg-gold-50 border-gold-200 hover:border-gold-300",
  },
];

const pillars = [
  { label: "Seen", desc: "Your story matters. We listen fully before we suggest anything." },
  { label: "Supported", desc: "Guided care every step of the way — not just at appointments." },
  { label: "Secure", desc: "A judgment-free space built on trust, privacy, and compassion." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-200 to-cream-50" />
        <div className="absolute top-32 right-0 w-96 h-96 rounded-full bg-gold-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brown-100/40 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-sm font-medium tracking-[0.3em] uppercase mb-6">
            EVOKE Wellness
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-brown-800 leading-tight mb-6">
            Integrated
            <br />
            <em className="text-gold-600 not-italic">Healing</em>
          </h1>
          <p className="text-brown-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            We believe true healing touches every part of you — body, mind, and spirit. EVOKE Wellness brings naturopathic care, mental wellness, and spiritual integration together under one roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://secure.gethealthie.com/users/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brown-700 text-white font-medium px-8 py-4 rounded-full hover:bg-brown-800 transition-all hover:shadow-lg text-sm tracking-wide"
            >
              Book an Appointment
            </a>
            <Link
              href="/about"
              className="border border-brown-400 text-brown-700 font-medium px-8 py-4 rounded-full hover:bg-brown-50 transition-all text-sm tracking-wide"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-0.5 h-8 bg-brown-300 mx-auto" />
        </div>
      </section>

      {/* 3 Facets */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold-600 text-sm font-medium tracking-[0.2em] uppercase mb-3">What We Offer</p>
            <h2 className="font-serif text-4xl md:text-5xl text-brown-800">Three Paths, One Integration</h2>
            <p className="text-brown-500 mt-4 max-w-xl mx-auto leading-relaxed">
              EVOKE Wellness is home to three interconnected practices — each serving a different dimension of your well-being, all working together.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facets.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className={`group rounded-3xl p-8 border-2 transition-all ${f.bg} flex flex-col`}
              >
                <div className="text-4xl mb-5">{f.icon}</div>
                <p className="text-xs font-medium tracking-widest uppercase text-gold-600 mb-2">{f.tag}</p>
                <h3 className="font-serif text-2xl text-brown-800 mb-3 group-hover:text-sage-900">{f.label}</h3>
                <p className="text-brown-500 text-sm leading-relaxed flex-1">{f.description}</p>
                <span className="mt-6 text-sm font-medium text-brown-700 border-b border-brown-400 pb-0.5 self-start group-hover:text-gold-600 group-hover:border-gold-600 transition-colors">
                  {f.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-brown-800">Integration Starts Here</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.label} className="text-center p-8 rounded-2xl bg-cream-50 border border-cream-200">
                <h3 className="font-serif text-4xl font-semibold text-brown-700 mb-3">{p.label}</h3>
                <p className="text-brown-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold-600 text-sm font-medium tracking-[0.2em] uppercase mb-3">Our Philosophy</p>
            <h2 className="font-serif text-4xl md:text-5xl text-brown-800 mb-6 leading-tight">
              Healing the<br />Whole Person
            </h2>
            <p className="text-brown-600 leading-relaxed mb-5">
              At EVOKE Wellness, integration isn't a buzzword — it's the foundation. We bring naturopathic medicine, mental wellness, and spiritual healing into conversation with each other, because your body, mind, and spirit don't operate in isolation.
            </p>
            <p className="text-brown-600 leading-relaxed mb-8">
              Every path forward is crafted specifically for you — your history, your body, your goals, your whole self.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-brown-700 font-medium border-b border-brown-400 pb-0.5 hover:text-gold-600 hover:border-gold-600 transition-colors text-sm"
            >
              Learn more about us →
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-cream-100 to-brown-50 flex items-center justify-center border border-cream-200">
              <div className="text-center p-12">
                <div className="text-6xl mb-4">🌿</div>
                <p className="font-serif text-brown-700 text-lg italic leading-relaxed">
                  "A space where you are seen, supported, and secure."
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-2xl bg-gold-100 -z-10" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Ready to Begin Your Integrated Healing Journey?
          </h2>
          <p className="text-brown-600 text-lg mb-10 leading-relaxed">
            Take the first step. Book a consultation and let us walk the path of integrated healing with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://secure.gethealthie.com/users/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brown-700 text-white font-semibold px-10 py-4 rounded-full hover:bg-brown-800 transition-all text-sm tracking-wide"
            >
              Schedule a Consultation
            </a>
            <Link
              href="/contact"
              className="border border-brown-400 text-brown-700 font-medium px-10 py-4 rounded-full hover:bg-white/10 transition-all text-sm tracking-wide"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
