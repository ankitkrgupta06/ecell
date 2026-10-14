export default function TeamCard({ member }) {
  return (
    <div className="group">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-white/5">
        <img src={member.image} alt={member.name} className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" />
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold">{member.name}</h3>
      <p className="mt-1 text-sm text-white/40">{member.role}</p>
    </div>
  );
}
