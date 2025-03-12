
import { HeroSection } from "@/components/HeroSection";
import { SolutionSection } from "@/components/SolutionSection";
import { TeamSection } from "@/components/TeamSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HeroSection />
      <SolutionSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default Index;
