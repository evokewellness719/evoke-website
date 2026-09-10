"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "https://shopevoke.net/", label: "Shop", external: true },
  { href: "/services", label: "Services" },
  { href: "/loyalty", label: "Loyalty Link" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

const BOOK_URL = "https://secure.gethealthie.com/users/sign_in";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = "text-sm font-medium text-brown-700 hover:text-gold-600 transition-colors tracking-wide";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-cream-50/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(94,68,48,0.08)]" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" aria-label="EVOKE Wellness home">
          <Image
            src="/evoke-logo.webp"
            alt="EVOKE Wellness"
            width={56}
            height={56}
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.external ? (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {l.label}
              </a>
            ) : (
              <Link key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </Link>
            )
          )}
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brown-700 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-brown-800 transition-colors"
          >
            Book Now
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block w-6 h-0.5 bg-brown-700 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-brown-700 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-brown-700 transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream-50 border-t border-cream-200 px-6 pb-6">
          <nav className="flex flex-col pt-2">
            {links.map((l) =>
              l.external ? (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="py-3 text-base text-brown-700 border-b border-cream-200"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base text-brown-700 border-b border-cream-200"
                >
                  {l.label}
                </Link>
              )
            )}
            <div className="flex gap-6 pt-4 text-sm text-brown-500">
              <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </div>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 bg-brown-700 text-white text-sm font-medium px-5 py-3 rounded-full text-center hover:bg-brown-800 transition-colors"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
