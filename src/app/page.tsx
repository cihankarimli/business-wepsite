import DigitalSolitionSection from "@/features/mainSections/DigitalSolition";
import OurServicesSection from "@/features/mainSections/OurServices";
import OurWorksSection from "@/features/mainSections/OurWorksSection";
import ReasonsSection from "@/features/mainSections/ReasonsSection";
import Testimonials from "@/features/mainSections/Testimonials";
import AskQuestionSection from "@/features/mainSections/AskQuestionSection";

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
