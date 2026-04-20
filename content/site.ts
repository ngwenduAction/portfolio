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
  heroContext: string;
  heroSignals: {
    label: string;
    value: string;
  }[];
  heroPrimaryAction: {
    label: string;
    href: string;
  };
  heroSecondaryAction: {
    label: string;
    href: string;
  };
  heroNotes: string[];
  footerNote: string;
};

export const siteContent: SiteContent = {
  name: "Negative Space",
  label: "Creative technical portfolio",
  title: "Negative Space",
  description:
    "Negative Space is a creative technical portfolio focused on frontend systems, motion design implementation, and the path toward Three.js, GLSL, and WebGL direction.",
  location: "South Africa",
  manifestoLabel: "Negative Space",
  manifestoEyebrow:
    "Frontend systems / motion implementation / real-time direction",
  manifestoTitle:
    "Negative Space is an authored portfolio about interface structure, motion behavior, and the surfaces that emerge between them.",
  manifestoBody:
    "This refinement pass keeps the architecture calm while raising the level of authorship. The portfolio now centers S\u00C9RA and Signal Field as a deliberate pair and frames the wider practice around frontend systems, motion implementation, and the path toward real-time visual direction.",
  heroContext:
    "A technical portfolio for interface systems, motion behavior, and the shift toward spatial, signal-driven surfaces.",
  heroSignals: [
    {
      label: "Current focus",
      value: "S\u00C9RA / Signal Field",
    },
    {
      label: "Practice",
      value: "Systems / Motion / Surface",
    },
    {
      label: "Direction",
      value: "Three.js / GLSL / WebGL",
    },
  ],
  heroPrimaryAction: {
    label: "View selected work",
    href: "#work",
  },
  heroSecondaryAction: {
    label: "Read the roadmap",
    href: "#roadmap",
  },
  heroNotes: [
    "S\u00C9RA and Signal Field lead the current surface.",
    "Motion is used to guide hierarchy, not to decorate it.",
    "Future work is framed as direction rather than inflated completion.",
  ],
  footerNote:
    "Negative Space is being built as a long-lived surface for selected work, active studies, and future real-time direction.",
};
