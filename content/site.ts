export type SiteContent = {
  name: string;
  label: string;
  title: string;
  description: string;
  location: string;
  manifestoLabel: string;
  manifestoEyebrow: string;
  manifestoTitle: string;
  manifestoBody: string;
  heroSignals: string[];
  heroPrimaryAction: {
    label: string;
    href: string;
  };
  heroSecondaryAction: {
    label: string;
  };
  heroCommercialPrompt: string;
  heroCommercialAction: string;
};

export const productionSiteUrl = "https://portfolio-ngwendu.vercel.app";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || productionSiteUrl
).replace(/\/$/, "");

export const siteContent: SiteContent = {
  name: "Ngwendu Gambu",
  label: "Full-Stack Software Engineer & Creative Developer",
  title: "Ngwendu Gambu — Full-Stack Engineer & Creative Developer",
  description:
    "Johannesburg-based full-stack software engineer and creative developer building robust digital products and high-performance interactive web experiences.",
  location: "Johannesburg, South Africa",
  manifestoLabel: "Full-Stack Software Engineer & Creative Developer",
  manifestoEyebrow:
    "Johannesburg, South Africa · Open to high-impact roles",
  manifestoTitle: "Ngwendu Gambu",
  manifestoBody:
    "I design and engineer robust digital products, scalable full-stack systems, and high-performance interactive experiences.",
  heroSignals: [
    "2 sold client engagements",
    "Full-stack + real-time graphics",
    "Johannesburg, RSA",
  ],
  heroPrimaryAction: {
    label: "View selected work",
    href: "/#work",
  },
  heroSecondaryAction: {
    label: "Contact Ngwendu",
  },
  heroCommercialPrompt: "Looking for a studio partner?",
  heroCommercialAction: "Maneno handles project enquiries.",
};
