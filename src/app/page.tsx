import DigitalSolitionSection from "@/feutures/mainSections/DigitalSolition";
import OurServicesSection from "@/feutures/mainSections/OurServices";
import OurWorksSection from "@/feutures/mainSections/OurWorksSection";
import ReasonsSection from "@/feutures/mainSections/ReasonsSection";
import Testimonials from "@/feutures/mainSections/Testimonials";
import AskQuestionSection from "@/feutures/mainSections/AskQuestionSection";

export default function Home() {
  return (
    <>
      <DigitalSolitionSection />
      <ReasonsSection />
      <OurServicesSection />
      <OurWorksSection />
      <Testimonials />
      <AskQuestionSection />
    </>
  );
}
