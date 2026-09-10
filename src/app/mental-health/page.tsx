import Link from "next/link";

export const metadata = {
  title: "Mental Health & Wellness | EVOKE Wellness",
  description: "Integrative mental health support — therapeutic arts, neurographic art, and wellness coaching in Colorado Springs.",
};

const BOOK_URL = "https://secure.gethealthie.com/users/sign_in";

const team = [
  {
    name: "Caitlin",
    credential: "QBHA",
    role: "Mental Health & Wellness Lead",
    bio: "Caitlin leads our mental health and wellness practice with a compassionate, creative approach. As a Qualified Behavioral Health Associate, she specializes in therapeutic arts and neurographic art — using creativity as a powerful pathway to emotional healing and self-discovery.",
  },
  {
    name: "Joe",
    credential: "Founder · Wellness Coach",
    role: "Holistic Health Coaching",
    bio: "Alongside naturopathic care, Joe brings a coaching lens to wellness — supporting clients in building the mindset, habits, and clarity needed to sustain lasting well-being. Coaching bridges the gap between insight and action.",
  },
];

const services = [
  {
    title: "Neurographic art",
    desc: "A therapeutic drawing method that works directly with the nervous system — transforming stress, fear, and emotional blocks into new neural pathways through guided mark-making.",
  },
  {
    title: "Therapeutic arts",
    desc: "Creative modalities used as therapeutic tools — helping you access emotions, process experiences, and express what words sometimes can't reach.",
  },
  {
    title: "Wellness coaching",
    desc: "One-on-one sessions focused on building clarity, resilience, and sustainable well-being across all areas of life.",
  },
  {
    title: "Integrated care",
    desc: "Seamless collaboration between mental health, naturopathic, and spiritual support — because your healing doesn't happen in silos.",
  },
];

export default function MentalHealth() {
  return (
    <>
      <section className="pt-40 pb-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-5">Services</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brown-800 leading-tight mb-6">Mental Health &amp; Wellness</h1>
          <p className="text-brown-600 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Compassionate, integrative support — blending behavioral health, therapeutic arts, and holistic coaching to meet you exactly where you are.
          </p>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brown-700 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-brown-800 transition-colors"
          >
            Book a Session
          </a>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-4">Meet the team</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brown-800">Who you&apos;ll work with</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((t) => (
              <div key={t.name} className="bg-cream-50 border border-cream-200 rounded-2xl p-8">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-gold-600 mb-3">{t.credential}</p>
                <h3 className="font-serif text-2xl text-brown-800 mb-1">{t.name}</h3>
                <p className="text-sm text-brown-500 mb-4">{t.role}</p>
                <p className="text-brown-600 text-sm leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-4">What we offer</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brown-800">Our services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="bg-white border border-cream-200 rounded-2xl p-8">
                <p className="font-serif text-3xl text-gold-400 mb-4">0{i + 1}</p>
                <h3 className="font-serif text-xl text-brown-800 mb-3">{s.title}</h3>
                <p className="text-brown-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-4">Spotlight</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brown-800 leading-tight mb-6">What is neurographic art?</h2>
            <p className="text-brown-600 leading-relaxed mb-5">
              Neurographic art is a therapeutic drawing method developed to create new neural connections in the brain. Through a specific sequence of mark-making guided by a trained practitioner, it helps release stress, reshape limiting beliefs, and open up new possibilities — without needing to talk through everything.
            </p>
            <p className="text-brown-600 leading-relaxed mb-8">
              It&apos;s accessible to everyone — no artistic experience needed. The process itself is the medicine.
            </p>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-brown-800 hover:text-gold-600 transition-colors"
            >
              Book a session with Caitlin →
            </a>
          </div>
          <figure className="bg-cream-50 border border-cream-200 rounded-2xl p-10 md:p-12">
            <blockquote className="font-serif text-2xl md:text-3xl text-brown-800 leading-snug">
              &ldquo;Creativity is a doorway to healing that doesn&apos;t require words.&rdquo;
            </blockquote>
          </figure>
        </div>
      </section>

      <section className="py-24 bg-cream-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-brown-800 mb-4">You don&apos;t have to do this alone</h2>
          <p className="text-brown-600 leading-relaxed mb-8">
            Whether you&apos;re drawn to therapeutic arts, coaching, or just need someone to talk to — we&apos;re here.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brown-700 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-brown-800 transition-colors"
            >
              Book a Session
            </a>
            <Link
              href="/contact"
              className="border border-brown-300 text-brown-700 text-sm font-medium px-8 py-4 rounded-full hover:border-brown-500 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
