import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import myImage from "../public/myImage.jpg";
import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";
// import cv from "../public/files/cv.pdf";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase font-bold tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with{" "}
            <span className="text-pink-500">Next.JS</span>
          </p>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m <span className=" text-pink-500">Farok Hossain</span>,
            a MERN Stack Developer.
          </p>

          <Image
            src={myImage}
            alt="myImg"
            className=" rounded-3xl lg:h-[45%] lg:w-[42%] md:h-[50%] md:w-[50%] mt-10 mb-5 "
          />
          <div>
            <a className=" mr-2" href="../public/files/cv.pdf" download>
              download cv
            </a>
            {/* <a
              href={cv}
              download
              className=" pr-5"
            >
              <MagicButton
                title="Download CV"
                icon={<FaCloudDownloadAlt />}
                position="right"
              />
              download cvv
            </a> */}
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
