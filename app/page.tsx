"use client";

import Approach from "@/components/Approach";
import Code from "@/components/Card/Code";
import ContactForm from "@/components/Contact/ContactForm";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills/Skills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Code />
        <Grid />
        <RecentProjects />
        <Experience />
        <Skills />
        <Approach />
        <ContactForm />
      </div>
    </main>
  );
};

export default Home;
