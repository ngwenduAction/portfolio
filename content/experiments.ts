export type Experiment = {
  title: string;
  medium: string;
  status: string;
  note: string;
};

export const experiments: Experiment[] = [
  {
    title: "Timing Studies",
    medium: "Framer Motion / sequencing",
    status: "Active study",
    note: "Short studies focused on reveal cadence, section pacing, and motion that clarifies hierarchy instead of ornamenting it.",
  },
  {
    title: "Field Layouts",
    medium: "Responsive composition",
    status: "Active study",
    note: "Layout experiments exploring how emptiness, interruption, and density can become structural tools across breakpoints.",
  },
  {
    title: "Material Tests",
    medium: "Three.js / shader direction",
    status: "Early study",
    note: "Small rendering experiments that test how subtle depth and surface behavior might enter the portfolio without overwhelming the content.",
  },
];
