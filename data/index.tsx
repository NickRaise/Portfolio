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
    title: "Currently building a ...",
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
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", '/ws.png'],
        githubLink: "https://github.com/NickRaise/Chess-OP",
        demoLink: "https://drive.google.com/file/d/1_Whp5LfFGd9kS3k1M6gNKgHqfeYp2eTG/view?usp=sharing",
   },
   {
    id: 2,
    heading: "Chatter",
    title: "Real-Time Chat Application",
    des: "Engage in live conversations with anyone around the world in real-time, built using React, WebSockets, and Node.js.",
    img: "/p2.svg",  
    iconLists: ["/re.svg", "/tail.svg", '/js.svg', '/ws.png', '/node.svg', '/mongo.svg'],
    githubLink: "https://github.com/NickRaise/Chat-OP",  
    demoLink: "https://drive.google.com/file/d/1NPT_HBA2MAm-Hy0y1DuywBtFOtGbAi4p/view?usp=sharing",  
  }  
]
