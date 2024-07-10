import Link from "next/link";
import React from "react";

import { personalData } from "@/utils/data/personal-data";

import p1 from "../../public/p1.png";
import p2 from "../../public/p2.png";
import p3 from "../../public/p3.png";
import p4 from "../../public/p4.png";
// import Projects from "./Projects/Projects";
import { any } from "three/examples/jsm/nodes/Nodes.js";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Bistro Boss Restaurant",
    des: "A responsive E-commerce website done with MERN with fully functional. Users can easily order food & make payment.",
    img: { p1 },
    iconLists: ["/re.svg", "/tail.svg", "/n3.svg", "/m1.svg", "/f2.svg"],
    link: "https://bistro-restaurant-866e3.web.app/",
  },
  {
    id: 2,
    title: "Doctors Appointment Web App",
    des: "A responsive website done with functional component of React. Users can easily doctors appointment booking to this website.",
    img: { p2 },
    iconLists: ["/re.svg", "/mui1.svg", "/n3.svg", "/m1.svg", "/f2.svg"],
    link: "https://doctors-portal-ec125.firebaseapp.com/",
  },
  {
    id: 3,
    title: "Tinzer Health Care - A Health Care Web App",
    des: "A responsive front end web app with fully funtional component of React.",
    img: { p3 },
    iconLists: ["/re.svg", "/bt1.svg", "/css1.svg", "/nt1.svg", "/f2.svg"],
    link: "https://tinzer-health-care.netlify.app/",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: { p4 },
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://bistro-restaurant-866e3.web.app/",
  },
];

const PCard = () => {
  return (
    <div className="grid grid-cols-2">
      {projects.map((project) => (
        <div key={project.id}>
          <div className="card card-compact w-96 shadow-xl">
            <figure>
              <img src={project.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.des}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                <a href={project.link}>Live Link A</a>
                <Link href={project.link}>Live Link</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Link target="_blank" href={personalData.resume}>
        <span className="text-pink-500">Get Resume</span>
      </Link>
    </div>
  );
};

export default PCard;
