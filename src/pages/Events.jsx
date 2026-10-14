import SectionHeading from "../components/SectionHeading";
import EventCard from "../components/EventCard";
import { events } from "../data/siteData";

export default function Events() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHeading eyebrow="Events & Programs" title="Where ideas meet action." description="Competitions, workshops, founder sessions and experiences built to help you learn by doing." />
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {events.map((event) => <EventCard key={event.title} event={event} />)}
        </div>
      </section>
    </main>
  );
}
