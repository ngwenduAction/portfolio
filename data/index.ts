import Xolani from '@/public/xolani.svg';
import MrVenter from '@/public/Mr. Venter.svg';
import JeanChurch from '@/public/Jean Church.svg';
import MrPeters from '@/public/Mr Peters.svg';
import NeoMarie from '@/public/neo marie.svg';

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Airbnb-Clone-Jutsu",
      des: "Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth.",
      img: "/p1.svg",
      iconLists: ["/reactW.svg", "/tail.svg", "/prisma.svg", "/db1.svg", "/logo-sm.svg"],
      link: "https://hotel-booking-site-jutsu.vercel.app",
    },
    {
      id: 2,
      title: "Aora - Video Sharing Mobile App",
      des: "Built with React Native and Animatable for smooth experiences and animations, and powered by Appwrite = seamless sharing.",
      img: "/p2.svg",
      iconLists: ["/re.svg", "/expo-go.svg", "/nw.svg", "/tail.svg", "/appw.svg"],
      link: "https://github.com/Ngwenduhajdin/zoom-clone",
    },
    {
      id: 3,
      title: "E-Commerce + Dashboard & CMS",
      des: "Built with Next.js 13 App Router, React, Tailwind, Prisma, MySQL - this application has a seamless navigation and user experience.",
      img: "/p3.svg",
      iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/prisma.svg", "/PS.svg"],
      link: "https://github.com/Ngwenduhajdin/ai_saas_app",
    },
    {
      id: 4,
      title: "Netflix-Clone-Jutsu",
      des: "This project is a full-stack Netflix clone built with React, Tailwind CSS, Next.js, Prisma, MongoDB, and NextAuth.",
      img: "/p4.svg",
      iconLists: ["/re.svg", "/tail.svg", "/next.svg", "/prisma.svg", "/db1.svg", "/logo-sm.svg"],
      link: "https://flixjitsuclone.vercel.app/",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "CodeSpace provides you with one of the most in-demand skill sets worldwide. Our expertly designed learning pathways offer the most efficient route to becoming a developer. Wishing you the very best on your journey, Ngwendu!.",
      profileImage: MrVenter,
      name: "Schalk Venter",
      title: "Lecturer",
    },
    {
      quote:
        "Working with Mr. Gambu allowed us to efficiently expand our team and secure the precise talent we needed. Mr. Ngwendu Gambu has provided exceptional support every step of the way.",
      profileImage: MrPeters,
      name: "Abdul Peters",
      title: "Ceo & Founder",
    },
    {
      quote:
        "Collaborating with Ngwendu was an absolute pleasure. His professionalism, responsiveness, and commitment to delivering exceptional results were evident at every stage of our project. Ngwendu's passion for every aspect of development truly stands out. If you're looking to elevate your website and enhance your brand, Ngwendu is the perfect partner.",
      profileImage: JeanChurch,
      name: "Jean C",
      title: "Director of JDP Technologies",
    },
    {
      quote:
        "My website now looks and feels amazing — a significant upgrade from where it was before working with Ngwendu. His expertise and attention to detail have truly elevated the entire user experience.",
      profileImage: Xolani,
      name: "Xolani Radebe",
      title: "Store Owner",
    },
    {
      quote:
        "Ngwendu has been exceptionally accommodating, navigating the project's broad and sometimes ambiguous requirements with ease. His invaluable guidance has steered the project in the right direction. This level of commitment is truly remarkable and rare to find.",
      profileImage: NeoMarie,
      name: "Lehlohonolo Motsepe",
      title: "Freelancer",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/ngwenduAction",
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://x.com/ngwendu_Action",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "http://linkedin.com/in/ngwenduaction",
    },
  ];