import type { Metadata } from "next";

import CapabilitiesSection from "@/components/site/CapabilitiesSection";
import ContactSection from "@/components/site/ContactSection";
import HeroManifestoSection from "@/components/site/HeroManifestoSection";
import RealTimeGraphicsLabSection from "@/components/site/RealTimeGraphicsLabSection";
import SelectedWorkSection from "@/components/site/SelectedWorkSection";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { contactContent } from "@/content/contact";
import { siteContent, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: siteContent.title,
  description: siteContent.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteContent.title,
    description: siteContent.description,
    type: "website",
    siteName: siteContent.name,
    url: "/",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "Ngwendu Gambu, full-stack software engineer and creative developer in Johannesburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.title,
    description: siteContent.description,
    images: ["/og-home.png"],
  },
};

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
