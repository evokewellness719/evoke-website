import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EVOKE Wellness | Integrated Healing",
  description:
    "Integrated healing for your whole self — naturopathic care, mental wellness, and spiritual integration in Colorado Springs, CO.",
  keywords: "naturopathic wellness Colorado Springs, holistic healing Colorado Springs, apothecary Colorado Springs, mental health wellness Colorado Springs, spiritual center Colorado Springs, integrated healing",
  verification: {
    google: "210d530e8905f9fe",
  },
  openGraph: {
    title: "EVOKE Wellness | Integrated Healing",
    description: "Naturopathic care, mental wellness, and spiritual integration in Colorado Springs, CO.",
    url: "https://evokewellness.net",
    siteName: "EVOKE Wellness",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EVOKE Wellness",
    "description": "Integrated healing for your whole self — naturopathic care, mental wellness, and spiritual integration in Colorado Springs, CO.",
    "url": "https://evokewellness.net",
    "telephone": "(719) 323-4691",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2616 W Colorado Ave Suite 15",
      "addressLocality": "Colorado Springs",
      "addressRegion": "CO",
      "postalCode": "80904",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.instagram.com/evoke_wellness719/",
      "https://www.facebook.com/profile.php?id=61580707843038"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
