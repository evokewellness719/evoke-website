import Link from "next/link";
import { getUpcomingEvents, formatEventDate, formatMonth, mapsUrl, type Event } from "@/lib/events";

export const metadata = {
  title: "Events | EVOKE Wellness",
  description: "Where to find EVOKE Wellness, Rooted in Integration, and our partners around Colorado Springs — markets, gatherings, workshops, and more.",
};

export const revalidate = 3600;

function EventCard({ e }: { e: Event }) {
  return (
    <article className="bg-white border border-cream-200 rounded-2xl p-7 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10">
      <div className="md:w-48 shrink-0">
        <p className="font-serif text-2xl md:text-3xl text-brown-800 leading-tight whitespace-nowrap">{formatEventDate(e.date)}</p>
        <p className="text-xs font-medium tracking-[0.15em] uppercase text-brown-500 mt-2">
          {new Date(`${e.date}T12:00:00`).toLocaleDateString("en-US", { weekday: "long" })}
        </p>
        <p className="text-sm text-brown-600 mt-3">{e.time ?? "Time to be announced"}</p>
      </div>
      <div className="flex-1">
        <h3 className="font-serif text-2xl text-brown-800 mb-2">{e.title}</h3>
        <p className="text-brown-600 text-sm leading-relaxed mb-4">{e.description}</p>
        <a
          href={mapsUrl(e)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-brown-800 hover:text-gold-600 transition-colors"
        >
          <span className="font-medium">{e.venue}</span>
          <span className="text-brown-500"> · {e.address}, {e.city} →</span>
        </a>
      </div>
    </article>
  );
}

export default function Events() {
  const upcoming = getUpcomingEvents();
  const byMonth = upcoming.reduce<Record<string, Event[]>>((acc, e) => {
    const key = formatMonth(e.date);
    (acc[key] ??= []).push(e);
    return acc;
  }, {});

  return (
    <>
      <section className="pt-40 pb-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold-600 text-xs font-medium tracking-[0.25em] uppercase mb-5">Events</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brown-800 leading-tight mb-6">Come find us</h1>
          <p className="text-brown-600 text-lg leading-relaxed max-w-xl mx-auto">
            Markets, gatherings, workshops, and community events around Colorado Springs — with EVOKE Wellness, Rooted in Integration, and our partners.
          </p>
        </div>
      </section>

      <section className="pb-28 bg-cream-50">
        <div className="max-w-4xl mx-auto px-6">
          {upcoming.length === 0 ? (
            <div className="bg-white border border-cream-200 rounded-2xl p-10 text-center">
              <p className="font-serif text-2xl text-brown-800 mb-3">Nothing on the calendar just yet</p>
              <p className="text-brown-600 text-sm">
                Follow us on{" "}
                <a href="https://www.instagram.com/evoke_wellness719/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-brown-300 hover:decoration-gold-600">Instagram</a>{" "}
                for the next announcement.
              </p>
            </div>
          ) : (
            Object.entries(byMonth).map(([month, list]) => (
              <div key={month} className="mb-14 last:mb-0">
                <h2 className="text-xs font-medium tracking-[0.25em] uppercase text-gold-600 mb-6">{month}</h2>
                <div className="space-y-5">
                  {list.map((e) => (
                    <EventCard key={`${e.date}-${e.title}`} e={e} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-brown-800 mb-4">Hosting something?</h2>
          <p className="text-brown-600 leading-relaxed mb-8">
            We love partnering with local businesses and community groups. Reach out and let&apos;s plan it.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brown-700 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-brown-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
