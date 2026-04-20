export type PracticeArea = {
  title: string;
  summary: string;
  points: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    title: "Frontend Systems",
    summary:
      "Designing and implementing interface foundations that stay legible as products evolve in density, scale, and complexity.",
    points: [
      "component architecture and naming discipline",
      "layout rhythm, spacing, and interface hierarchy",
      "systems that support iteration without visual drift",
    ],
  },
  {
    title: "Motion Design Implementation",
    summary:
      "Translating motion direction into dependable frontend behavior using timing, sequencing, and interaction states with intent.",
    points: [
      "Framer Motion and GSAP implementation strategy",
      "timing systems that preserve clarity instead of stealing it",
      "interaction choreography tied to structure and narrative",
    ],
  },
  {
    title: "Three.js / GLSL / WebGL Direction",
    summary:
      "Building toward more authored real-time surfaces where depth, material, and signal can become part of the portfolio language.",
    points: [
      "Three.js-ready information architecture",
      "shader and field studies in controlled increments",
      "visual direction that stays grounded in product thinking",
    ],
  },
];
