export type Event = {
  title: string;
  date: string; // YYYY-MM-DD
  time: string | null;
  venue: string;
  address: string;
  city: string;
  description: string;
  url?: string;
};

export const events: Event[] = [
  {
    title: "Recovery Event at Acacia Park",
    date: "2026-09-12",
    time: "10:00 AM – 2:00 PM",
    venue: "Acacia Park",
    address: "115 E Platte Ave",
    city: "Colorado Springs, CO",
    description:
      "Find EVOKE Wellness and Rooted in Integration at the Colorado Springs recovery community event. Come say hello, browse herbal products, and learn about our integrated approach to healing.",
  },
  {
    title: "An Evening at HOPE House with Caitspace",
    date: "2026-09-18",
    time: "6:00 PM",
    venue: "HOPE House Colorado Springs",
    address: "5440 N Union Blvd",
    city: "Colorado Springs, CO",
    description:
      "EVOKE Wellness joins Caitlin of Caitspace for an evening of wellness and creative healing at HOPE House.",
  },
  {
    title: "Painting Night with Caitspace",
    date: "2026-09-23",
    time: null,
    venue: "The Stache Spot",
    address: "605 W Colorado Ave",
    city: "Colorado Springs, CO",
    description:
      "A therapeutic painting session led by Caitspace, hosted with EVOKE Wellness. No art experience needed — the process is the medicine.",
  },
].sort((a, b) => a.date.localeCompare(b.date));

function todayMountain(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "America/Denver" });
}

export function getUpcomingEvents(): Event[] {
  const today = todayMountain();
  return events.filter((e) => e.date >= today);
}

export function formatEventDate(date: string, opts: { weekday?: boolean } = {}): string {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    ...(opts.weekday ? { weekday: "long" } : {}),
    month: "long",
    day: "numeric",
  });
}

export function formatMonth(date: string): string {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function mapsUrl(e: Event): string {
  return `https://maps.google.com/?q=${encodeURIComponent(`${e.address}, ${e.city}`)}`;
}
