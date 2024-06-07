import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-pink-500">your</span> digital
          presence to the <span className="text-pink-500">next</span> level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto: farokafs7@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Farok Hossain
        </p>

        {/* <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div> */}
        <div className="flex justify-center gap-3 mb-8">
          <a href="https://facebook.com" target="_blank">
            <GrFacebookOption></GrFacebookOption>
          </a>
          <a href="https://instagram.com" target="_blank">
            <BsInstagram></BsInstagram>
          </a>
          <a href="https://github.com/Farok-Hossain" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/farok-hossain-008444202/">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank">
            <BsTwitter></BsTwitter>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
