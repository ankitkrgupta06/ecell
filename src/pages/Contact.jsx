import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHeading eyebrow="Contact" title="Let's build something together." description="Have a collaboration idea, sponsorship proposal or simply want to know more? Drop us a message." />

        <div className="mt-16 grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            {[
              [Mail, "Email", "ecell@example.com"],
              [Phone, "Phone", "+91 00000 00000"],
              [MapPin, "Location", "Entrepreneurship Cell, Campus"]
            ].map(([Icon, title, text]) => (
              <div key={title} className="mb-8 flex gap-4">
                <Icon size={20} className="mt-1 text-white/50" />
                <div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-sm text-white/40">{text}</p></div>
              </div>
            ))}
          </div>

          <form onSubmit={submit} className="space-y-5 md:col-span-3">
            <input required placeholder="Your name" className="w-full rounded-2xl border border-white/10 bg-white/[.03] px-5 py-4 outline-none focus:border-white/40" />
            <input required type="email" placeholder="Email address" className="w-full rounded-2xl border border-white/10 bg-white/[.03] px-5 py-4 outline-none focus:border-white/40" />
            <input placeholder="Subject" className="w-full rounded-2xl border border-white/10 bg-white/[.03] px-5 py-4 outline-none focus:border-white/40" />
            <textarea required rows="7" placeholder="Tell us what's on your mind..." className="w-full resize-none rounded-2xl border border-white/10 bg-white/[.03] px-5 py-4 outline-none focus:border-white/40" />
            <button className="flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black">
              {sent ? "Message queued" : "Send message"} <ArrowUpRight size={16} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
