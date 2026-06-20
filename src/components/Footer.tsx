import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-cream-200 text-brown-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Image
            src="/evoke-logo.webp"
            alt="EVOKE Wellness — Integrated Healing"
            width={140}
            height={140}
            className="object-contain mb-3"
          />
          <p className="text-brown-600 text-sm leading-relaxed">
            Integrated healing for your whole self — naturopathic care, mental wellness, and spiritual integration. A space where you are seen, supported, and secure.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-brown-800">Quick Links</h4>
          <ul className="space-y-2 text-sm text-brown-600">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/apothecary", label: "The Modern Apothecary" },
              { href: "/mental-health", label: "Mental Health & Wellness" },
              { href: "/rooted", label: "Rooted in Integration" },
              { href: "/loyalty", label: "Local Loyalty Link" },
              { href: "/blog", label: "Blog" },
              { href: "/faq", label: "FAQs" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold-300 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-brown-800">Get In Touch</h4>
          <ul className="space-y-2 text-sm text-brown-600">
            <li>
              <a href="mailto:info@evokewellness.net" className="hover:text-gold-300 transition-colors">
                info@evokewellness.net
              </a>
            </li>
            <li>
              <a
                href="https://secure.gethealthie.com/users/sign_in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-300 transition-colors"
              >
                Book an Appointment →
              </a>
            </li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.instagram.com/evoke_wellness719/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brown-600 hover:text-gold-300 transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61580707843038"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brown-600 hover:text-gold-300 transition-colors text-sm"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream-300 px-6 py-4 text-center text-xs text-brown-500">
        © {new Date().getFullYear()} EVOKE Wellness &amp; The Modern Apothecary. All rights reserved.
      </div>
    </footer>
  );
}
