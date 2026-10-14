export default function SectionHeading({ eyebrow, title, description, align="left" }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[.3em] text-white/35">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">{title}</h2>
      {description && <p className="mt-5 max-w-2xl text-base leading-7 text-white/45">{description}</p>}
    </div>
  );
}
