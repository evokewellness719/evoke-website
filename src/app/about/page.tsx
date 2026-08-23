import Image from "next/image";

export const metadata = {
  title: "About | EVOKE Wellness",
  description: "Learn about EVOKE Wellness and our naturopathic approach to holistic healing.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-lavender-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-sm font-medium tracking-[0.25em] uppercase mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brown-800 mb-6">
            About EVOKE Wellness
          </h1>
          <p className="text-brown-600 text-lg leading-relaxed">
            We are a naturopathic practice dedicated to bridging the gap between modern health and foundational healing.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square rounded-3xl overflow-hidden relative">
            <Image
              src="/joe-olivarez.jpg"
              alt="Joe Olivarez, founder of EVOKE Wellness"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown-900/80 to-transparent px-6 py-5">
              <p className="font-serif text-white text-xl">Joe Olivarez</p>
              <p className="text-cream-100 text-sm tracking-wide">Founder, EVOKE Wellness</p>
            </div>
          </div>
          <div>
            <p className="text-gold-600 text-sm font-medium tracking-[0.2em] uppercase mb-3">Our Mission</p>
            <h2 className="font-serif text-4xl text-brown-800 mb-6 leading-tight">
              Where Ancient Wisdom Meets Modern Science
            </h2>
            <p className="text-brown-600 leading-relaxed mb-5">
              At EVOKE Wellness &amp; The Modern Apothecary, we provide a comprehensive, naturopathic approach to your complete well-being. We combine ancient botanical wisdom with clinical data to create care that honors the whole person — body, mind, and spirit.
            </p>
            <p className="text-brown-600 leading-relaxed">
              We believe that true healing begins when you feel seen and supported. Every protocol, every recommendation, every interaction is built on that foundation of trust.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold-600 text-sm font-medium tracking-[0.2em] uppercase mb-3">What We Stand For</p>
            <h2 className="font-serif text-4xl text-brown-800">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🌿", title: "Botanical Integrity", desc: "Every product and protocol is grounded in quality botanicals with proven efficacy." },
              { icon: "🔬", title: "Clinical Evidence", desc: "We pair traditional wisdom with modern research so you get the best of both worlds." },
              { icon: "🤝", title: "Whole-Person Care", desc: "We treat you — not just symptoms. Your full history, lifestyle, and goals matter." },
            ].map((v) => (
              <div key={v.title} className="bg-cream-50 rounded-2xl p-8 text-center border border-cream-200">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-serif text-xl text-brown-800 mb-3">{v.title}</h3>
                <p className="text-brown-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream-100 text-brown-800 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-6">Ready to Work Together?</h2>
          <p className="text-brown-600 mb-8 leading-relaxed">
            Book your first consultation and experience what personalized, naturopathic care feels like.
          </p>
          <a
            href="https://secure.gethealthie.com/users/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brown-700 text-white font-semibold px-10 py-4 rounded-full hover:bg-brown-800 transition-all text-sm tracking-wide"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
