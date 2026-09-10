import Link from "next/link";

export const metadata = {
  title: "Rooted in Integration | EVOKE Wellness",
  description: "A spiritual center for all — bridging the divides of religion through community, meditation, and healing.",
};

const offerings = [
  {
    title: "Meditation & contemplative practice",
    desc: "Group and individual meditation sessions open to all — regardless of tradition, background, or belief.",
  },
  {
    title: "Bridge building",
    desc: "Conversations, gatherings, and practices designed to dissolve religious division and create genuine understanding across differences.",
  },
  {
    title: "Community gatherings",
    desc: "A welcoming space to come together — to share, to heal, to grow, and to belong. Everyone is invited.",
  },
  {
    title: "Spiritual integration",
    desc: "Support for weaving your spiritual life into your whole-person wellness journey alongside naturopathic and mental health care.",
  },
];

export default function Rooted() {
  return (
    <>
      <section className="pt-40 pb-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-5">Spiritual community</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brown-800 leading-tight mb-6">Rooted in Integration</h1>
          <p className="text-brown-600 text-lg leading-relaxed max-w-xl mx-auto mb-4">
            Our spiritual center — a church and community for everyone, regardless of what you practice or where you&apos;ve been.
          </p>
          <p className="font-serif text-xl text-brown-700 italic mb-10">&ldquo;We are all meant to be bridges.&rdquo;</p>
          <Link
            href="/contact"
            className="inline-block bg-brown-700 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-brown-800 transition-colors"
          >
            Connect With Us
          </Link>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-4">Our heart</p>
          <h2 className="font-serif text-3xl md:text-4xl text-brown-800 mb-8">Healing the divide</h2>
          <p className="text-brown-600 text-lg leading-relaxed mb-6">
            Rooted in Integration was born out of a simple but radical belief: that religion was never meant to divide us. The wounds left by religious trauma, exclusion, and dogma are real — and they deserve real healing.
          </p>
          <p className="text-brown-600 text-lg leading-relaxed">
            We welcome anyone and everyone — Buddhist, Christian, Muslim, Jewish, pagan, agnostic, curious, or hurt. Whatever you practice, whatever you&apos;ve walked away from, you are free to attend.
          </p>
          <p className="font-serif text-2xl text-brown-800 italic mt-10">Anyone who is anyone is welcome here.</p>
        </div>
      </section>

      <section className="py-24 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-4">What we offer</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brown-800">Come as you are</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offerings.map((o, i) => (
              <div key={o.title} className="bg-white border border-cream-200 rounded-2xl p-8">
                <p className="font-serif text-3xl text-gold-400 mb-4">0{i + 1}</p>
                <h3 className="font-serif text-xl text-brown-800 mb-3">{o.title}</h3>
                <p className="text-brown-600 text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <figure className="bg-cream-50 border border-cream-200 rounded-2xl p-10 md:p-12 order-2 md:order-1">
            <blockquote className="font-serif text-2xl md:text-3xl text-brown-800 leading-snug">
              &ldquo;Spiritual health is real health, and it deserves a place at the table.&rdquo;
            </blockquote>
          </figure>
          <div className="order-1 md:order-2">
            <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-4">Our vision</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brown-800 leading-tight mb-6">Part of your whole-person healing</h2>
            <p className="text-brown-600 leading-relaxed mb-5">
              Rooted in Integration doesn&apos;t exist separately from our wellness work — it&apos;s woven into it. Spiritual health is real health, and we believe it deserves a place alongside physical and mental well-being.
            </p>
            <p className="text-brown-600 leading-relaxed mb-8">
              Our community is a place to process, to explore, to rest — and to find that you were never as alone as you thought.
            </p>
            <Link href="/mental-health" className="text-sm font-medium text-brown-800 hover:text-gold-600 transition-colors">
              Explore mental health services →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-brown-800 mb-4">You are welcome here</h2>
          <p className="text-brown-600 leading-relaxed mb-8">
            No prerequisites. No requirements. Come as you are, and let&apos;s build something together.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brown-700 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-brown-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
