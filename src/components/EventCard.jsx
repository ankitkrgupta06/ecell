import { ArrowUpRight } from "lucide-react";

export default function EventCard({ event }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[.025]">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={event.image} alt={event.title} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
      </div>
      <div className="p-6">
        <div className="flex justify-between text-xs uppercase tracking-[.2em] text-white/35">
          <span>{event.tag}</span><span>{event.year}</span>
        </div>
        <h3 className="mt-4 font-display text-2xl font-semibold">{event.title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/45">{event.description}</p>
        <button className="mt-6 flex items-center gap-2 text-sm hover:gap-3 transition-all">
          Explore <ArrowUpRight size={16} />
        </button>
      </div>
    </article>
  );
}
