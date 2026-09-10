import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "The Local Loyalty Link | EVOKE Wellness",
  description:
    "A free digital loyalty pass for Colorado locals. Scan once, keep it in your wallet, and unlock rewards at local businesses across Old Colorado City.",
};

const partners = [
  {
    name: "EVOKE Wellness",
    desc: "Naturopathic care, herbal products, mental wellness, and spiritual community.",
    perk: "Member benefits",
    logo: "/evoke-logo.webp",
    address: "2616 W Colorado Ave Suite 15, Colorado Springs, CO 80904",
    url: "https://shopevoke.net/",
  },
  {
    name: "The Queen's TEApothecary",
    desc: "A charming bouTEAque in Historic Old Colorado City offering artisan handcrafted organic teas, apothecary-style bulk herbs, bespoke tea accessories, and gifts by local artisans.",
    perk: "7% off",
    logo: "/The Queens Teapothecary.png",
    address: "2504 W Colorado Ave, Colorado Springs, CO 80904",
    url: "https://www.TheQueensTEApothecary.com",
  },
  {
    name: "Caitspace LTD",
    desc: "Therapeutic arts studio led by Caitlin Elizabeth — workshops and creative healing sessions.",
    perk: "7% off",
    logo: "/caitspace-logo.png",
    address: null,
    url: "https://www.caitspaceltd.com/",
  },
  {
    name: "Mush Love, Tee",
    desc: "Mycology shop specializing in mushroom products, supplements, and education.",
    perk: "7% off",
    logo: null,
    address: "2627 W Colorado Ave, Colorado Springs, CO 80904",
    url: "https://mushlovetee.com/",
  },
  {
    name: "Molly Sue's Salon",
    desc: "Hair salon led by experienced cosmetologist Molly Lovejoy.",
    perk: "7% off",
    logo: null,
    address: "2616 W Colorado Ave Suite 12, Colorado Springs, CO 80904",
    url: null,
  },
  {
    name: "Base Camp Restaurant",
    desc: "Regional cuisine with a welcoming community atmosphere.",
    perk: "BOGO beer, wine & soda",
    logo: "/basecamp-logo.jpg",
    address: "2611 W Colorado Ave, Colorado Springs, CO 80904",
    url: "https://basecampcos.com",
  },
  {
    name: "The Enchanted Fox",
    desc: "Metaphysical shop offering herbs, crystals, Reiki, and tarot.",
    perk: "7% off",
    logo: "/enchanted-fox-logo.jpg",
    address: "2636 W Colorado Ave, Colorado Springs, CO 80904",
    url: "https://enchantedfoxocc.com/",
  },
  {
    name: "Hookah Emporium",
    desc: "Old Colorado City's local hookah and smoke shop with apparel, hardware kits, and vape products.",
    perk: "7% off + member deals",
    logo: null,
    address: "2606 W Colorado Ave, Colorado Springs, CO 80904",
    url: null,
  },
  {
    name: "White Rabbit Beads",
    desc: "Old Colorado City's go-to bead shop for over 35 years — beads, supplies, charms, chains, repairs, private events, and classes.",
    perk: "7% off",
    logo: "/Wabbit.jpg",
    address: "2421 W Colorado Ave, Colorado Springs, CO 80904",
    url: "https://whiterabbitbeads.com/",
  },
];

const steps = [
  { title: "Scan the QR code", desc: "Find it at any participating location and scan to add your digital card." },
  { title: "Keep it in your wallet", desc: "It lives in Apple Wallet or Google Wallet — no app, no account, no friction." },
  { title: "Get notified", desc: "New partner deals, events, and updates land straight on your lock screen." },
  { title: "Redeem rewards", desc: "Show your card at checkout wherever you see the Local Loyalty Link emblem." },
];

export default function Loyalty() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Image
            src="/local-loyalty-link-logo.jpg"
            alt="The Local Loyalty Link"
            width={180}
            height={180}
            className="object-contain mx-auto mb-8"
          />
          <h1 className="font-serif text-5xl md:text-6xl text-brown-800 leading-tight mb-5">
            The Local Loyalty Link
          </h1>
          <p className="text-brown-600 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            A free digital pass for Colorado locals. Scan once, keep it in your wallet, and unlock rewards at local businesses all year long.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#partners"
              className="bg-brown-700 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-brown-800 transition-colors"
            >
              See the partners
            </a>
            <Link
              href="/loyalty/partner"
              className="border border-brown-300 text-brown-700 text-sm font-medium px-8 py-4 rounded-full hover:border-brown-500 transition-colors"
            >
              For businesses →
            </Link>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-4">Why it exists</p>
          <h2 className="font-serif text-3xl md:text-4xl text-brown-800 mb-6">Built for Colorado. Built for the off-season.</h2>
          <p className="text-brown-600 leading-relaxed">
            Tourist season brings the crowds — but what about the rest of the year? The Local Loyalty Link gives locals a real reason to keep choosing local businesses when the visitors go home. When locals are rewarded for shopping local, the community stays strong and small businesses stay open.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-4">How it works</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brown-800">Free to join. No sign-up form.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="bg-white border border-cream-200 rounded-2xl p-7">
                <p className="font-serif text-3xl text-gold-400 mb-4">0{i + 1}</p>
                <h3 className="font-serif text-lg text-brown-800 mb-2">{s.title}</h3>
                <p className="text-brown-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-4">The network</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brown-800 mb-4">Partner Businesses</h2>
            <p className="text-brown-600 text-sm leading-relaxed max-w-lg mx-auto">
              Each partner sets their own reward — from the standard 7% off to complimentary items and service upgrades.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p) => (
              <div key={p.name} className="bg-cream-50 border border-cream-200 rounded-2xl p-7 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-5">
                  {p.logo ? (
                    <div className="w-14 h-14 relative shrink-0 rounded-xl overflow-hidden bg-white border border-cream-200">
                      <Image src={p.logo} alt={p.name} fill className="object-contain p-1.5" />
                    </div>
                  ) : (
                    <div className="w-14 h-14 shrink-0 rounded-xl bg-white border border-cream-200 flex items-center justify-center font-serif text-xl text-brown-700">
                      {p.name.charAt(0)}
                    </div>
                  )}
                  <span className="text-xs font-medium text-brown-800 bg-white border border-cream-200 px-3 py-1.5 rounded-full whitespace-nowrap">
                    {p.perk}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-brown-800 mb-2">{p.name}</h3>
                <p className="text-brown-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                {p.address && <p className="text-brown-500 text-xs mb-4">{p.address}</p>}
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm font-medium text-brown-800 hover:text-gold-600 transition-colors"
                  >
                    Visit website →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business CTA */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-4">Own a local business?</p>
          <h2 className="font-serif text-3xl md:text-4xl text-brown-800 mb-4">Grow with the network</h2>
          <p className="text-brown-600 leading-relaxed mb-8">
            Join the Local Loyalty Link and stay top of mind with Colorado locals year-round.
          </p>
          <Link
            href="/loyalty/partner"
            className="inline-block bg-brown-700 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-brown-800 transition-colors"
          >
            Learn about partnering
          </Link>
        </div>
      </section>
    </>
  );
}
