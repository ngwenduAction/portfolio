import ContactSection from "@/components/site/ContactSection";
import ExperimentsSection from "@/components/site/ExperimentsSection";
import HeroManifestoSection from "@/components/site/HeroManifestoSection";
import PracticeSection from "@/components/site/PracticeSection";
import RoadmapSection from "@/components/site/RoadmapSection";
import SelectedWorkSection from "@/components/site/SelectedWorkSection";
import SiteHeader from "@/components/site/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen" id="main-content">
        <HeroManifestoSection />
        <SelectedWorkSection />
        <PracticeSection />
        <ExperimentsSection />
        <RoadmapSection />
        <ContactSection />
      </main>
    </>
  );
}
