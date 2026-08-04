"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import Cursor from "@/components/Cursor";

import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-neo-bg text-neo-black font-mono overflow-x-hidden selection:bg-neo-black selection:text-neo-yellow">
      <ProgressBar />
      <Cursor />
      <ScrollReveal />
      <Navbar />
      
      <main>
        <HeroSection />
        <MarqueeBanner />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <LeadershipSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
