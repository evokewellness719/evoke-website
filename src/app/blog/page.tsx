import Link from "next/link";
import { getPublishedPosts, formatPostDate } from "@/lib/blog-posts";

export const metadata = {
  title: "Blog | EVOKE Wellness",
  description: "Herbal wisdom, mental wellness insights, and integrated healing from the EVOKE Wellness team in Colorado Springs.",
};

export const revalidate = 3600;

export default function Blog() {
  const posts = getPublishedPosts();

  return (
    <>
      <section className="pt-40 pb-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-5">The EVOKE Journal</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brown-800 leading-tight mb-6">Wisdom &amp; Wellness</h1>
          <p className="text-brown-600 text-lg leading-relaxed max-w-xl mx-auto">
            Herbal knowledge, mental wellness insights, and spiritual reflections — one post at a time.
          </p>
        </div>
      </section>

      <section className="pb-28 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white border border-cream-200 rounded-2xl p-8 hover:border-brown-300 transition-colors">
              <div className="flex items-center gap-3 mb-4 text-xs">
                <span className="font-medium text-gold-600 tracking-[0.2em] uppercase">{post.category}</span>
                <span className="text-brown-300">·</span>
                <time dateTime={post.date} className="text-brown-500">{formatPostDate(post.date)}</time>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-brown-800 mb-3 leading-snug">
                <Link href={`/blog/${post.slug}`} className="hover:text-gold-600 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-brown-600 text-sm leading-relaxed mb-5">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-brown-800 hover:text-gold-600 transition-colors">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
