import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHeading eyebrow="About E-Cell" title="Creating an entrepreneurial culture, one idea at a time." />
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          <motion.img
            initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }}
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=85"
            className="aspect-[4/3] rounded-3xl object-cover grayscale"
            alt="Team collaboration"
          />
          <div className="flex items-center">
            <div>
              <p className="text-xl leading-9 text-white/70">
                E-Cell is a student-driven platform designed to nurture entrepreneurial
                thinking and make the startup ecosystem accessible to everyone.
              </p>
              <p className="mt-7 leading-7 text-white/40">
                From workshops and competitions to founder interactions, mentorship and
                startup programs, our work is about giving ideas the environment they need
                to move from a thought on paper to a meaningful experiment in the real world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[.02]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-3 md:px-8">
          {[
            ["01", "Awareness", "Make entrepreneurship visible, understandable and approachable."],
            ["02", "Action", "Give students opportunities to build, pitch, test and iterate."],
            ["03", "Access", "Connect emerging founders with mentors, peers and ecosystem partners."]
          ].map(([num, title, text]) => (
            <div key={num}>
              <p className="text-xs text-white/25">{num}</p>
              <h3 className="mt-8 font-display text-3xl">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/40">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
