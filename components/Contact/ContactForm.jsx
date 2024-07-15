"use client";

import { useState } from "react";
import { TbMailForward } from "react-icons/tb";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitt = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div className="mt-20 ml-6">
      <p className="font-medium mb-5 text-green-500 text-xl uppercase">
        Contact With Me
      </p>
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
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Your Email:</label>
              <input
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Your Message</label>
              <input
                className="bg-[#10172d] w-full h-20 border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="btn btn-success" type="submit">
                <span>Send Message</span>
                <TbMailForward className="mt-1" size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
