import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CertificatesSection from "@/components/CertificatesSection";
import AccomplishmentsSection from "@/components/AccomplishmentsSection";
import GitHubSection from "@/components/GitHubSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollReveal, useTheme } from "@/hooks/usePortfolio";

const Index = () => {
  const { dark, toggle } = useTheme();
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar dark={dark} toggle={toggle} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <CertificatesSection />
      <AccomplishmentsSection />
      <GitHubSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
