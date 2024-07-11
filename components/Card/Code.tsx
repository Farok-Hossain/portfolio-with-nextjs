import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import React from "react";
import MagicButton from "../MagicButton";
import { FaFacebook, FaLocationArrow, FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import myImage from "../../public/myImage.jpg";

const Code = () => {
  return (
    <div className="lg:grid grid-cols-2 lg:ml-80 lg:mr-80 gap-4">
      <div className="pr-2 mb-5">
        <p className="text-start md:tracking-wider mb-4 text-xl md:text-3xl lg:text-4xl font-bold">
          Hi! <br /> This is{" "}
          <span className=" text-pink-500">Farok Hossain</span>, I&apos;m a
          Professional{" "}
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
            className=" transition-all text-pink-500 hover:scale-125 duration-300"
          >
            <BsLinkedin size={30} />
          </Link>
          <Link
            href={personalData.facebook}
            target="_blank"
            className=" transition-all text-pink-500 hover:scale-125 duration-300"
          >
            <FaFacebook size={30} />
          </Link>
          <Link
            href={personalData.instagram}
            target="_blank"
            className=" transition-all text-pink-500 hover:scale-125 duration-300"
          >
            <BsInstagram size={30} />
          </Link>
          <Link
            href={personalData.twitter}
            target="_blank"
            className=" transition-all text-pink-500 hover:scale-125 duration-300"
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
          <Link href="#about">
            <MagicButton
              title="SHOW MY WORK"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>

      <div>
        <div>
          <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            <div className="px-4 lg:px-8 py-5">
              <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-200"></div>
              </div>
            </div>
            <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
              <code className="font-mono text-xs md:text-sm lg:text-base">
                <div className="blink">
                  <span className="mr-2 text-pink-500">const</span>
                  <span className="mr-2 text-white">coder</span>
                  <span className="mr-2 text-pink-500">=</span>
                  <span className="text-gray-400">{"{"}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-amber-300">Farok Hossain</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
                <div className="ml-4 lg:ml-8 mr-2">
                  <span className=" text-white">skills:</span>
                  <span className="text-gray-400">{`['`}</span>
                  <span className="text-amber-300">React</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">React Native</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">NextJS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">MongoDB</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Express</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">NodeJS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Tailwind</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">HTML</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">CSS</span>
                  <span className="text-gray-400">{"'],"}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    hardWorker:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    quickLearner:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    problemSolver:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                    hireable:
                  </span>
                  <span className="text-orange-400">function</span>
                  <span className="text-gray-400">{"() {"}</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                    return
                  </span>
                  <span className="text-gray-400">{`(`}</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">hardWorker</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">problemSolver</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">skills.length</span>
                  <span className="mr-2 text-amber-300">&gt;=</span>
                  <span className="text-orange-400">5</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
                </div>
                <div>
                  <span className="text-gray-400">{`};`}</span>
                </div>
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
