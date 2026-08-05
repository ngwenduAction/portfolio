export type FeaturedWorkSlug = "sera" | "signal-field" | "moBikes" | "koi";

export type WorkLink = {
  label: string;
  href: string;
};

export type WorkProjectLinks = {
  caseStudy: {
    href: string;
  };
  liveSite: {
    href: string;
  };
  source?: {
    href: string;
  };
};

export type WorkDecision = {
  title: string;
  body: string;
};

export type WorkSignal = {
  label: string;
  value: string;
};

export type WorkMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type WorkCaseStudy = {
  introLabel: string;
  introSummary: string;
  heroSignals: WorkSignal[];
  roleNotes: string[];
  systemsHeading: string;
  systemsIntro: string;
  systemsDecisions: WorkDecision[];
  implementationHeading: string;
  implementationIntro: string;
  implementationNotes: WorkDecision[];
  outcomeHeading: string;
  outcomeIntro: string;
  outcomePoints: string[];
  supportLinks: WorkLink[];
  closingNote: string;
};

export type FeaturedWork = {
  slug: FeaturedWorkSlug;
  homepageTier: "commercial" | "lab";
  homepageOrder: number;
  index: string;
  title: string;
  path: string;
  label: string;
  classification: string;
  evidence: string;
  year: string;
  thesis: string;
  summary: string;
  role: string;
  focus: string[];
  systems: string;
  motion: string;
  rendering: string;
  status: string;
  detailIntro: string;
  media: WorkMedia;
  links: WorkProjectLinks;
  caseStudy: WorkCaseStudy;
};

export const featuredWork: FeaturedWork[] = [
  {
    slug: "sera",
    homepageTier: "lab",
    homepageOrder: 4,
    index: "04",
    title: "S\u00C9RA",
    path: "/work/sera",
    label: "Creative study",
    classification: "CREATIVE DIRECTION / MOTION STUDY",
    evidence: "Self-directed · editorial systems / responsive motion",
    year: "Current chapter",
    thesis: "Structure held in tension with restraint.",
    summary:
      "A self-directed skincare microsite study using editorial hierarchy, responsive media, and restrained motion to hold a premium interface surface.",
    role: "Interface system direction / frontend implementation",
    focus: [
      "layout rhythm and hierarchy",
      "component structure and pacing",
      "motion restraint with clear intent",
    ],
    systems:
      "The project represents the side of the practice that cares about compositional rigor, reusable patterns, and the way a frontend system feels when hierarchy and spacing are doing real work.",
    motion:
      "Motion is treated as a compositional layer: transitions should support reading order, reveal density gradually, and preserve clarity under interaction.",
    rendering:
      "The first-pass portfolio frames S\u00C9RA as a DOM-first system surface with room to absorb richer rendering layers later if they serve the work.",
    status: "Self-directed creative study",
    detailIntro:
      "This scaffold keeps the route, language, and information shape in place while the fuller project documentation is still being written.",
    media: {
      src: "/og-sera.png",
      alt: "SÉRA project preview showing the editorial skincare microsite on desktop and mobile",
      width: 1477,
      height: 704,
    },
    links: {
      caseStudy: {
        href: "/work/sera",
      },
      liveSite: {
        href: "https://sera-skincare-microsite.vercel.app",
      },
    },
    caseStudy: {
      introLabel: "Editorial systems",
      introSummary:
        "S\u00C9RA is presented as a frontend case study about composition under pressure: dense content, responsive media, and motion that must protect readability rather than compete with it.",
      heroSignals: [
        { label: "Primary lens", value: "Editorial frontend systems" },
        { label: "Motion stance", value: "Restraint / pacing / sequencing" },
        { label: "Surface type", value: "DOM-first / responsive media" },
      ],
      roleNotes: [
        "Defining the structural rules that keep typography, media, and spacing coherent across breakpoints.",
        "Implementing motion as a readability tool instead of an ambient effect layer.",
        "Balancing visual polish with a system that can absorb new content without breaking tone.",
      ],
      systemsHeading: "Key systems and structural decisions",
      systemsIntro:
        "The page is strongest when treated as an editorial system rather than a collection of styled components. The core work is in the rules: hierarchy, spacing, responsive media, and how motion enters without weakening the reading experience.",
      systemsDecisions: [
        {
          title: "Typography-led hierarchy",
          body: "Headings, supporting text, and metadata are arranged to preserve a clear reading order even when the layout stretches or compresses. The goal is not maximal visual activity but stable hierarchy under change.",
        },
        {
          title: "Responsive media handling",
          body: "Media surfaces are treated as part of the composition rather than as decorative inserts. Their sizing, cropping, and spacing need to remain precise so the page feels authored on both large and constrained screens.",
        },
        {
          title: "Motion as editorial pacing",
          body: "Motion decisions focus on reveal timing, section sequencing, and hover behavior that clarifies state. The animation layer is there to support structure, not to announce itself as an effect.",
        },
      ],
      implementationHeading: "Implementation notes",
      implementationIntro:
        "The implementation work behind S\u00C9RA is mostly about polish through discipline: component boundaries, predictable spacing logic, careful media treatment, and enough motion structure to make the page feel deliberate without turning it into a demo.",
      implementationNotes: [
        {
          title: "Component boundaries",
          body: "Layout and content sections should stay modular so new editorial blocks can be introduced without collapsing the overall rhythm. The system needs to hold up as the case study grows in density.",
        },
        {
          title: "Responsive polish",
          body: "Spacing, line lengths, and panel proportions are tuned so the page still feels authored on smaller screens. The quality bar is not only visual on desktop; it is in how gracefully the hierarchy compresses.",
        },
        {
          title: "Media and state awareness",
          body: "Small interaction states and media transitions are used carefully so the page remains calm. Where content is doing enough work already, the interface should stay quiet.",
        },
      ],
      outcomeHeading: "Outcome / reflection",
      outcomeIntro:
        "S\u00C9RA clarifies what Negative Space looks like when the work is grounded in editorial frontend systems: typography, media, motion, and spacing all behaving as parts of one disciplined surface.",
      outcomePoints: [
        "The project reinforces that polish is usually structural before it is decorative.",
        "It shows how restrained motion can strengthen hierarchy instead of competing with it.",
        "It establishes a benchmark for responsive media handling and authored frontend finish inside the portfolio.",
      ],
      supportLinks: [
        { label: "Back to selected work", href: "/#work" },
        { label: "Open contact", href: "/#contact" },
        { label: "Email directly", href: "mailto:ngwendu.action@gmail.com" },
      ],
      closingNote:
        "S\u00C9RA is the clearest expression of Negative Space as an editorial frontend practice: measured, structural, and precise about how interface polish is actually achieved.",
    },
  },
  {
    slug: "signal-field",
    homepageTier: "lab",
    homepageOrder: 3,
    index: "03",
    title: "Signal Field",
    path: "/work/signal-field",
    label: "Technical experiment",
    classification: "REAL-TIME GRAPHICS EXPERIMENT",
    evidence: "Self-directed · Three.js / GLSL / instancing / GPU animation",
    year: "Expanding surface",
    thesis: "Signal, drift, and atmosphere under system control.",
    summary:
      "A self-directed real-time graphics experiment built around shader logic, instancing, and GPU-led procedural motion.",
    role: "Motion direction / interaction design / frontend implementation",
    focus: [
      "responsive motion behavior",
      "field-based visual direction",
      "bridges toward WebGL and shader work",
    ],
    systems:
      "The project is positioned as a bridge between robust interface structure and more expressive spatial behavior, where systems thinking still guides the visual layer.",
    motion:
      "Motion focuses on signal, drift, reveal, and timing relationships rather than decorative transitions. The direction should feel measured, not noisy.",
    rendering:
      "Signal Field is where the portfolio begins making room for Three.js, GLSL, and WebGL-backed surfaces without pretending those layers are already the whole story.",
    status: "Self-directed technical experiment",
    detailIntro:
      "The current page is intentionally honest: it establishes the project language now and leaves room for deeper technical documentation later.",
    media: {
      src: "/og-signal-field.png",
      alt: "Signal Field project preview showing a luminous blue procedural particle field",
      width: 1486,
      height: 704,
    },
    links: {
      caseStudy: {
        href: "/work/signal-field",
      },
      liveSite: {
        href: "https://signal-field.vercel.app",
      },
    },
    caseStudy: {
      introLabel: "Real-time direction",
      introSummary:
        "Signal Field is framed as the more technical edge of the portfolio: a case study in signal-driven motion, procedural behavior, and the decisions required when the rendering layer starts to matter as much as the layout.",
      heroSignals: [
        { label: "Primary lens", value: "GPU-first motion direction" },
        { label: "Technical focus", value: "Shader logic / instancing" },
        { label: "Surface type", value: "Procedural / field-driven" },
      ],
      roleNotes: [
        "Shaping motion behavior around signal, accumulation, and response instead of traditional UI transitions.",
        "Thinking about rendering constraints early so the visual direction stays grounded in implementation reality.",
        "Building a bridge between interface composition and more procedural, real-time systems.",
      ],
      systemsHeading: "Rendering and motion decisions",
      systemsIntro:
        "Signal Field needs to be read less like a page composition exercise and more like an implementation-aware rendering surface. The key decisions live in the motion logic, the procedural rules, and the pipeline boundaries that keep the work stable.",
      systemsDecisions: [
        {
          title: "Shader logic with a clear visual job",
          body: "Any shader layer should exist to produce legible signal behavior: movement, accumulation, interference, or depth cues that advance the project language. The rendering layer should not become abstract spectacle without purpose.",
        },
        {
          title: "Instancing and repetition with control",
          body: "Where repetition is needed, instancing thinking matters. The project direction leans toward repeated units whose behavior can vary through controlled inputs rather than through manual one-off animation.",
        },
        {
          title: "Procedural motion over timeline-heavy choreography",
          body: "The movement logic should feel field-driven and responsive rather than fully storyboarded. That means thinking in systems, thresholds, and relationships, not only in fixed keyframe sequences.",
        },
      ],
      implementationHeading: "Pipeline and implementation notes",
      implementationIntro:
        "The implementation value in Signal Field comes from respecting the rendering pipeline. Technical ambition only helps if performance, fallback behavior, and visual coherence are all being managed at the same time.",
      implementationNotes: [
        {
          title: "GPU-first animation awareness",
          body: "The direction prioritizes work that can stay close to the GPU where it makes sense, reducing the need for DOM-heavy animation when the visual language is inherently field-based or procedural.",
        },
        {
          title: "Budgeting and system boundaries",
          body: "Not every surface needs to be shader-driven. Part of the implementation discipline is deciding where real-time rendering adds value and where simpler layers should remain responsible for layout and supporting information.",
        },
        {
          title: "Readable fallback thinking",
          body: "Even when the rendering layer becomes more complex, the project still needs a stable textual and structural core. The portfolio direction only works if the case study remains readable without requiring spectacle.",
        },
      ],
      outcomeHeading: "Outcome / reflection",
      outcomeIntro:
        "Signal Field marks a different threshold in the portfolio: the point where motion and rendering logic become part of the conceptual frame, not just the visual finish.",
      outcomePoints: [
        "The project makes the portfolio more explicit about shader logic, instancing, and procedural behavior as design tools.",
        "It strengthens the bridge between interface composition and GPU-aware animation thinking.",
        "It sets a direction for future work where rendering decisions are treated as core system choices rather than optional embellishment.",
      ],
      supportLinks: [
        { label: "Back to selected work", href: "/#work" },
        { label: "Open contact", href: "/#contact" },
        { label: "Email directly", href: "mailto:ngwendu.action@gmail.com" },
      ],
      closingNote:
        "Signal Field marks the point where Negative Space stops being only about interface composition and starts speaking more clearly in rendering systems, procedural motion, and real-time surface logic.",
    },
  },
  {
    slug: "moBikes",
    homepageTier: "commercial",
    homepageOrder: 2,
    index: "02",
    title: "moBikes",
    path: "/work/mobikes",
    label: "Client delivery",
    classification: "COMMERCIAL WEBSITE",
    evidence: "Sold and delivered",
    year: "Rent-to-own mobility website",
    thesis:
      "Rent-to-own mobility explained through a clear path from the Hero Eco 150 offer to application.",
    summary:
      "My contribution covered content structure, UX simplification, visual direction, responsive frontend implementation, and direct application and WhatsApp pathways.",
    role: "Website design and front-end development",
    focus: [
      "conversion-focused information clarity",
      "responsive business-facing UI",
      "iteration through client feedback",
    ],
    systems:
      "The project is about simplifying a real offer into a clearer information architecture: presenting Hero motorcycles first, reducing explanatory drag, and keeping supporting products visible without weakening the main conversion path.",
    motion:
      "Motion remains minimal and business-readable. The emphasis is on hierarchy, button clarity, and transitions that support scanning rather than competing with the primary offer.",
    rendering:
      "moBikes is a practical HTML, CSS, and JavaScript build prepared for hosting, WhatsApp contact, and a live Google Form application flow.",
    status: "Delivered commercial website",
    detailIntro:
      "moBikes shows Negative Space in a client-facing mode: translating a real business model into a shorter, clearer, and more trustworthy responsive surface without losing polish.",
    media: {
      src: "/work-mobikes-home.jpg",
      alt: "moBikes live homepage presenting its rent-to-own mobility offer",
      width: 1600,
      height: 900,
    },
    links: {
      caseStudy: {
        href: "/work/mobikes",
      },
      liveSite: {
        href: "https://www.mobikes.co.za/",
      },
    },
    caseStudy: {
      introLabel: "Client-facing execution",
      introSummary:
        "moBikes is framed as a conversion-focused website for a South African mobility business: a project about clarifying the rent-to-own offer, strengthening trust, and guiding users toward application with less friction.",
      heroSignals: [
        {
          label: "Primary offer",
          value: "Hero Eco 150 / rent-to-own / ZAR 800 per week",
        },
        {
          label: "Support included",
          value: "Service / insurance / tracking",
        },
        {
          label: "Client context",
          value: "moBikes / Protea Glen, Soweto, South Africa",
        },
      ],
      roleNotes: [
        "Structuring the content around the business model so the homepage explains the main offer quickly and credibly.",
        "Translating client feedback into a shorter and cleaner page flow without losing essential supporting information.",
        "Refining the visual direction, CTA hierarchy, and responsive layout so the site feels trustworthy on both desktop and mobile.",
      ],
      systemsHeading: "Key systems and conversion decisions",
      systemsIntro:
        "The value in moBikes comes from practical clarity. The site had to communicate financing, product priority, supporting services, and contact actions without turning into a long explanatory page that diluted intent.",
      systemsDecisions: [
        {
          title: "Offer-first homepage structure",
          body: "The site is organized around the Hero Eco 150 rent-to-own offer first, so users meet the core proposition immediately. Supporting services stay visible, but they are arranged to reinforce the main decision rather than compete with it.",
        },
        {
          title: "Trust-building visual hierarchy",
          body: "A cleaner white, black, and blue palette helps the brand feel more established, while card layering, button treatment, and structured spacing make the interface read as professional and reliable.",
        },
        {
          title: "Feedback-driven simplification",
          body: "Sections were reduced, long intros were cut back, duplicate emphasis blocks were removed, and navigation was simplified. The final structure works because it respects attention instead of over-explaining the service.",
        },
      ],
      implementationHeading: "Implementation notes",
      implementationIntro:
        "Implementation quality here is measured by directness and readiness: responsive layout behavior, clear CTA wiring, careful asset handling, and a build that can move cleanly from preview to the final production domain.",
      implementationNotes: [
        {
          title: "Responsive business-facing layout",
          body: "The interface is tuned to stay legible and conversion-friendly on mobile, where many users are likely to encounter the site first. Layout compression, button placement, and offer framing all had to remain stable at smaller sizes.",
        },
        {
          title: "CTA and contact integration",
          body: "Application actions were connected directly to the client's Google Form, while WhatsApp contact access remained easy to find. The goal was a simpler route from interest to action, not a decorative interaction layer.",
        },
        {
          title: "Brand adaptation and asset handling",
          body: "The visual system was adjusted around the client's blue, black, and white preferences, with careful handling of the real logo and white-background assets so the site still felt premium and cohesive.",
        },
      ],
      outcomeHeading: "Outcome / reflection",
      outcomeIntro:
        "moBikes demonstrates how Negative Space operates when the work is accountable to a real business outcome: stronger trust, a clearer offer, and a more direct path to application.",
      outcomePoints: [
        "The project proves client-facing delivery with practical frontend execution instead of purely conceptual framing.",
        "It shows an ability to simplify information architecture around business goals and evolving feedback.",
        "It adds a stronger example of responsive, trust-building UI for a real service-led website.",
      ],
      supportLinks: [
        { label: "Back to selected work", href: "/#work" },
        { label: "Open contact", href: "/#contact" },
        { label: "Email directly", href: "mailto:ngwendu.action@gmail.com" },
      ],
      closingNote:
        "moBikes broadens the portfolio by proving that polished frontend thinking can stay practical: clear structure, direct conversion paths, responsive discipline, and iteration in service of a real client outcome.",
    },
  },
  {
    slug: "koi",
    homepageTier: "commercial",
    homepageOrder: 1,
    index: "01",
    title: "KOI",
    path: "/work/koi",
    label: "Active client work",
    classification: "ACTIVE CLIENT PLATFORM",
    evidence: "Sold commercial engagement · ongoing development",
    year: "Editorial-grade full-stack platform",
    thesis:
      "Lessons, membership, giving, visits, and editorial content held in one coherent digital platform.",
    summary:
      "My contribution spans database schema design, server-side logic, deployment configuration, and responsive interface engineering.",
    role: "Full-Stack Software Engineering & Architecture",
    focus: [
      "relational database and schema design",
      "server-side architecture and deployment pipelines",
      "editorial-grade frontend precision under system constraints",
    ],
    systems:
      "KOI is about marrying commanding frontend structure with backend rigor: relational mapping, server-rendered routing, environment discipline, and a UI system precise enough to carry a premium editorial identity without drifting from the underlying architecture.",
    motion:
      "Motion stays subordinate to authority and structure. The emphasis is on exact layout behavior, premium transitions, and a frontend that feels composed because the underlying system is stable.",
    rendering:
      "The platform is built in Next.js with Tailwind CSS, Prisma ORM, PostgreSQL on AWS RDS, and Vercel-based deployment and environment management.",
    status: "Active client platform · ongoing development",
    detailIntro:
      "KOI shows the practice at its most infrastructural: a full-stack platform where database architecture, deployment pipelines, and exacting frontend geometry all have to hold together as one system.",
    media: {
      src: "/work-koi-home.jpg",
      alt: "KOI live platform home screen with an editorial Bible Study Class interface",
      width: 1570,
      height: 980,
    },
    links: {
      caseStudy: {
        href: "/work/koi",
      },
      liveSite: {
        href: "https://koi-biblestudy.vercel.app/",
      },
    },
    caseStudy: {
      introLabel: "Full-stack architecture",
      introSummary:
        "KOI is framed as a technical anchor for the portfolio: a project where premium editorial presentation depends on disciplined full-stack engineering, relational data modeling, and production infrastructure that can support a high-spec frontend.",
      heroSignals: [
        {
          label: "Core stack",
          value: "Next.js / Prisma / PostgreSQL / Tailwind",
        },
        {
          label: "Infrastructure",
          value: "AWS RDS / Vercel / environment management",
        },
        {
          label: "Primary lens",
          value: "Full-stack architecture with premium UI precision",
        },
      ],
      roleNotes: [
        "Designing the relational schema and application structure so the platform could carry real data with stability instead of behaving like a purely presentational frontend.",
        "Engineering the UI around strict brand geometry, responsive overrides, and typographic control so the visual system felt bespoke rather than template-led.",
        "Managing the path from local development through production deployment, including database environment strategy and infrastructure mapping.",
      ],
      systemsHeading: "Key systems and architectural decisions",
      systemsIntro:
        "KOI matters because the frontend ambition is inseparable from the backend architecture. The project had to prove that a premium surface can still rest on a serious application foundation: schema design, deployment discipline, routing structure, and data-aware engineering decisions.",
      systemsDecisions: [
        {
          title: "Relational schema as product foundation",
          body: "Prisma and PostgreSQL were used to establish a data model that could scale beyond static presentation. The platform is strongest when the schema is treated as part of the product architecture, not as an afterthought attached to a finished UI.",
        },
        {
          title: "Next.js as structural runtime",
          body: "The application leans on Next.js for routing, server-side rendering, and a cleaner separation between page composition and backend-aware logic. That architectural choice helps the platform stay fast, organized, and production-ready.",
        },
        {
          title: "Hardcoded geometry for brand authority",
          body: "Standard layout behavior was intentionally overridden where necessary to enforce exact brand dominance, asset fit, and editorial proportions. The goal was not flexibility for its own sake, but a stricter visual system that served the identity precisely.",
        },
      ],
      implementationHeading: "Implementation notes",
      implementationIntro:
        "KOI proves engineering maturity in the connective tissue: migrations, environment handling, deployment discipline, asset-level layout fixes, and the constant balancing act between polished presentation and robust application infrastructure.",
      implementationNotes: [
        {
          title: "Database pipeline management",
          body: "The project moved from local development patterns into a production PostgreSQL setup on AWS RDS. That required thinking carefully about schema consistency, migration flow, and how the application should behave across environments.",
        },
        {
          title: "Server logic and deployment discipline",
          body: "Environment variables, Vercel deployment, Git integration, and backend-aware application structure were all part of the delivery. The platform had to behave like a real software product, not only a premium interface layer.",
        },
        {
          title: "Precision frontend engineering",
          body: "Layout constraints, responsive scaling overrides, and transparent asset corrections were handled directly in code to make the editorial direction hold across breakpoints. The visual quality depends on engineering exactness, not only aesthetic intent.",
        },
      ],
      outcomeHeading: "Outcome / reflection",
      outcomeIntro:
        "KOI establishes the portfolio’s strongest proof of full-stack software engineering: production-ready data architecture, deployment infrastructure, and a premium interface held to exacting standards.",
      outcomePoints: [
        "The project proves deeper systemic knowledge across schema design, server logic, deployment, and full-stack delivery.",
        "It shows that premium frontend execution can coexist with heavy backend requirements instead of being separated from them.",
        "It provides a technical foundation that strengthens the transition toward more advanced creative engineering and WebGL-focused work.",
      ],
      supportLinks: [
        { label: "Back to selected work", href: "/#work" },
        { label: "Open contact", href: "/#contact" },
        { label: "Email directly", href: "mailto:ngwendu.action@gmail.com" },
      ],
      closingNote:
        "KOI is the clearest proof that Negative Space is not only a visual practice. It is also a full-stack engineering practice capable of building robust data systems, production infrastructure, and premium interfaces at the same time.",
    },
  },
];

export function getFeaturedWorkBySlug(slug: FeaturedWorkSlug) {
  return featuredWork.find((item) => item.slug === slug);
}

export const commercialWork = featuredWork
  .filter((item) => item.homepageTier === "commercial")
  .sort((a, b) => a.homepageOrder - b.homepageOrder);

export const labWork = featuredWork
  .filter((item) => item.homepageTier === "lab")
  .sort((a, b) => a.homepageOrder - b.homepageOrder);
