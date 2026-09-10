import { notFound } from "next/navigation";
import Link from "next/link";
import { getPublishedPosts, formatPostDate } from "@/lib/blog-posts";

export const revalidate = 3600;

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPublishedPosts().find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | EVOKE Wellness`, description: post.excerpt };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPublishedPosts().find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <section className="pt-40 pb-10 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="text-sm text-brown-500 hover:text-gold-600 transition-colors mb-8 inline-block">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4 text-xs">
            <span className="font-medium text-gold-600 tracking-[0.2em] uppercase">{post.category}</span>
            <span className="text-brown-300">·</span>
            <time dateTime={post.date} className="text-brown-500">{formatPostDate(post.date)}</time>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-brown-800 leading-tight">{post.title}</h1>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div
          className="max-w-3xl mx-auto px-6 prose prose-stone prose-headings:font-serif prose-headings:text-brown-800 prose-p:text-brown-600 prose-li:text-brown-600 prose-strong:text-brown-800 prose-a:text-gold-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>

      <section className="py-16 bg-cream-200">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-brown-800 mb-4">Ready to Experience Integrated Healing?</h2>
          <p className="text-brown-600 mb-8">Book a consultation or explore our apothecary — we&apos;d love to support your journey.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://secure.gethealthie.com/users/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brown-700 text-white font-medium px-8 py-4 rounded-full hover:bg-brown-800 transition-all text-sm"
            >
              Book Now
            </a>
            <Link
              href="/blog"
              className="border border-brown-400 text-brown-700 font-medium px-8 py-4 rounded-full hover:bg-brown-50 transition-all text-sm"
            >
              Read More Posts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
