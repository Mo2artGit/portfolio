import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import tutraffic from "@/public/tutraffic.png";
import ottomh from "@/public/ottomh.png";
import noimage from "@/public/noimage.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Temple University",
    location: "Phildelphia, PA",
    description:
      "Pursue degree in B.S. Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Web Developer",
    location: "Philadelphia, PA",
    description:
      "Designed and developed custom website for the small business and individual, meeting client requirements and deadlines.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Boston University",
    location: "Boston, MA",
    description:
      "Pursue Master degree in Software Development.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "TuTraffic",
    description:
      "I integrated Firebase database and developed the frontend webpage. Utilized OpenCV to build a parking spot detection model.",
    tags: ["React", "JavaScript", "Python", "Agile"],
    imageUrl: tutraffic,
  },
  {
    title: "OTTOMH",
    description:
      "Developed and implemented WebSocket communication to enhance real-time data transfer between the frontend and backend. Designed and developed responsive web pages with React",
    tags: ["React", "Go", "JavaScript"],
    imageUrl: ottomh,
  },
  {
    title: "Freeday Coffee Website",
    description:
      "Developed a dynamic data visualization platform by connecting to a database via webAPI. Implemented CRUD (Create, Read, Update, Delete).",
    tags: ["HTML", "CSS", "SQL", "JavaScript", "React"],
    imageUrl: noimage,
  },
  {
    title: "UX Project",
    description:
      "Led the end-to-end design process for a food service webpage, utilizing techniques such as scoping, user research, ideation, design, validation, and iteration.",
    tags: ["Axure"],
    imageUrl: noimage,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "C/C++",
  "Firebase",
  "SQL",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Agile",
  "Jira",
  "Premiere Pro",
  "Photoshop",
  "Ilustrator",
  "InDesign",
] as const;
