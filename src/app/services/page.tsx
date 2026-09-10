import Link from "next/link";

export const metadata = {
  title: "Services | EVOKE Wellness",
  description:
    "Naturopathic consultations, mental health & wellness support, and spiritual community — integrated care in Colorado Springs.",
};

const BOOK_URL = "https://secure.gethealthie.com/users/sign_in";

const services = [
  {
    eyebrow: "Naturopathic Care",
    title: "Consultations",
    desc: "A comprehensive intake — your health history, lifestyle, stress, diet, and goals — followed by a personalized protocol built around botanical medicine and clinical evidence. In person or virtual.",
    href: BOOK_URL,
    external: true,
    cta: "Book a consultation",
  },
  {
    eyebrow: "Mental Health",
    title: "Mental Health & Wellness",
    desc: "Therapeutic arts, neurographic art, and wellness coaching with Caitlin, QBHA — creative, compassionate support that meets you exactly where you are.",
    href: "/mental-health",
    cta: "Learn more",
  },
  {
    eyebrow: "Spiritual Community",
    title: "Rooted in Integration",
    desc: "Our spiritual center — meditation, contemplative practice, and community gatherings open to everyone, regardless of tradition or belief.",
    href: "/rooted",
    cta: "Learn more",
  },
];

export default function Services() {
  return (
    <>
      <section className="pt-40 pb-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-5">Services</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brown-800 leading-tight mb-6">
            Three paths, one integration
          </h1>
          <p className="text-brown-600 text-lg leading-relaxed max-w-xl mx-auto">
            Each practice serves a different dimension of your well-being. Together, they care for the whole of you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          {services.map((s) => {
            const inner = (
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <p className="text-gold-600 text-xs font-medium tracking-[0.2em] uppercase mb-3">{s.eyebrow}</p>
                  <h2 className="font-serif text-2xl md:text-3xl text-brown-800 mb-3">{s.title}</h2>
                  <p className="text-brown-600 text-sm leading-relaxed max-w-xl">{s.desc}</p>
                </div>
                <span className="text-sm font-medium text-brown-800 group-hover:text-gold-600 transition-colors whitespace-nowrap">
                  {s.cta} →
                </span>
              </div>
            );
            const cls =
              "group block bg-cream-50 border border-cream-200 rounded-2xl p-8 md:p-10 hover:border-brown-300 transition-colors";
            return s.external ? (
              <a key={s.title} href={s.href} target="_blank" rel="noopener noreferrer" className={cls}>
                {inner}
              </a>
            ) : (
              <Link key={s.title} href={s.href} className={cls}>
                {inner}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="py-24 bg-cream-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-brown-800 mb-4">Not sure where to start?</h2>
          <p className="text-brown-600 leading-relaxed mb-8">
            Book a consultation and we&apos;ll help you find the right path — or reach out with any question.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brown-700 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-brown-800 transition-colors"
            >
              Book a Consultation
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
