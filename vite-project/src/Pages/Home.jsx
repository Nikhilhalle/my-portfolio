import { Navbar } from "../Components.jsx/Navbar";
import { ThemeToggle } from "../Components.jsx/ThemeToggle";
import { StarBackground } from "@/Components.jsx/StarBackground";
import { HeroSection } from "../Components.jsx/HeroSection";
import { AboutSection } from "../Components.jsx/AboutSection";
import { SkillsSection } from "../Components.jsx/SkilsSection";
import { ProjectsSection } from "../Components.jsx/ProjectSection";
import { ContactSection } from "../Components.jsx/ContactSection";
import { Footer } from "../Components.jsx/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
