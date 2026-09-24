import Hero from "../components/Hero";
import CredibilityBar from "../components/CredibilityBar";
import BrandStatement from "../components/BrandStatement";
import FeaturedProjects from "../components/FeaturedProjects";
import ProjectSpotlight from "../components/ProjectSpotlight";
import Transformation from "../components/Transformation";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessTimeline from "../components/ProcessTimeline";
import AboutStudio from "../components/AboutStudio";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityBar />
      <BrandStatement />
      <FeaturedProjects />
      <ProjectSpotlight />
      <Transformation />
      <Testimonials />
      <Services />
      <WhyChooseUs />
      <ProcessTimeline />
      <AboutStudio />
      <FAQ />
      <FinalCTA />
      <ContactSection />
      <MapSection />
    </>
  );
}
