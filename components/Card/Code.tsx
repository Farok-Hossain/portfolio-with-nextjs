import Image from "next/image";
import React from "react";
import myImage from "../../public/myImage.jpg";
import { personalData } from "@/utils/data/personal-data";

const Code = () => {
  return (
    <div className="lg:grid grid-cols-2 mt-20 mb-24">
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
  );
};

export default Code;
