import { useEffect, useState } from 'react';
import { FOCUS_LAYERS, FocusLayer } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroStage } from './components/HeroStage';
import { AboutSection } from './components/AboutSection';
import { NeuroDawnSection } from './components/NeuroDawnSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ConnectSection } from './components/ConnectSection';
import { InquiryModal } from './components/InquiryModal';

export default function App() {
  const [activeLayer, setActiveLayer] = useState<FocusLayer>(FOCUS_LAYERS[0]);
  const [selectedToolId, setSelectedToolId] = useState<string>('ae');
  const [activeSection, setActiveSection] = useState<string>('about');
  const [inquiryOpen, setInquiryOpen] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--active-accent', activeLayer.accent);
  }, [activeLayer]);

  useEffect(() => {
    const sectionIds = ['about', 'neuro-dawn', 'skills', 'experience', 'connect'];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0.05 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleInspectTool = (toolId: string) => {
    setSelectedToolId(toolId);
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCycleAccent = () => {
    const currentIndex = FOCUS_LAYERS.findIndex((l) => l.id === activeLayer.id);
    const nextIndex = (currentIndex + 1) % FOCUS_LAYERS.length;
    setActiveLayer(FOCUS_LAYERS[nextIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        activeSection={activeSection}
        activeAccent={activeLayer.accent}
        onOpenInquiry={() => setInquiryOpen(true)}
      />

      <main className="flex-1">
        <HeroStage
          focusLayers={FOCUS_LAYERS}
          activeLayer={activeLayer}
          onSelectLayer={setActiveLayer}
          onInspectTool={handleInspectTool}
          onCycleAccent={handleCycleAccent}
        />

        <AboutSection activeAccent={activeLayer.accent} />

        <NeuroDawnSection activeAccent={activeLayer.accent} />

        <SkillsSection
          activeAccent={activeLayer.accent}
          selectedToolId={selectedToolId}
          onSelectTool={setSelectedToolId}
        />

        <ExperienceSection activeAccent={activeLayer.accent} />

        <ConnectSection
          activeAccent={activeLayer.accent}
          onOpenInquiry={() => setInquiryOpen(true)}
        />
      </main>

      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        activeAccent={activeLayer.accent}
      />
    </div>
  );
}
