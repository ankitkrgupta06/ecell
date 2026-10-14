import SectionHeading from "../components/SectionHeading";
import { gallery } from "../data/siteData";

export default function Gallery() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHeading eyebrow="Gallery" title="A few moments from the journey." />
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {gallery.map((image, i) => (
            <img
              key={image}
              src={image}
              alt={`Event moment ${i + 1}`}
              className={`w-full rounded-3xl object-cover ${i % 3 === 0 ? "aspect-[4/3]" : "aspect-[16/10]"}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
