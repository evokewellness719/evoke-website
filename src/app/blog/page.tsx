import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

export const metadata = {
  title: "Blog | EVOKE Wellness",
  description: "Herbal wisdom, mental wellness insights, and integrated healing from the EVOKE Wellness team in Colorado Springs.",
};

export default function Blog() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-cream-200 to-cream-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-sm font-medium tracking-[0.2em] uppercase mb-4">The EVOKE Journal</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brown-800 mb-4">Wisdom & Wellness</h1>
          <p className="text-brown-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Herbal knowledge, mental wellness insights, spiritual reflections, and community stories — one post at a time.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid gap-10">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white border border-cream-200 rounded-3xl p-8 hover:border-brown-300 transition-all">
                <span className="inline-block text-xs font-semibold text-gold-600 tracking-widest uppercase mb-3">
                  {post.category}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-brown-800 mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-gold-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-brown-500 leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex justify-end">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium text-brown-700 border-b border-brown-400 pb-0.5 hover:text-gold-600 hover:border-gold-600 transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
