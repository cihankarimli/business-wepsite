import DigitalSolitionSection from "@/feutures/main/sections/DigitalSolition";
import OurServicesSection from "@/feutures/main/sections/OurServices";
import OurWorksSection from "@/feutures/main/sections/OurWorksSection";
import ReasonsSection from "@/feutures/main/sections/ReasonsSection";
import Testimonials from "@/feutures/main/sections/Testimonials";

export default function Home() {
  return (
    <>
      <DigitalSolitionSection />
      <ReasonsSection />
      <OurServicesSection />
      <OurWorksSection />
      <Testimonials />
    </>
  );
}
