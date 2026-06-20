import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "The Local Loyalty Link | EVOKE Wellness",
  description: "Strengthening our community, one connection at a time. A digital loyalty pass for Colorado locals — and a powerful marketing program for local businesses.",
};

const partners = [
  {
    name: "Caitspace LTD",
    desc: "Therapeutic arts studio led by Caitlin Elizabeth — offering workshops and creative healing sessions.",
    perk: "7% off",
    icon: "🎨",
    address: null,
    url: "https://www.caitspaceltd.com/",
  },
  {
    name: "Holistique",
    desc: "Monument-based wellness sanctuary offering infrared sauna, halotherapy, and red light therapy.",
    perk: "15% off infrared sauna",
    icon: "🧖",
    address: "6577 Cinematic View, Monument, CO 80132",
    url: "https://www.holistiquebydesign.com/",
  },
  {
    name: "Mush Love, Tee",
    desc: "Mycology shop specializing in mushroom products, supplements, and education.",
    perk: "7% off",
    icon: "🍄",
    address: "2627 W Colorado Ave, Colorado Springs, CO 80904",
    url: "https://mushlovetee.com/",
  },
  {
    name: "Molly Sue's Salon",
    desc: "Hair salon led by experienced cosmetologist Molly Lovejoy.",
    perk: "7% off",
    icon: "✂️",
    address: "2616 W Colorado Ave Suite 12, Colorado Springs, CO 80904",
    url: "https://www.facebook.com",
  },
  {
    name: "The Conscious Living Shop",
    desc: "Woman-owned sustainability retailer offering bulk refill solutions.",
    perk: "7% off",
    icon: "♻️",
    address: "2616 W Colorado Ave Suite 9, Colorado Springs, CO 80904",
    url: "https://www.consciouslivingshop.com/",
  },
  {
    name: "Base Camp Restaurant",
    desc: "Regional cuisine restaurant with a welcoming community atmosphere.",
    perk: "BOGO beer, wine & soda",
    icon: "🍽️",
    address: "2611 W Colorado Ave, Colorado Springs, CO 80904",
    url: "https://basecampcos.com",
  },
  {
    name: "Crazee Craves",
    desc: "South Texas snack shop with viral TikTok products and nationwide shipping.",
    perk: "7% off",
    icon: "🍬",
    address: "2616 W Colorado Ave Suite 16, Colorado Springs, CO 80904",
    url: "https://crazeecraves.square.site/",
  },
  {
    name: "The Enchanted Fox",
    desc: "Metaphysical shop offering herbs, crystals, Reiki, and tarot.",
    perk: "7% off",
    icon: "🦊",
    address: "2636 W Colorado Ave, Colorado Springs, CO 80904",
    url: "https://enchantedfoxocc.com/",
  },
  {
    name: "EVOKE Wellness",
    desc: "Naturopathic care, apothecary, mental wellness, and spiritual community.",
    perk: "Member benefits",
    icon: "🌿",
    address: null,
    url: "/",
  },
];

const localSteps = [
  {
    step: "01",
    title: "Scan the QR Code",
    desc: "Find a QR code at any participating Local Loyalty Link location and scan it to add your digital card.",
  },
  {
    step: "02",
    title: "It Lives in Your Wallet",
    desc: "Your digital card is added directly to Apple Wallet or Google Wallet — no app, no account, no friction.",
  },
  {
    step: "03",
    title: "Get Push Notifications",
    desc: "Once your card is in your wallet, we can send you push notifications with deals, events, and updates straight to your lock screen.",
  },
  {
    step: "04",
    title: "Redeem Your Rewards",
    desc: "Spot the Local Loyalty Link emblem at partner businesses, show your card at checkout, and unlock your reward.",
  },
];

const businessPerks = [
  {
    icon: "🎬",
    title: "Introductory Video",
    desc: "Every business partner receives a professionally produced introductory video to introduce your brand to the EVOKE community.",
  },
  {
    icon: "📹",
    title: "Monthly Promo Videos",
    desc: "Ongoing monthly promotional videos to keep your business visible, shareable, and top of mind year-round.",
  },
  {
    icon: "🔗",
    title: "Network Exposure",
    desc: "Your business is featured across the Local Loyalty Link network and the EVOKE Wellness audience — reaching locals who are ready to spend.",
  },
  {
    icon: "📍",
    title: "Directory Listing",
    desc: "A permanent profile on the Local Loyalty Link partner page driving locals directly to your door.",
  },
];

export default function Loyalty() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-cream-200 to-cream-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/local-loyalty-link-logo.jpg"
              alt="The Local Loyalty Link"
              width={280}
              height={280}
              className="object-contain"
            />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-brown-800 mb-4">
            The Local Loyalty Link
          </h1>
          <p className="font-serif text-xl text-brown-600 italic mb-4">
            Strengthening Our Community, One Connection at a Time.
          </p>
          <p className="text-brown-500 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            A digital loyalty pass for Colorado locals — and a powerful visibility program for local businesses. Built to keep the community thriving all year long.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#for-locals"
              className="bg-brown-700 text-white font-medium px-8 py-4 rounded-full hover:bg-brown-800 transition-all text-sm tracking-wide"
            >
              I&apos;m a Local
            </a>
            <a
              href="#for-businesses"
              className="border border-brown-400 text-brown-700 font-medium px-8 py-4 rounded-full hover:bg-brown-50 transition-all text-sm tracking-wide"
            >
              I&apos;m a Business
            </a>
          </div>
        </div>
      </section>

      {/* The Why */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-sm font-medium tracking-[0.2em] uppercase mb-4">Why It Exists</p>
          <h2 className="font-serif text-3xl text-brown-800 mb-6">Built for Colorado. Built for the Off-Season.</h2>
          <p className="text-brown-600 leading-relaxed mb-4">
            Tourist season brings the crowds — but what about the rest of the year? The Local Loyalty Link was created to give Colorado locals a real reason to keep choosing local businesses when the visitors go home.
          </p>
          <p className="text-brown-600 leading-relaxed">
            When locals are rewarded for shopping local, everyone wins: the community stays strong, small businesses stay open, and the things that make Colorado special stick around.
          </p>
        </div>
      </section>

      {/* For Locals */}
      <section id="for-locals" className="py-20 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-brown-100 text-brown-700 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">For Colorado Locals</span>
            <h2 className="font-serif text-4xl text-brown-800">Your Free Community Pass</h2>
            <p className="text-brown-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              Joining is completely free. No fees, no sign-up form — just scan and save.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {localSteps.map((s) => (
              <div key={s.step} className="bg-cream-50 border border-cream-200 rounded-2xl p-6">
                <p className="font-serif text-4xl text-gold-300 font-semibold mb-3">{s.step}</p>
                <h3 className="font-serif text-lg text-brown-800 mb-2">{s.title}</h3>
                <p className="text-brown-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="max-w-xl mx-auto bg-cream-50 border border-cream-200 rounded-2xl p-6 text-center">
            <p className="text-2xl mb-3">📲</p>
            <p className="font-serif text-lg text-brown-800 mb-2">Your Card, Your Lock Screen</p>
            <p className="text-brown-500 text-sm leading-relaxed">
              Once your digital card lives in your wallet, we can send push notifications straight to your lock screen — new partner deals, community events, and exclusive updates. No app needed, ever.
            </p>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-sm font-medium tracking-[0.2em] uppercase mb-3">The Network</p>
            <h2 className="font-serif text-4xl text-brown-800">Our Partner Businesses</h2>
            <p className="text-brown-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Each partner sets their own rewards — from the standard 7% off to complimentary items and unique service upgrades.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p) => (
              <div key={p.name} className="bg-cream-50 border border-cream-200 rounded-2xl p-6 hover:border-brown-300 transition-all flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{p.icon}</span>
                  <span className="text-xs font-semibold text-brown-700 bg-brown-100 px-3 py-1 rounded-full">
                    {p.perk}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-brown-800 mb-2">{p.name}</h3>
                <p className="text-brown-500 text-sm leading-relaxed mb-3">{p.desc}</p>
                {p.address && (
                  <p className="text-brown-400 text-xs mb-4">
                    {p.address}
                  </p>
                )}
                <div className="mt-auto">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brown-700 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-brown-800 transition-colors"
                  >
                    Visit {p.name} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Businesses */}
      <section id="for-businesses" className="py-20 bg-brown-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-gold-100 text-gold-600 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">For Local Businesses</span>
            <h2 className="font-serif text-4xl text-brown-800">Grow With the Network</h2>
            <p className="text-brown-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              The Local Loyalty Link isn&apos;t just a discount program — it&apos;s a visibility and marketing platform for local businesses that want to stay top of mind year-round.
            </p>
          </div>

          {/* Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div className="bg-cream-50 border-2 border-brown-200 rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gold-500 text-brown-800 text-xs font-bold px-3 py-1 rounded-full">
                LIMITED SPOTS
              </div>
              <h3 className="font-serif text-2xl text-brown-800 mb-2">Foundational Member</h3>
              <div className="flex items-end justify-center gap-1 my-6">
                <span className="font-serif text-6xl font-semibold text-brown-700">Free</span>
              </div>
              <p className="text-brown-500 text-sm mb-6">For our first 14 business partners</p>
              <ul className="space-y-3 text-sm text-brown-600 text-left mb-8">
                <li className="flex gap-2"><span className="text-brown-500">✓</span> Introductory video produced for your business</li>
                <li className="flex gap-2"><span className="text-brown-500">✓</span> Monthly promotional videos</li>
                <li className="flex gap-2"><span className="text-brown-500">✓</span> Featured in the partner network</li>
                <li className="flex gap-2"><span className="text-brown-500">✓</span> Exposure to local loyalty members</li>
                <li className="flex gap-2"><span className="text-brown-500">✓</span> Directory listing on our site</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-brown-700 text-white font-medium py-3 rounded-full hover:bg-brown-800 transition-all text-sm text-center"
              >
                Claim a Founding Spot
              </Link>
            </div>

            <div className="bg-cream-50 border border-cream-200 rounded-3xl p-8 text-center">
              <h3 className="font-serif text-2xl text-brown-800 mb-2">Standard Member</h3>
              <div className="flex items-end justify-center gap-1 my-6">
                <span className="font-serif text-2xl text-brown-500 mb-3">$</span>
                <span className="font-serif text-6xl font-semibold text-brown-700">30</span>
                <span className="text-brown-400 mb-3">/mo</span>
              </div>
              <p className="text-brown-500 text-sm mb-6">After the 14 founding spots are filled</p>
              <ul className="space-y-3 text-sm text-brown-600 text-left mb-8">
                <li className="flex gap-2"><span className="text-brown-500">✓</span> Introductory video produced for your business</li>
                <li className="flex gap-2"><span className="text-brown-500">✓</span> Monthly promotional videos</li>
                <li className="flex gap-2"><span className="text-brown-500">✓</span> Featured in the partner network</li>
                <li className="flex gap-2"><span className="text-brown-500">✓</span> Exposure to local loyalty members</li>
                <li className="flex gap-2"><span className="text-brown-500">✓</span> Directory listing on our site</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full border border-brown-400 text-brown-700 font-medium py-3 rounded-full hover:bg-brown-50 transition-all text-sm text-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Business perks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessPerks.map((p) => (
              <div key={p.title} className="bg-cream-50 border border-brown-100 rounded-2xl p-6 flex gap-4">
                <div className="text-2xl shrink-0">{p.icon}</div>
                <div>
                  <h4 className="font-serif text-lg text-brown-800 mb-1">{p.title}</h4>
                  <p className="text-brown-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream-200">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl mb-4">Interested in Joining the Local Loyalty Link?</h2>
          <p className="text-brown-600 mb-8 leading-relaxed">
            Whether you&apos;re a Colorado local looking for your pass or a business ready to grow with the network — we&apos;d love to connect.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brown-700 text-white font-semibold px-10 py-4 rounded-full hover:bg-brown-800 transition-all text-sm tracking-wide"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
