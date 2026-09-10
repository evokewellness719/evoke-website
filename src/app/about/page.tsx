import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About | EVOKE Wellness",
  description:
    "EVOKE Wellness is a naturopathic practice in Colorado Springs bridging ancient botanical wisdom and modern science — body, mind, and spirit.",
};

const BOOK_URL = "https://secure.gethealthie.com/users/sign_in";

const values = [
  { title: "Botanical integrity", desc: "Every product and protocol is grounded in quality botanicals with proven efficacy." },
  { title: "Clinical evidence", desc: "Traditional wisdom paired with modern research, so you get the best of both." },
  { title: "Whole-person care", desc: "We treat you — not just symptoms. Your history, lifestyle, and goals all matter." },
];

export default function About() {
  return (
    <>
      <section className="pt-40 pb-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-5">Our story</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brown-800 leading-tight mb-6">About EVOKE Wellness</h1>
          <p className="text-brown-600 text-lg leading-relaxed max-w-xl mx-auto">
            A naturopathic practice dedicated to bridging the gap between modern health and foundational healing.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <figure>
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-cream-200">
              <Image
                src="/joe-olivarez.jpg"
                alt="Joe Olivarez, founder of EVOKE Wellness"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
                priority
              />
            </div>
            <figcaption className="mt-4">
              <p className="font-serif text-lg text-brown-800">Joe Olivarez</p>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-brown-500">Founder, EVOKE Wellness</p>
            </figcaption>
          </figure>
          <div>
            <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-4">Our mission</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brown-800 leading-tight mb-6">
              Where ancient wisdom meets modern science
            </h2>
            <p className="text-brown-600 leading-relaxed mb-5">
              EVOKE Wellness provides a comprehensive, naturopathic approach to your complete well-being. We combine ancient botanical wisdom with clinical data to create care that honors the whole person — body, mind, and spirit.
            </p>
            <p className="text-brown-600 leading-relaxed">
              True healing begins when you feel seen and supported. Every protocol, every recommendation, every interaction is built on that foundation of trust.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-4">What we stand for</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brown-800">Our values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="bg-white border border-cream-200 rounded-2xl p-8">
                <p className="font-serif text-3xl text-gold-400 mb-4">0{i + 1}</p>
                <h3 className="font-serif text-xl text-brown-800 mb-3">{v.title}</h3>
                <p className="text-brown-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-brown-800 mb-5">Ready to work together?</h2>
          <p className="text-brown-600 leading-relaxed mb-10">
            Book your first consultation and experience what personalized, naturopathic care feels like.
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
              href="/services"
              className="border border-brown-300 text-brown-700 text-sm font-medium px-8 py-4 rounded-full hover:border-brown-500 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
