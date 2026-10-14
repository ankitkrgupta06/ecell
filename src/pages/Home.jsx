import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Lightbulb, Rocket, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Stats from "../components/Stats";
import SectionHeading from "../components/SectionHeading";
import EventCard from "../components/EventCard";
import { events, gallery } from "../data/siteData";

export default function Home() {
  return (
    <main>
      <section className="grid-bg relative flex min-h-screen items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,.09),transparent_30%)]" />
        <div className="mx-auto w-full max-w-7xl px-5 py-24 md:px-8">
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
            <p className="mb-7 text-xs uppercase tracking-[.35em] text-white/40">Entrepreneurship Cell</p>
            <h1 className="font-display text-[16vw] font-semibold leading-[.78] tracking-[-.07em] md:text-[11vw]">
              IDEATE.<br />
              <span className="text-outline">INNOVATE.</span><br />
              INCUBATE.
            </h1>
            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <p className="max-w-lg text-base leading-7 text-white/45">
                A student-led ecosystem for curious minds, ambitious builders and
                ideas that deserve to become something bigger.
              </p>
              <Link to="/about" className="flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">
                Discover E-Cell <ArrowUpRight size={17} />
              </Link>
            </div>
          </motion.div>

          <div className="mt-20 flex items-center gap-3 text-xs uppercase tracking-[.25em] text-white/30">
            <ArrowDown size={15} /> Scroll to explore
          </div>
        </div>
      </section>

      <Stats />

      <section className="mx-auto max-w-7xl px-5 py-28 md:px-8">
        <SectionHeading
          eyebrow="Who we are"
          title="Ideas are only the beginning."
          description="We create spaces where students can question the obvious, meet people who have built before them, test their ideas and turn curiosity into action."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            [Lightbulb, "Think", "Find problems worth solving and turn observations into opportunities."],
            [Rocket, "Build", "Experiment fast, learn from failure and transform ideas into tangible ventures."],
            [Users, "Connect", "Meet founders, investors, mentors and peers who expand your perspective."]
          ].map(([Icon, title, text]) => (
            <div key={title} className="rounded-3xl border border-white/10 p-7 hover:bg-white/[.03]">
              <Icon size={27} />
              <h3 className="mt-16 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/40">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/[.02] py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="What's happening" title="Build. Compete. Connect." />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {events.slice(0, 4).map((event) => <EventCard key={event.title} event={event} />)}
          </div>
          <Link to="/events" className="mt-10 flex w-fit items-center gap-2 border-b border-white/30 pb-2 text-sm">
            View all events <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <section className="overflow-hidden py-6">
        <div className="marquee flex w-max">
          {[...Array(2)].flatMap((_, j) =>
            ["IDEATE", "INNOVATE", "INCUBATE", "BUILD", "CREATE", "IMPACT"].map((word, i) => (
              <span key={`${j}-${i}`} className="mx-5 font-display text-[12vw] font-bold tracking-[-.07em] text-white/[.06]">
                {word}.
              </span>
            ))
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-28 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Moments" title="Witness the energy." />
          <Link to="/gallery" className="flex items-center gap-2 text-sm text-white/60 hover:text-white">
            Open gallery <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.map((image, i) => (
            <img key={image} src={image} alt={`Gallery ${i + 1}`} className={`h-64 w-full rounded-2xl object-cover grayscale hover:grayscale-0 transition ${i === 1 ? "md:h-80" : ""}`} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-32 text-center md:px-8">
        <p className="text-xs uppercase tracking-[.3em] text-white/30">Your idea starts here</p>
        <h2 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-semibold tracking-tight md:text-8xl">
          Make something<br /><span className="text-white/30">worth remembering.</span>
        </h2>
        <Link to="/contact" className="mx-auto mt-10 flex w-fit items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black">
          Get in touch <ArrowUpRight size={16} />
        </Link>
      </section>
    </main>
  );
}
