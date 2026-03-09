import HeroSection from "../components/sections/HeroSection";
import CredibilityStrip from "../components/sections/CredibilityStrip";
import ProblemSection from "../components/sections/ProblemSection";
import ServicesSection from "../components/sections/ServicesSection";
import CaseStudySection from "../components/sections/CaseStudySection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import LeadCaptureSection from "../components/sections/LeadCaptureSection";
import FooterSection from "../components/sections/FooterSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CredibilityStrip />
      <ProblemSection />
      <ServicesSection />
      <CaseStudySection />
      <TestimonialsSection />
      <LeadCaptureSection />
      <FooterSection />
    </div>
  );
}