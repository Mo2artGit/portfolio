"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to pursue
        a master degree. I enrolled in program {" "}
        <span className="font-medium">Software Development</span>.{" "}
        I have strong analytical and problem-solving skills.
        I work effectively in a team-oriented environment.
        Experience in designing, developing and deploying software applications.
        I familiar with{" "}
        <span className="font-medium">
          Java, Python, C/C++, JavaScript, Go
        </span>
        .{" "}
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        badminton, video games, watching Formula 1, and playing with my pets.
      </p>
    </motion.section>
  );
}
