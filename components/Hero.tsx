import { FaFacebook, FaLocationArrow, FaSquareXTwitter } from "react-icons/fa6";
import { personalData } from "@/utils/data/personal-data";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import myImage from "../public/myImage.jpg";
import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";

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
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-start justify-center">
          <p className="uppercase font-bold tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic With{" "}
            <span className="text-pink-500">Next.JS</span>
          </p>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-start text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-start md:tracking-wider mb-4 text-xl md:text-3xl lg:text-4xl font-bold">
            Hi! This is <span className=" text-pink-500">Farok Hossain</span>,
            I&apos;m a Professional{" "}
            <span className="text-green-400">Software Developer</span>.
          </p>
          <div className="my-5 flex text-left gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              className=" transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="text-pink-500"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target="_blank"
              className="text-pink-500"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.instagram}
              target="_blank"
              className="text-pink-500"
            >
              <BsInstagram size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target="_blank"
              className="text-pink-500"
            >
              <FaSquareXTwitter size={30} />
            </Link>
          </div>
          <div>
            <Link target="_blak" href={personalData.resume}>
              <button className="btn btn-success uppercase mr-2 text-white">
                <span>Get Resume</span>
                <MdDownload size={16} />
              </button>
            </Link>
            <a href="#about">
              <MagicButton
                title="SHOW MY WORK"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>

          <div className="lg:grid grid-cols-2">
            <div>
              <Image
                src={myImage}
                alt="myImg"
                className=" rounded-3xl lg:h-[80%] lg:w-[68%] md:h-[50%] md:w-[50%] mt-10 mb-5 "
              />
            </div>
            <div className="mt-8">
              <h1 className="uppercase text-green-400 text-2xl font-bold ">
                Who I am?
              </h1>
              <p>{personalData.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
