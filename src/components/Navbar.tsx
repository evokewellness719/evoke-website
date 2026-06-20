"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    label: "Our Facets",
    children: [
      { href: "/apothecary", label: "The Modern Apothecary" },
      { href: "/mental-health", label: "Mental Health & Wellness" },
      { href: "/rooted", label: "Rooted in Integration" },
    ],
  },
  { href: "/loyalty", label: "Loyalty Link" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-cream-50 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/evoke-logo.webp"
            alt="EVOKE Wellness — Integrated Healing"
            width={72}
            height={72}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) =>
            "children" in l ? (
              <div key={l.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-sm font-medium text-brown-700 hover:text-gold-600 transition-colors tracking-wide uppercase flex items-center gap-1"
                >
                  {l.label}
                  <span className={`text-xs transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}>▾</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-60 bg-cream-50 rounded-2xl shadow-xl border border-cream-200 py-2 z-50">
                    {l.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-5 py-3 text-sm text-brown-700 hover:bg-cream-100 hover:text-gold-600 transition-colors"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-brown-700 hover:text-gold-600 transition-colors tracking-wide uppercase"
              >
                {l.label}
              </Link>
            )
          )}
          <a
            href="https://secure.gethealthie.com/users/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brown-700 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-brown-800 transition-colors tracking-wide"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-brown-700 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-brown-700 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-brown-700 transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream-50 border-t border-cream-200 px-6 pb-6">
          <nav className="flex flex-col gap-1 pt-4">
            <Link href="/" onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-brown-700 tracking-wide uppercase">Home</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-brown-700 tracking-wide uppercase">About</Link>
            <p className="py-2 text-xs font-semibold text-brown-400 tracking-widest uppercase mt-2">Our Facets</p>
            <Link href="/apothecary" onClick={() => setOpen(false)} className="pl-3 py-2 text-sm text-brown-700">⚗️ The Modern Apothecary</Link>
            <Link href="/mental-health" onClick={() => setOpen(false)} className="pl-3 py-2 text-sm text-brown-700">🧠 Mental Health & Wellness</Link>
            <Link href="/rooted" onClick={() => setOpen(false)} className="pl-3 py-2 text-sm text-brown-700">🌱 Rooted in Integration</Link>
            <Link href="/loyalty" onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-brown-700 tracking-wide uppercase mt-2">🔗 Local Loyalty Link</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-brown-700 tracking-wide uppercase">Blog</Link>
            <Link href="/faq" onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-brown-700 tracking-wide uppercase">FAQs</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-brown-700 tracking-wide uppercase">Contact</Link>
            <a
              href="https://secure.gethealthie.com/users/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 bg-brown-700 text-white text-sm font-medium px-5 py-3 rounded-full text-center hover:bg-brown-800 transition-colors"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
