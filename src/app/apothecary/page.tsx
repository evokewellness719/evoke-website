export const metadata = {
  title: "The Modern Apothecary | EVOKE Wellness",
  description: "Curated botanical supplements, tinctures, and wellness products by EVOKE Wellness.",
};

const categories = [
  { icon: "🌿", label: "Herbal Tinctures" },
  { icon: "💊", label: "Supplements" },
  { icon: "🫖", label: "Botanical Teas" },
  { icon: "🧴", label: "Topicals & Oils" },
  { icon: "📦", label: "Wellness Bundles" },
  { icon: "✨", label: "Seasonal Picks" },
];

export default function Apothecary() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-cream-200 to-cream-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-sm font-medium tracking-[0.25em] uppercase mb-4">
            EVOKE Wellness
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-brown-800 mb-4">
            The Modern Apothecary
          </h1>
          <p className="text-brown-500 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Botanical wellness, curated with intention. Every product is rooted in ancient wisdom and backed by clinical evidence.
          </p>
          <a
            href="https://shopevoke.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brown-700 text-white font-medium px-8 py-4 rounded-full hover:bg-brown-800 transition-all text-sm tracking-wide"
          >
            Visit the Full Shop →
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-brown-800">Browse by Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((c) => (
              <a
                key={c.label}
                href="https://shopevoke.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-cream-50 border border-cream-200 rounded-2xl p-8 text-center hover:border-brown-300 hover:bg-brown-50 transition-all"
              >
                <div className="text-4xl mb-3">{c.icon}</div>
                <p className="font-serif text-brown-700 font-medium group-hover:text-sage-900 transition-colors">
                  {c.label}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-brown-800 mb-6">Our Apothecary Philosophy</h2>
          <p className="text-brown-600 leading-relaxed mb-5">
            We source only what we trust. Every product has been vetted for purity, efficacy, and alignment with our naturopathic values. No fillers, no shortcuts.
          </p>
          <p className="text-brown-600 leading-relaxed">
            Not sure what's right for you? Book a consultation and let us build a protocol tailored to your unique needs.
          </p>
          <a
            href="https://secure.gethealthie.com/users/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 border border-brown-500 text-brown-700 font-medium px-8 py-3 rounded-full hover:bg-brown-50 transition-all text-sm"
          >
            Get a Personalized Recommendation
          </a>
        </div>
      </section>
    </>
  );
}
