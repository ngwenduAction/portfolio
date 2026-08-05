export type CapabilityEvidence = {
  project: string;
  href: string;
  context: "Commercial evidence" | "Self-directed evidence";
};

export type CapabilityArea = {
  index: string;
  title: string;
  summary: string;
  topics: string[];
  evidence: CapabilityEvidence[];
};

export const capabilityAreas: CapabilityArea[] = [
  {
    index: "01",
    title: "Product and platform engineering",
    summary:
      "Data models, server behaviour, application structure, deployment, and maintainable product foundations.",
    topics: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "API and server architecture",
      "AWS RDS",
      "deployment configuration",
    ],
    evidence: [
      {
        project: "KOI",
        href: "/work/koi",
        context: "Commercial evidence",
      },
    ],
  },
  {
    index: "02",
    title: "Interface systems",
    summary:
      "Interfaces designed as coherent systems across hierarchy, responsive behaviour, accessibility, and purposeful motion.",
    topics: [
      "responsive component architecture",
      "design systems",
      "accessibility",
      "performance",
      "interaction design",
      "Framer Motion",
      "conversion-focused UX",
    ],
    evidence: [
      {
        project: "KOI",
        href: "/work/koi",
        context: "Commercial evidence",
      },
      {
        project: "moBikes",
        href: "/work/mobikes",
        context: "Commercial evidence",
      },
      {
        project: "S\u00c9RA",
        href: "/work/sera",
        context: "Self-directed evidence",
      },
    ],
  },
  {
    index: "03",
    title: "Real-time graphics",
    summary:
      "Shader-led visual systems engineered with explicit render, memory, and interaction constraints.",
    topics: [
      "Three.js",
      "WebGL",
      "GLSL",
      "instancing",
      "shader animation",
      "post-processing",
      "GPU performance discipline",
    ],
    evidence: [
      {
        project: "Signal Field",
        href: "/work/signal-field",
        context: "Self-directed evidence",
      },
    ],
  },
];

export const workingPrinciples = [
  "Architecture before ornament",
  "Interfaces as systems",
  "Performance as a design constraint",
  "Accessibility as implementation quality",
  "Motion with communicative purpose",
];
