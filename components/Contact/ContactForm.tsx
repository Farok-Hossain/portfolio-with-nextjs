// "use client";

import { personalData } from "@/utils/data/personal-data";
import { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { TbMailForward } from "react-icons/tb";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitt = (e: any) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div className="lg:flex">
      <div>
        <h1 className=" mb-5 text-green-400 text-2xl uppercase">
          Contact With Me
        </h1>
        <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
          <p className="text-sm text-[#d3d8e8]">
            {
              "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
            }
          </p>
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <form action="" className="w-full" onSubmit={handleSubmitt}>
                <label>Your Name:</label>
                <input
                  className="bg-[#10172d] mt-2 mb-4 w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Your Email:</label>
                <input
                  className="bg-[#10172d] mt-2 mb-4 w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Your Message:</label>
                <input
                  className="bg-[#10172d] mt-2 w-full h-20 border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 mb-5"
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  className="flex items-center mb-2  gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                  type="submit"
                >
                  <span>Send Message</span>
                  <TbMailForward className="" size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-8 lg:mt-40 lg:ml-10 lg:mb-4">
          <p className="text-sm md:text-xl flex items-center gap-3 mb-5">
            <MdAlternateEmail
              className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={36}
            />
            <span>{personalData.email}</span>
          </p>
          <p className="text-sm md:text-xl flex items-center gap-3 mb-5">
            <IoMdCall
              className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={36}
            />
            <span>{personalData.phone}</span>
          </p>
          <p className="text-sm md:text-xl flex items-center gap-3">
            <CiLocationOn
              className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={36}
            />
            <span>{personalData.address}</span>
          </p>
        </div>
        <div className="mt-8 lg:mt-12 flex items-center gap-5 lg:gap-10 lg:ml-10">
          <Link target="_blank" href={personalData.github}>
            <IoLogoGithub
              className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={48}
            />
          </Link>
          <Link target="_blank" href={personalData.linkedIn}>
            <BiLogoLinkedin
              className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={48}
            />
          </Link>
          <Link target="_blank" href={personalData.facebook}>
            <FaFacebook
              className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={48}
            />
          </Link>
          <Link target="_blank" href={personalData.instagram}>
            <BsInstagram
              className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={48}
            />
          </Link>
          <Link target="_blank" href={personalData.twitter}>
            <FaXTwitter
              className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={48}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
