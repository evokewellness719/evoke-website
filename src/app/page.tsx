import Link from "next/link";

const BOOK_URL = "https://secure.gethealthie.com/users/sign_in";

const offerings = [
  {
    href: "https://shopevoke.net/",
    external: true,
    eyebrow: "Shop",
    title: "Shop EVOKE Wellness",
    desc: "Handcrafted herbal teas, tinctures, topicals, and wellness products — plus the new EVOKE bookstore.",
    cta: "Visit the shop",
  },
  {
    href: "/services",
    eyebrow: "Services",
    title: "Naturopathic & Mental Wellness",
    desc: "Personalized consultations, therapeutic arts, and wellness coaching that honor body, mind, and spirit together.",
    cta: "Explore services",
  },
  {
    href: "/rooted",
    eyebrow: "Community",
    title: "Rooted in Integration",
    desc: "Our spiritual home — a welcoming church and community for everyone, whatever you practice or where you've been.",
    cta: "Learn more",
  },
];

const pillars = [
  { label: "Seen", desc: "Your story matters. We listen fully before we suggest anything." },
  { label: "Supported", desc: "Guided care every step of the way — not just at appointments." },
  { label: "Secure", desc: "A judgment-free space built on trust, privacy, and compassion." },
];

const reviews = [
  {
    name: "Katrin Renyer",
    text: "Joe is the absolute best. His continued intention to broaden his knowledge and optimize his products shines through all of the rest. His teas have worked wonders on my hormonal imbalances.",
  },
  {
    name: "Rachelle Saint Jean",
    text: "What a wonderful experience. Joe took his time to answer our questions and consult us on what would be best for our needs. Knowledgeable, attentive to detail, and very patient.",
  },
  {
    name: "Caitlin Elizabeth",
    text: "The owner, Joe, is incredibly knowledgeable. All the products are hand selected and packaged. Whether you're looking for herbs or whole-person care, you'll be in good hands.",
  },
  {
    name: "Abbey Bengtson",
    text: "Incredibly impressed with the wide variety of products and the quality of each item. The founders are so knowledgeable and personable that I felt right at home. Highly recommend.",
  },
  {
    name: "Sara Vega",
    text: "We met Joe at Territory Days and he was incredibly friendly, welcoming, and knowledgeable. It was clear right away how passionate he is about his products and about helping people.",
  },
  {
    name: "Priscilla Ruano",
    text: "Great products, reasonably priced. The owner definitely knows his stuff. Beautiful ceremonies.",
  },
];

function Stars({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`${className} text-gold-400 fill-current`} viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-28 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-xs font-medium tracking-[0.3em] uppercase mb-6">
            EVOKE Wellness · Colorado Springs
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-brown-800 leading-[1.05] mb-6">
            Integrated Healing
          </h1>
          <p className="text-brown-600 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
            Naturopathic care, mental wellness, and spiritual community — brought together so every part of you is cared for.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brown-700 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-brown-800 transition-colors"
            >
              Book an Appointment
            </a>
            <a
              href="https://shopevoke.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brown-300 text-brown-700 text-sm font-medium px-8 py-4 rounded-full hover:border-brown-500 transition-colors"
            >
              Shop EVOKE Wellness
            </a>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerings.map((o) => {
              const inner = (
                <>
                  <p className="text-gold-600 text-xs font-medium tracking-[0.2em] uppercase mb-4">{o.eyebrow}</p>
                  <h2 className="font-serif text-2xl text-brown-800 mb-3">{o.title}</h2>
                  <p className="text-brown-600 text-sm leading-relaxed flex-1">{o.desc}</p>
                  <span className="mt-8 text-sm font-medium text-brown-800 group-hover:text-gold-600 transition-colors">
                    {o.cta} →
                  </span>
                </>
              );
              const cls =
                "group flex flex-col bg-cream-50 border border-cream-200 rounded-2xl p-8 hover:border-brown-300 transition-colors";
              return o.external ? (
                <a key={o.title} href={o.href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {inner}
                </a>
              ) : (
                <Link key={o.title} href={o.href} className={cls}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-4">Our Promise</p>
            <h2 className="font-serif text-4xl md:text-5xl text-brown-800">Seen. Supported. Secure.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            {pillars.map((p) => (
              <div key={p.label} className="text-center md:border-l md:border-cream-300 md:first:border-0 px-6">
                <h3 className="font-serif text-3xl text-brown-800 mb-3">{p.label}</h3>
                <p className="text-brown-600 text-sm leading-relaxed max-w-xs mx-auto">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-brown-600 max-w-2xl mx-auto mt-14 leading-relaxed">
            Integration isn&apos;t a buzzword here — it&apos;s the foundation. Your body, mind, and spirit don&apos;t operate in isolation, so neither does your care.{" "}
            <Link href="/about" className="text-brown-800 underline underline-offset-4 decoration-brown-300 hover:decoration-gold-600">
              Read our story
            </Link>
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-4">Google Reviews</p>
            <h2 className="font-serif text-4xl md:text-5xl text-brown-800 mb-5">What People Are Saying</h2>
            <div className="flex items-center justify-center gap-3">
              <Stars className="w-5 h-5" />
              <span className="text-brown-600 text-sm">5.0 · 14 reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <figure key={r.name} className="bg-cream-50 border border-cream-200 rounded-2xl p-7 flex flex-col">
                <Stars />
                <blockquote className="text-brown-600 text-sm leading-relaxed mt-4 flex-1">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="text-brown-800 text-sm font-medium mt-5">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty teaser */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white border border-cream-200 rounded-2xl px-8 py-10 md:px-12 flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <p className="text-gold-600 text-xs font-medium tracking-[0.2em] uppercase mb-3">Community</p>
              <h2 className="font-serif text-3xl text-brown-800 mb-3">The Local Loyalty Link</h2>
              <p className="text-brown-600 text-sm leading-relaxed max-w-xl">
                A free digital pass for Colorado locals. Scan once, keep it in your wallet, and unlock rewards at local businesses across Old Colorado City.
              </p>
            </div>
            <Link
              href="/loyalty"
              className="self-start md:self-center border border-brown-300 text-brown-700 text-sm font-medium px-7 py-3.5 rounded-full hover:border-brown-500 transition-colors whitespace-nowrap"
            >
              See the partners →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-brown-800 mb-5">Ready to begin?</h2>
          <p className="text-brown-600 leading-relaxed mb-10">
            Book a consultation and let us walk the path of integrated healing with you.
          </p>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brown-700 text-white text-sm font-medium px-10 py-4 rounded-full hover:bg-brown-800 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
