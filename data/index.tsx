import { FaHome } from "react-icons/fa";

export interface gridItemType {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
}

export const navItems = [
  { name: "Home", link: "#home", icon: <FaHome /> },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems: gridItemType[] = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "md:col-span-6 lg:col-span-3 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "h-full w-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "md:col-span-3 lg:col-span-2 md:row-span-2 h-full",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "md:col-span-3 lg:col-span-2 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "md:col-span-3 lg:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title:
      "Currently building SyncSpace: A game-like metaverse app for team collaboration.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "md:col-span-3 lg:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    heading: "Chess-OP",
    title: "Play Chess in real-time",
    des: "Explore the joy of playing chess with anyone around the world in real-time, build using react & web-sockets.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/ws.png", "/node.svg"],
    githubLink: "https://github.com/NickRaise/Chess-OP",
    demoLink:
      "https://drive.google.com/file/d/1_Whp5LfFGd9kS3k1M6gNKgHqfeYp2eTG/view?usp=sharing",
  },
  {
    id: 2,
    heading: "Interview Guru",
    title: "AI-Powered Interview Preparation Platform",
    des: "Interview Guru is an AI-powered platform that helps users practice job interviews using Vapi AI voice agents and Google Gemini. Built with Next.js, Tailwind CSS, and Firebase, it offers real-time feedback, detailed transcripts, and a sleek, responsive UI.",
    img: "/project-interview-guru.svg",
    iconLists: ["/ts.svg", "/nextjs.svg", "/tail.svg", "/firebase.svg"],
    githubLink: "https://github.com/NickRaise/Interview-Guru/",
    demoLink: "https://interview-guru-kohl.vercel.app/",
  },
  {
    id: 3,
    heading: "Chatter",
    title: "Real-Time Chat Application",
    des: "Engage in live conversations with anyone around the world in real-time, built using React, WebSockets, and Node.js.",
    img: "/p2.svg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/ws.png",
      "/node.svg",
      "/mongo.svg",
      "/express.svg",
    ],
    githubLink: "https://github.com/NickRaise/Chat-OP",
    demoLink:
      "https://drive.google.com/file/d/1NPT_HBA2MAm-Hy0y1DuywBtFOtGbAi4p/view?usp=sharing",
  },
  {
    id: 4,
    heading: "Zentry Clone",
    title: "Gaming Website Clone (Zentry)",
    des: "A visually rich, animated gaming website clone inspired by Zentry.com. Built using React and GSAP for smooth animations and transitions.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/js.svg", "/tail.svg", "/gsap.svg"],
    githubLink: "https://github.com/NickRaise/gaming_website",
    demoLink: "https://gaming-website-tawny.vercel.app/",
  },
  // {
  //   id: 4,
  //   heading: "Pay-OP",
  //   title: "Online Digital Wallet Application",
  //   des: "Pay-OP is a secure digital wallet application that allows you to transfer money from your bank account and pay any mobile number using the wallet. Built with Next.js, Tailwind CSS, and PostgreSQL.",
  //   img: "/p4.svg",
  //   iconLists: ["/ts.svg", "/nextjs.svg", "/tail.svg", "/postgresql.svg"],
  //   githubLink: "https://github.com/NickRaise/PayOP",
  //   demoLink: "https://github.com/NickRaise/PayOP",
  // },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Developer Intern",
    desc: "Made a video streaming application using the Youtube API to fetch the video data and redirect the user to the video.",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Junior Software Developer",
    desc: "Enhanced Odoo ERP by customizing modules and automating workflows for inventory, invoices, and sales.",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full-Stack Developer",
    desc: "Built a School Management System using React, NestJS, and MongoDB, focusing on scalable integration.",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Real-Time Chess Platform Developer",
    desc: "Created an online multiplayer chess platform using React, WebSockets, and Chess.js for real-time gameplay.",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/NickRaise",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/__NikhilKumar_",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/nikhilkumar17/",
  },
];
