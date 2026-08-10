export type ContactLink = {
  label: string;
  href: string;
  accessibleLabel: string;
};

export type ContactContent = {
  email: string;
  employment: {
    eyebrow: string;
    heading: string;
    note: string;
    actionLabel: string;
    subject: string;
  };
  professionalLinks: ContactLink[];
  studio: {
    eyebrow: string;
    note: string;
    actionLabel: string;
    subject: string;
  };
};

export const contactContent: ContactContent = {
  email: "ngwendu.action@gmail.com",
  employment: {
    eyebrow: "Contact / Johannesburg",
    heading: "Looking for a full-stack engineer who can also direct the interface?",
    note:
      "I\u2019m based in Johannesburg and open to high-impact software engineering and creative-development opportunities with teams building ambitious digital products.",
    actionLabel: "Discuss a role",
    subject: "Employment opportunity for Ngwendu Gambu",
  },
  professionalLinks: [
    {
      label: "GitHub",
      href: "https://github.com/ngwenduAction",
      accessibleLabel: "View Ngwendu Gambu on GitHub",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/ngwenduaction",
      accessibleLabel: "View Ngwendu Gambu on LinkedIn",
    },
  ],
  studio: {
    eyebrow: "Studio enquiries",
    note:
      "For selected commercial website and digital-product engagements, project enquiries are handled separately through Maneno.",
    actionLabel: "Start a project through Maneno",
    subject: "Project enquiry via Maneno",
  },
};
