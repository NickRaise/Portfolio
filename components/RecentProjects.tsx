import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  const openProjectDemo = (link: string) => {
    window.open("https://github.com", "_blank");
  };

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small section of <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer heading={project.heading} href={project.githubLink}>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="absolute z-10 bottom-0"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {project.title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-xm line-clamp-2">
                  {project.des}
                </p>
              </a>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center overflow-hidden"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.demoLink}
                  className="flex justify-center items-center"
                >
                  <p className="flex lg:text-lg md:text-xs text-sm text-purple">
                    Checkout Demo
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
