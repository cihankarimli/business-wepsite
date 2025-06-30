import DigitalSolitionSection from "@/feutures/header/ui/sections/DigitalSolition";
import OurServicesSection from "@/feutures/header/ui/sections/OurServices";
import OurWorksSection from "@/feutures/header/ui/sections/OurWorksSection";
import ReasonsSection from "@/feutures/header/ui/sections/ReasonsSection";
import Testimonials from "@/feutures/header/ui/sections/Testimonials";
import Image from "next/image";

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
