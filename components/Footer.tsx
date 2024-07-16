import Link from "next/link";
import { IoStar } from "react-icons/io5";
import { CgGitFork } from "react-icons/cg";

const Footer = () => {
  return (
    <footer
      className=" w-full pt-20 pb-10"
      id="contact"
      style={{ backgroundColor: "#000319" }}
    >
      <div className="relative border-t border-[#353951] text-white">
        <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
          <div className="flex justify-center -z-40">
            <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between ml-12 mr-12">
            <p className="text-sm">
              © Portfolio by{" "}
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/farok-hossain-008444202/"
                className="text-[#16f2b3]"
              >
                Farok Hossain
              </Link>
            </p>
            <div className="flex items-center gap-5">
              <Link
                target="_blank"
                href="https://github.com/Farok-Hossain/portfolio-with-nextjs"
                className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
              >
                <IoStar />
                <span>Star</span>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/Farok-Hossain/portfolio-with-nextjs/fork"
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
