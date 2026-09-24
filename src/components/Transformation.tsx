import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { projects } from "../data/projects";

export default function Transformation() {
  const project = projects.find((p) => p.beforeAfter);
  if (!project || !project.beforeAfter) return null;

  return (
    <section className="bg-forest text-ivory">
      <div className="container-lux py-28 md:py-36">
        <Reveal>
          <SectionLabel label="The Transformation" dark />
          <h2 className="font-serif text-5xl md:text-7xl mt-6 max-w-3xl text-balance">
            From an unfinished shell to a <span className="italic text-gold-light">refined</span>{" "}
            living environment.
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <BeforeAfterSlider
            before={project.beforeAfter.before}
            after={project.beforeAfter.after}
            beforeAlt={`${project.title} — before renovation`}
            afterAlt={`${project.title} — after renovation`}
          />
        </Reveal>

        <Reveal delay={0.25} className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <p className="text-ivory/60 text-sm max-w-lg leading-relaxed">
            {project.beforeAfter.note}
          </p>
          <p className="label-caps text-ivory/50">
            {project.title} — {project.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
