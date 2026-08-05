import CapabilitiesSection from "@/components/site/CapabilitiesSection";
import ContactSection from "@/components/site/ContactSection";
import HeroManifestoSection from "@/components/site/HeroManifestoSection";
import RealTimeGraphicsLabSection from "@/components/site/RealTimeGraphicsLabSection";
import SelectedWorkSection from "@/components/site/SelectedWorkSection";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { contactContent } from "@/content/contact";
import { siteContent } from "@/content/site";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteContent.name,
  jobTitle: siteContent.label,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Johannesburg",
    addressCountry: "ZA",
  },
  sameAs: contactContent.professionalLinks.map((link) => link.href),
  knowsAbout: [
    "Full-stack software engineering",
    "Next.js and React application architecture",
    "PostgreSQL and Prisma",
    "Responsive interface systems",
    "WebGL, Three.js, and GLSL",
  ],
};

export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <SiteHeader />
      <main className="min-h-screen" id="main-content">
        <HeroManifestoSection />
        <SelectedWorkSection />
        <CapabilitiesSection />
        <RealTimeGraphicsLabSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
