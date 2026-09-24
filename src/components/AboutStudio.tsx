import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function AboutStudio() {
  return (
    <section className="bg-offwhite overflow-hidden">
      <div className="container-lux py-28 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <Reveal className="lg:col-span-7 order-2 lg:order-1">
          <div className="overflow-hidden">
            <img
              src="https://images.pexels.com/photos/6580001/pexels-photo-6580001.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800"
              alt="Interior design materials and fabric samples arranged during the design process"
              loading="lazy"
              className="w-full h-[90vw] sm:h-[50vw] lg:h-[38vw] max-h-[600px] object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-5 order-1 lg:order-2">
          <SectionLabel label="The Studio" />
          <h2 className="font-serif text-forest text-5xl md:text-6xl mt-6 leading-tight">
            A studio focused on refined, purposeful interiors.
          </h2>
          <p className="text-forest/65 mt-6 leading-relaxed max-w-md">
            The Interior & Exterior Solution is a design studio creating refined, purposeful interiors in Batala — led by founder Mr Gavrav Shekhar, and built around craftsmanship, material
            honesty and considered detail.
          </p>
          <div className="flex gap-10 mt-10">
            <div>
              <span className="font-serif text-4xl text-forest">25+</span>
              <p className="label-caps text-forest/50 mt-1">Years</p>
            </div>
            <div>
              <span className="font-serif text-4xl text-forest">500+</span>
              <p className="label-caps text-forest/50 mt-1">Projects</p>
            </div>
            <div>
              <span className="font-serif text-4xl text-forest">Pan</span>
              <p className="label-caps text-forest/50 mt-1">India</p>
            </div>
          </div>
          <Link
            to="/founder"
            className="label-caps text-forest mt-10 inline-block border-b border-forest/40 pb-1 hover:border-gold hover:text-gold transition-colors"
          >
            Meet Mr Gavrav Shekhar →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
