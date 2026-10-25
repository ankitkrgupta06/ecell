import SectionHeading from "../components/SectionHeading";
import TeamCard from "../components/TeamCard";
import { team } from "../data/siteData";

export default function Team() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHeading
          eyebrow="The people"
          title="The team behind the ideas."
          description="A multidisciplinary student team working across events, startups, marketing, design, media and technology."
        />
        <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-12 md:mx-auto md:max-w-2xl md:gap-x-6">
          {team.slice(0, 2).map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6">
          {team.slice(2, 6).map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
}
