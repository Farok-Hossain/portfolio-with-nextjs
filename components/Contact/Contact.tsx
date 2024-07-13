"use client";
import React, { useState } from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1 className="text-3xl text-green-500">Contact With Me</h1>
      <form action="" className="w-full">
        <label>Your Name:</label>
        <input
          className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
          type="text"
          value={name}
        />
        <label>Your Email:</label>
        <input
          type="email"
          className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
        />
        <label>Message</label>
        <input
          type="email"
          className="bg-[#10172d] w-full h-20 border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
        />
      </form>
    </div>
  );
};

export default Contact;
