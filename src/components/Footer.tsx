import Link from "next/link";
import Image from "next/image";

const explore = [
  { href: "https://shopevoke.net/", label: "Shop", external: true },
  { href: "/services", label: "Services" },
  { href: "/mental-health", label: "Mental Health & Wellness" },
  { href: "/rooted", label: "Rooted in Integration" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

const community = [
  { href: "/events", label: "Events" },
  { href: "/loyalty", label: "The Local Loyalty Link" },
  { href: "/loyalty/partner", label: "Partner With Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const linkClass = "hover:text-brown-800 transition-colors";

export default function Footer() {
  return (
    <footer className="bg-cream-100 border-t border-cream-200">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Image
            src="/evoke-logo.webp"
            alt="EVOKE Wellness"
            width={96}
            height={96}
            className="object-contain mb-4"
          />
          <p className="text-brown-600 text-sm leading-relaxed max-w-xs">
            Integrated healing for your whole self — naturopathic care, mental wellness, and spiritual community in Colorado Springs.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-brown-800 mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm text-brown-600">
            {explore.map((l) => (
              <li key={l.href}>
                {l.external ? (
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkClass}>{l.label}</a>
                ) : (
                  <Link href={l.href} className={linkClass}>{l.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-brown-800 mb-4">Community</h4>
          <ul className="space-y-2.5 text-sm text-brown-600">
            {community.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-brown-800 mb-4">Visit</h4>
          <ul className="space-y-2.5 text-sm text-brown-600">
            <li>2627 W Colorado Ave, inside Mush Love, Tee<br />Colorado Springs, CO 80904</li>
            <li>107 E N Interstate-30 Service Rd<br />Cumby, TX 75433 <span className="text-brown-500">· coming soon</span></li>
            <li><a href="tel:+17193234691" className={linkClass}>(719) 323-4691</a></li>
            <li><a href="mailto:info@evokewellness.net" className={linkClass}>info@evokewellness.net</a></li>
          </ul>
          <div className="flex gap-5 mt-5 text-sm text-brown-600">
            <a href="https://www.instagram.com/evoke_wellness719/" target="_blank" rel="noopener noreferrer" className={linkClass}>Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61580707843038" target="_blank" rel="noopener noreferrer" className={linkClass}>Facebook</a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream-200 px-6 py-5 text-center text-xs text-brown-500">
        © {new Date().getFullYear()} EVOKE Wellness. All rights reserved.
      </div>
    </footer>
  );
}
