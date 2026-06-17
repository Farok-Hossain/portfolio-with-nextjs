export const navItems = [
  { name: "ABOUT", link: "#about" },
  { name: "PROJECTS", link: "#projects" },
  { name: "EXPERIENCE", link: "#experience" },
  { name: "SKILLS", link: "#skills" },
  { name: "CONTACT", link: "#contact" },
];

import imgAdrian from "../public/adrian.jpg";
import imgProfile from "../public/adrian.jpg";
import p1 from "../public/desicarousel.png";
import p2 from "../public/music_hype.png";
import p3 from "../public/brycelowe.png";
import p4 from "../public/atalab.png";
import p5 from "../public/chique.png";
import p6 from "../public/tikabot.png";
import p7 from "../public/p4.png";
import p8 from "../public/oc.png";
// import p8 from "../public/citizen.png";

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Learning a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Desicarousel",
    des: "A marketplace where users can buy and sell products easily. Buyers and sellers use the same platform, with safe payments and order tracking. If a product arrives in bad condition, buyers can request a simple, hassle-free return.",
    img: p1,
    // link: "https://desicarousel.com/",
    link: "https://desi-carousel.netlify.app/",
  },
  {
    id: 2,
    title: "Music Hype",
    des: "A music marketplace where singers upload their tracks and fans purchase to listen anytime. Users can also shop exclusive brand products",
    img: p2,
    link: "https://www.musichypeworldwide.com/",
  },
  {
    id: 3,
    title: "Oc Workforce",
    des: "Chique AI is an AI-powered call system that provides real-time guidance, smart insights, and automation to help teams handle calls efficiently and improve customer communication.",
    img: p8,
    link: "https://ocworkforcehousing.com",
  },
  {
    id: 4,
    title: "AI-Powered Real-Time Guidance for Sales Professionals",
    des: "AI-powered sales platform with real-time call guidance, smart insights, and performance analytics. Help sales professionals handle live calls better, improve conversions, and close more deals using intelligent AI-driven support.",
    img: p3,
    link: "https://pitchprox.netlify.app/dashboard",
  },
  {
    id: 5,
    title: "The Dignity Draw",
    des: "A secure weekly draw platform where users donate to participate and, after one week, a winner is selected transparently. Simple participation, fair selection, and exciting rewards for the community every week.",
    img: p4,
    link: "https://thedignitydraw.org/",
  },
  {
    id: 6,
    title: "Chique AI",
    des: "Chique AI is an AI-powered call system that provides real-time guidance, smart insights, and automation to help teams handle calls efficiently and improve customer communication.",
    img: p5,
    link: "https://aichique.com/",
  },

  {
    id: 7,
    title: "Pinace Capital Group",
    des: "Chique AI is an AI-powered call system that provides real-time guidance, smart insights, and automation to help teams handle calls efficiently and improve customer communication.",
    img: p8,
    link: "https://pinnaclealts.com/",
  },
  {
    id: 8,
    title: "TikaBot",
    des: "TikaBot is an AI-powered call system that provides real-time guidance, smart insights, and automation to help teams handle calls efficiently and improve customer communication.",
    img: p6,
    link: "https://tikabot.netlify.app/",
  },

  {
    id: 9,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: p7,
    link: "https://apple-15pro.vercel.app/",
  },
  // {
  //   id: 8,
  //   title: "Citizen Movement",
  //   des: "A powerful CMS-based website where users can donate, shop online, and read the latest news articles. One platform to manage content, support causes, sell products, and keep audiences informed.",
  //   img: p8,
  //   link: "https://cmclib.com/",
  // },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    img: { imgAdrian },
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Adam Smith",
    title: "Director of BetaStream Technologies",
    img: { imgProfile },
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Adrian",
    title: "Director of JSM Technologies",
    img: { imgAdrian },
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "McCarthy",
    title: "Director of RapidScale Technologies",
    img: { imgProfile },
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "John Kirton",
    title: "Director of Openxcell Technologies",
    img: { imgAdrian },
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Development",
    desc: "Assisted in the development of a web-based platform using React.js, Next.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "MERN Stack Development",
    desc: "Full stack development using React.js, Node.js, Express.js & MongoDB.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
