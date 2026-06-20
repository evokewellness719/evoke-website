export const metadata = {
  title: "Blog | EVOKE Wellness",
  description: "Wellness insights, naturopathic tips, and healing wisdom from EVOKE Wellness.",
};

const posts = [
  {
    slug: "bridging-modern-and-foundational-health",
    title: "Bridging Modern & Foundational Health",
    date: "June 2026",
    category: "Naturopathic Care",
    excerpt:
      "What does it really mean to bridge the gap between modern medicine and foundational healing? We explore the philosophy at the heart of EVOKE Wellness.",
  },
  {
    slug: "adaptogens-for-stress",
    title: "5 Adaptogens That Actually Work for Stress",
    date: "May 2026",
    category: "Botanicals",
    excerpt:
      "From ashwagandha to rhodiola, we break down the adaptogens backed by both clinical data and centuries of use — and how to know which ones are right for you.",
  },
  {
    slug: "gut-health-and-mental-wellness",
    title: "The Gut-Brain Connection: What Your Digestion Is Telling You",
    date: "April 2026",
    category: "Whole-Body Health",
    excerpt:
      "Your gut is often called the second brain — and for good reason. Understanding this connection is key to unlocking lasting mental and physical wellness.",
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-lavender-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-sm font-medium tracking-[0.25em] uppercase mb-4">Wellness Insights</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brown-800 mb-6">The EVOKE Journal</h1>
          <p className="text-brown-600 text-lg leading-relaxed">
            Education, inspiration, and honest conversations about holistic health.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-cream-200 pb-12 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-gold-600 tracking-widest uppercase">
                    {post.category}
                  </span>
                  <span className="text-cream-400">·</span>
                  <span className="text-xs text-brown-400">{post.date}</span>
                </div>
                <h2 className="font-serif text-3xl text-brown-800 mb-4 hover:text-brown-600 transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-brown-600 leading-relaxed mb-6">{post.excerpt}</p>
                <button className="text-brown-700 font-medium text-sm border-b border-brown-400 pb-0.5 hover:text-gold-600 hover:border-gold-600 transition-colors">
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-brown-800 mb-4">Stay in the Know</h2>
          <p className="text-brown-600 mb-8 leading-relaxed">
            Get wellness insights, seasonal protocols, and apothecary updates delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border border-cream-300 rounded-full px-5 py-3 text-sm text-brown-700 focus:outline-none focus:border-brown-400 bg-white"
            />
            <button
              type="submit"
              className="bg-brown-700 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-brown-800 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
