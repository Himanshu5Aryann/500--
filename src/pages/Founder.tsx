import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import ContactSection from "../components/ContactSection";

export default function Founder() {
  return (
    <>
      <section className="bg-ivory pt-40 md:pt-48">
        <div className="container-lux grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end pb-16">
          <Reveal className="lg:col-span-7">
            <SectionLabel label="Founder &amp; CEO" />
            <h1 className="font-serif text-forest text-6xl md:text-8xl mt-6 leading-[1.02]">
              Mr Gavrav Shekhar
            </h1>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="text-forest/65 leading-relaxed text-lg">
              Founder &amp; CEO of The Interior & Exterior Solution — a design studio creating refined interiors
              in Batala and surrounding areas.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-lux grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-24 md:pb-32">
          <div className="lg:col-span-12 flex flex-col gap-14 max-w-5xl">
            <Reveal>
              <span className="label-caps text-gold">Founder Philosophy</span>
              <p className="font-serif italic text-3xl md:text-4xl text-forest leading-snug mt-5 text-balance">
                "I believe every space holds a story waiting to be told. Our work begins where
                others stop — in the details that transform a house into a home, an office into a
                legacy."
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <span className="label-caps text-gold">Approach to Design</span>
              <p className="text-forest/70 leading-relaxed mt-5 max-w-xl">
                Mr Gavrav approaches every project as a study of how people actually live and work
                within a space — treating material, proportion, light and finish as inseparable
                parts of the architecture rather than decoration applied at the end.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <span className="label-caps text-gold">Vision for The Interior & Exterior Solution</span>
              <p className="text-forest/70 leading-relaxed mt-5 max-w-xl">
                Under his direction, The Interior & Exterior Solution is built around a simple standard: every
                project — residential, commercial, hospitality or turnkey — should be executed
                with the same level of care and attention to detail, regardless of scale.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="flex gap-12 pt-4 border-t border-forest/10">
              <div>
                <span className="font-serif text-4xl text-forest">25+</span>
                <p className="label-caps text-forest/50 mt-1">Years of Expertise</p>
              </div>
              <div>
                <span className="font-serif text-4xl text-forest">500+</span>
                <p className="label-caps text-forest/50 mt-1">Projects Delivered</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-forest text-ivory">
        <div className="container-lux py-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="font-serif text-3xl">Explore the studio behind the work.</p>
          <Link
            to="/about"
            className="label-caps self-start sm:self-auto border-b border-gold-light/60 pb-1 text-gold-light hover:border-ivory hover:text-ivory transition-colors"
          >
            Visit the Studio →
          </Link>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
