import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | EVOKE Wellness",
  description: "Get in touch with EVOKE Wellness in Colorado Springs — send a message, email, book, or visit.",
};

const BOOK_URL = "https://secure.gethealthie.com/users/sign_in";

const items = [
  {
    label: "Email",
    value: "info@evokewellness.net",
    href: "mailto:info@evokewellness.net",
    note: "We typically reply within 1–2 business days.",
  },
  {
    label: "Book",
    value: "Schedule via Healthie",
    href: BOOK_URL,
    external: true,
    note: "The fastest route for appointment questions.",
  },
  {
    label: "Phone",
    value: "(719) 323-4691",
    href: "tel:+17193234691",
    note: null,
  },
  {
    label: "Visit",
    value: "2627 W Colorado Ave",
    href: "https://maps.google.com/?q=2627+W+Colorado+Ave+Colorado+Springs+CO+80904",
    external: true,
    note: "Inside Mush Love, Tee · Old Colorado City, Colorado Springs, CO 80904 — plus a second location coming soon in Cumby, Texas",
  },
];

export default function Contact() {
  return (
    <>
      <section className="pt-40 pb-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-5">Contact</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brown-800 leading-tight mb-6">Let&apos;s connect</h1>
          <p className="text-brown-600 text-lg leading-relaxed max-w-xl mx-auto">
            Have a question, want to learn more, or not sure where to start? We&apos;re here for it.
          </p>
        </div>
      </section>

      <section className="pb-28 bg-cream-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="bg-white border border-cream-200 rounded-2xl divide-y divide-cream-200">
              {items.map((i) => (
                <div key={i.label} className="p-6 md:p-7">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brown-500 mb-2">{i.label}</p>
                  <a
                    href={i.href}
                    target={i.external ? "_blank" : undefined}
                    rel={i.external ? "noopener noreferrer" : undefined}
                    className="font-serif text-xl text-brown-800 hover:text-gold-600 transition-colors"
                  >
                    {i.value}
                  </a>
                  {i.note && <p className="text-brown-500 text-sm mt-1.5">{i.note}</p>}
                </div>
              ))}
            </div>
            <div className="flex gap-6 mt-6 px-1 text-sm text-brown-600">
              <a
                href="https://www.instagram.com/evoke_wellness719/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brown-800 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61580707843038"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brown-800 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
