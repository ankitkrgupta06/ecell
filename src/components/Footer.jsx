import { ArrowUpRight, Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl font-bold">E·Cell.</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/45">
              Building a culture where ideas are encouraged, experiments are celebrated,
              and ambitious founders find the ecosystem they need to grow.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[.25em] text-white/35">Explore</p>
            <div className="grid grid-cols-2 gap-3 text-sm text-white/55">
              <Link to="/about" className="hover:text-white">About</Link>
              <Link to="/events" className="hover:text-white">Events</Link>
              <Link to="/gallery" className="hover:text-white">Gallery</Link>
              <Link to="/team" className="hover:text-white">Team</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[.25em] text-white/35">Connect</p>
            <div className="flex gap-3">
              <a href="#" className="rounded-full border border-white/15 p-3 hover:bg-white hover:text-black"><Instagram size={18}/></a>
              <a href="#" className="rounded-full border border-white/15 p-3 hover:bg-white hover:text-black"><Linkedin size={18}/></a>
              <a href="#" className="rounded-full border border-white/15 p-3 hover:bg-white hover:text-black"><Youtube size={18}/></a>
              <a href="mailto:ecell@example.com" className="rounded-full border border-white/15 p-3 hover:bg-white hover:text-black"><Mail size={18}/></a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/30 md:flex-row">
          <p>© 2026 Entrepreneurship Cell. All rights reserved.</p>
          <p>Ideate · Innovate · Incubate</p>
        </div>
      </div>
    </footer>
  );
}
