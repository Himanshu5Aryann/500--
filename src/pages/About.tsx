import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import ContactSection from "../components/ContactSection";

export default function About() {
  return (
    <>
      {/* Studio */}
      <section className="bg-forest text-ivory">
        <div className="container-lux py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <SectionLabel label="The Studio" dark />
            <h2 className="font-serif text-5xl md:text-6xl mt-6 leading-tight">
              Refined interiors, built with intention.
            </h2>
            <p className="text-ivory/65 mt-6 leading-relaxed max-w-lg">
              The Interior & Exterior Solution is a design studio focused on creating refined, purposeful interiors
              in Batala — spanning residential, commercial, hospitality and turnkey projects,
              with a focused local service area.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-8 border-t border-ivory/15 pt-8">
              <div>
                <span className="font-serif text-5xl text-gold-light">25+</span>
                <p className="label-caps text-ivory/60 mt-2">Years</p>
              </div>
              <div>
                <span className="font-serif text-5xl text-gold-light">500+</span>
                <p className="label-caps text-ivory/60 mt-2">Projects</p>
              </div>
              <div>
                <span className="font-serif text-5xl text-gold-light">4</span>
                <p className="label-caps text-ivory/60 mt-2">Verticals</p>
              </div>
              <div>
                <span className="font-serif text-5xl text-gold-light">Batala</span>
                <p className="label-caps text-ivory/60 mt-2">Service Area</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
