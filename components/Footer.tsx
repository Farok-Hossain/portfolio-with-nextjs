import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10"
      id="contact"
      style={{ backgroundColor: "#000319" }}
    >
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-pink-500">your</span> digital
          presence to the <span className="text-pink-500">next</span> level?
        </h1>
        <p className="text-white-300 md:mt-10 my-5 text-center font-bold">
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
      <div className="text-center mt-5">
        <p className="md:text-base lg:font-bold text-sm md:font-normal font-light">
          Copyright © 2024 <span className="text-pink-500">Farok Hossain</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
