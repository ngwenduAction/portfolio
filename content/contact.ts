export type ContactLink = {
  label: string;
  href: string;
};

export type ContactContent = {
  email: string;
  note: string;
  links: ContactLink[];
};

export const contactContent: ContactContent = {
  email: "ngwendu.action@gmail.com",
  note:
    "Open to conversations about product surfaces, motion systems, and creative technical work with room to grow into real-time direction.",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/ngwenduAction",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/ngwenduaction",
    },
    {
      label: "X",
      href: "https://x.com/ngwendu_Action",
    },
  ],
};
