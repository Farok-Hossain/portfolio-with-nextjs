"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <section className="w-full py-20" id="projects">
      <h1 className="heading text-center mb-12">
        A small selection of{" "}
        <span className="text-pink-500">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-6 border border-neutral-700 rounded-xl overflow-hidden transition-shadow hover:shadow-lg"
          >
            <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
              <Image
                src={project.img}
                alt={`${project.title} image`}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                fill
              />
            </div>
            <div className="p-6 flex flex-col gap-4">
              <h5 className="text-2xl font-semibold text-white">
                {project.title}
              </h5>
              <p className="text-lg text-gray-400">{project.des}</p>
              <div className="w-full flex justify-between">
                <div className="w-full flex flex-wrap gap-1">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 flex items-center justify-center border border-neutral-700 rounded-full overflow-hidden"
                    >
                      <Image
                        src={icon}
                        alt={`tech-icon-${index}`}
                        width={40}
                        height={40}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>
                <div className="w-fit flex gap-2">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white flex items-center gap-1 text-nowrap"
                  >
                    Live Website{" "}
                    <FaLocationArrow className="text-base text-pink-200" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
