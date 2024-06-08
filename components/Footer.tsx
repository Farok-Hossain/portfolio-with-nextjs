import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10"
      id="contact"
      style={{ backgroundColor: "#000319" }}
    >
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
        <p className="text-white-200 md:mt-10 my-5 text-center font-bold">
          Reach out to me today and let&apos;s{" "}
          <span className=" text-pink-500">discuss</span> how I can help you
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
        <div className=" lg:ml-80 md:ml-32 mb-10">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Farok Hossain
          </p>
        </div>
        <div className="flex justify-center gap-3 mb-10 lg:mr-80 md:mr-32">
          <a
            href="https://www.facebook.com/profile.php?id=100006429429427"
            target="_blank"
          >
            <GrFacebookOption></GrFacebookOption>
          </a>
          <a href="https://www.instagram.com/farok_afs/" target="_blank">
            <BsInstagram></BsInstagram>
          </a>
          <a href="https://github.com/Farok-Hossain" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/farok-hossain-008444202/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://x.com/farok_afs" target="_blank">
            <BsTwitter></BsTwitter>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
