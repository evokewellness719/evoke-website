import Link from "next/link";

export const metadata = {
  title: "Rooted in Integration | EVOKE Wellness",
  description: "A spiritual center for all — bridging the divides of religion through community, meditation, and healing.",
};

const offerings = [
  {
    icon: "🧘",
    title: "Meditation & Contemplative Practice",
    desc: "Group and individual meditation sessions open to all — regardless of tradition, background, or belief system.",
  },
  {
    icon: "🌉",
    title: "Bridge Building",
    desc: "Conversations, gatherings, and practices designed to dissolve religious division and create genuine understanding across differences.",
  },
  {
    icon: "🤝",
    title: "Community Gatherings",
    desc: "A welcoming space to come together — to share, to heal, to grow, and to belong. Everyone is invited.",
  },
  {
    icon: "🔗",
    title: "Spiritual Integration",
    desc: "Support for weaving your spiritual life into your whole-person wellness journey alongside our naturopathic and mental health care.",
  },
];

export default function Rooted() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gold-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-sm font-medium tracking-[0.25em] uppercase mb-4">
            EVOKE Wellness
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-brown-800 mb-4">
            Rooted in Integration
          </h1>
          <p className="text-brown-600 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Our spiritual center — a church and community for everyone, regardless of what you practice or where you&apos;ve been.
          </p>
          <p className="font-serif text-xl text-brown-700 italic mb-10">
            &ldquo;We are all meant to be bridges.&rdquo;
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brown-700 text-white font-medium px-8 py-4 rounded-full hover:bg-brown-800 transition-all text-sm tracking-wide"
          >
            Connect With Us
          </Link>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-sm font-medium tracking-[0.2em] uppercase mb-4">Our Heart</p>
          <h2 className="font-serif text-4xl text-brown-800 mb-8">Healing the Divide</h2>
          <p className="text-brown-600 text-lg leading-relaxed mb-6">
            Rooted in Integration was born out of a simple but radical belief: that religion was never meant to divide us. The wounds left by religious trauma, exclusion, and dogma are real — and they deserve real healing.
          </p>
          <p className="text-brown-600 text-lg leading-relaxed mb-6">
            We are a spiritual community that welcomes anyone and everyone — Buddhist, Christian, Muslim, Jewish, pagan, agnostic, curious, or hurt. Whatever you practice, whatever you&apos;ve walked away from, you are free to attend.
          </p>
          <p className="font-serif text-2xl text-brown-700 italic mt-10">
            Anyone who is anyone is welcome here.
          </p>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-sm font-medium tracking-[0.2em] uppercase mb-3">What We Offer</p>
            <h2 className="font-serif text-4xl text-brown-800">Come As You Are</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((o) => (
              <div key={o.title} className="bg-cream-50 border border-cream-200 rounded-3xl p-8">
                <div className="text-3xl mb-4">{o.icon}</div>
                <h3 className="font-serif text-xl text-brown-800 mb-3">{o.title}</h3>
                <p className="text-brown-500 text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The bridge */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-gold-50 to-cream-100 flex items-center justify-center border border-gold-200">
            <div className="text-center p-12">
              <div className="text-6xl mb-4">🌉</div>
              <p className="font-serif text-brown-700 text-lg italic leading-relaxed">
                &ldquo;We are all meant to be bridges.&rdquo;
              </p>
            </div>
          </div>
          <div>
            <p className="text-gold-600 text-sm font-medium tracking-[0.2em] uppercase mb-3">Our Vision</p>
            <h2 className="font-serif text-4xl text-brown-800 mb-6 leading-tight">
              Part of Your<br />Whole-Person Healing
            </h2>
            <p className="text-brown-600 leading-relaxed mb-5">
              Rooted in Integration doesn&apos;t exist separately from our wellness work — it&apos;s woven into it. Spiritual health is real health, and we believe it deserves a place at the table alongside physical and mental well-being.
            </p>
            <p className="text-brown-600 leading-relaxed mb-8">
              Our community is a place to process, to explore, to rest — and to find that you were never as alone as you thought.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/mental-health" className="text-sm font-medium text-brown-700 border-b border-brown-400 pb-0.5 hover:text-gold-600 hover:border-gold-600 transition-colors self-start">
                Explore Mental Health Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream-200 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-3xl mb-4">You Are Welcome Here</h2>
          <p className="text-brown-600 mb-8 text-sm leading-relaxed">
            No prerequisites. No requirements. Come as you are, and let&apos;s build something together.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brown-700 text-white font-medium px-8 py-3 rounded-full hover:bg-brown-800 transition-all text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
