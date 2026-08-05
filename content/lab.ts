export type LabConcept = {
  index: string;
  title: string;
  note: string;
};

export const labContent = {
  eyebrow: "Lab / Real-time graphics",
  heading: "Motion designed as a system.",
  body:
    "Signal Field is a self-directed study in shader-led motion, instancing, scroll direction, and render discipline. It treats experimentation as inspectable engineering rather than decoration.",
  concepts: [
    {
      index: "01",
      title: "Instanced geometry",
      note: "Repeated forms share geometry and material state instead of multiplying draw overhead.",
    },
    {
      index: "02",
      title: "Custom GLSL",
      note: "Vertex and fragment logic control the field at the level where its visual behaviour is defined.",
    },
    {
      index: "03",
      title: "GPU-led animation",
      note: "Procedural movement stays in shader space while the interface supplies direction and intent.",
    },
    {
      index: "04",
      title: "Post-processing and render control",
      note: "Atmosphere is balanced against frame cost, legibility, and explicit pipeline decisions.",
    },
  ] satisfies LabConcept[],
  action: {
    label: "Inspect Signal Field",
    href: "/work/signal-field",
  },
};
