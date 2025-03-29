"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import dynamic from "next/dynamic";
import { GridGlobe } from "./GridGlobe";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import { useState } from "react";
import animationData from "@/data/confetie.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 lg:gap-8 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  imgClassName,
  titleClassName,
  img,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imgClassName?: string;
  titleClassName?: string;
  img?: string;
  spareImg?: string;
  id: number;
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("nikhilnainwaya17@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "overflow-hidden group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 relative rounded-3xl border border-neutral-200 bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.1] ",
        className
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div
        className={`${id === 6 && "flex items-center justify-center"} h-full`}
      >
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt="image"
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        <div
          className={`absolute right-0 bottom-0 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt="spareImg"
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation />
        )}

        <div
          className={cn(
            titleClassName,
            "transition duration-200 group-hover/bento:translate-x-2 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            <div className={`${id === 6 && "text-center"}`}>
              {title}
            </div>

            {id === 2 && <GridGlobe />}

            {id === 3 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-1 top-0">
                <div className="flex flex-col gap-3 lg:gap-6 relative top-2">
                  {["React.js", "Next.js", "Typescript"].map((item) => (
                    <span
                      key={item}
                      className="py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                </div>
                <div className="flex flex-col gap-3 lg:gap-6 relative -top-3">
                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                  {["Express.js", "MongoDB", "PostgreSQL"].map((item) => (
                    <span
                      key={item}
                      className="py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {id === 6 && (
              <div className="relative flex justify-center">
                <div className={`absolute -bottom-5 right-0`}>
                  <Lottie
                    options={{
                      loop: copied,
                      autoplay: copied,
                      animationData: animationData,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                  />
                </div>
                <MagicButton
                  title={copied ? "Email copied" : "Copy my email"}
                  icon={ copied ? <IoMdCheckmark /> :<IoCopyOutline />}
                  position="left"
                  className="!bg-[#161A31]"
                  handleClick={handleCopy}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
