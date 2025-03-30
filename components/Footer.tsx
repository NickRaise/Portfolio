import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center px-4 md:px-0">
        <h1 className="heading">
          Ready to take <span className="text-purple">your</span> digital
          presence to next level?
        </h1>
        <p className="text-white-200 md:mt-10 mt-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <Link href="mailto:nikhilnainwaya17@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Nikhil
        </p>

        <div className="flex items-center gap-2 md:gap-3 lg:gap-6 mt-2 mg:mt-0">
          {socialMedia.map((profile) => (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={profile.link}
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-[1px] border-black-300"
            >
              <img src={profile.img} alt={profile.img} width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

// Todo - add link to social media, add color to phase 2 card

export default Footer;
