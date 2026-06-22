import { blogPosts } from "@/lib/blog-posts";

export default function sitemap() {
  const base = "https://evokewellness.net";

  const staticPages = [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/apothecary`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/mental-health`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/rooted`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/loyalty`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/faq`, lastModified: new Date(), priority: 0.6 },
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
