import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import Image from "next/image";
import Link from "next/link";
import { IoStar } from "react-icons/io5";
import { CgGitFork } from "react-icons/cg";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10"
      id="contact"
      style={{ backgroundColor: "#000319" }}
    >
      <div className="relative border-t border-[#353951] text-white">
        <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
          <div className="flex justify-center -z-40">
            <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm">
              © Developer Portfolio by{" "}
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/abu-said-bd/"
                className="text-[#16f2b3]"
              >
                Farok Hossain
              </Link>
            </p>
            <div className="flex items-center gap-5">
              <Link
                target="_blank"
                href="https://github.com/said7388/developer-portfolio"
                className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
              >
                <IoStar />
                <span>Star</span>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/said7388/developer-portfolio/fork"
                className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
              >
                <CgGitFork />
                <span>Fork</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// <div className="flex flex-col items-center">
//         <h1 className="heading lg:max-w-[45vw] ml-4">
//           Ready to take <span className="text-pink-500">your</span> digital
//           presence to the <span className="text-pink-500">next</span> level?
//         </h1>
//         <p className="text-white-300 md:mt-10 my-5 text-center font-bold">
//           Reach out to me today and let&apos;s{" "}
//           <span className=" text-pink-500">discuss</span> how I can help you
//           achieve your goals.
//         </p>
//         <a href="mailto: farokafs7@gmail.com">
//           <MagicButton
//             title="Let's get in touch"
//             icon={<FaLocationArrow />}
//             position="right"
//           />
//         </a>
//       </div>
//       <div className="text-center mt-5">
//         <p className="md:text-base lg:font-bold text-sm md:font-normal font-light">
//           © Portfolio by <span className="text-pink-500">Farok Hossain</span>
//         </p>
//       </div>
