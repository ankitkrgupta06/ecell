import { motion } from "framer-motion";

const stats = [
  ["50+", "Events"],
  ["10K+", "Participants"],
  ["100+", "Startups reached"],
  ["25+", "Mentors"]
];

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-white/[.02]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {stats.map(([value, label], i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * .08 }}
            className="border-r border-white/10 px-5 py-10 last:border-r-0"
          >
            <p className="font-display text-4xl font-semibold md:text-5xl">{value}</p>
            <p className="mt-2 text-xs uppercase tracking-[.2em] text-white/35">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
