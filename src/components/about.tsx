"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaGithub, FaPython, FaGitAlt, FaAws } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTailwindcss, SiN8N, SiOpenai, SiVercel, SiPostman, SiWordpress, SiMake, SiTypescript, SiRender, SiPostgresql} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsRobot } from "react-icons/bs";

const techStack = [
  { name: "JavaScript", icon: <FaJs size={24} className="text-yellow-400" /> },
  { name: "Typescript", icon: <SiTypescript size={24} className="text-blue-500" /> },
  { name: "React", icon: <FaReact size={24} className="text-blue-400" /> },
  { name: "React Native", icon: <FaReact size={24} className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs size={24} className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs size={24} className="text-green-500" /> },
  { name: "Express", icon: <FaNodeJs size={24} className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb size={24} className="text-green-600" /> },
  { name: "Postgresql", icon: <SiPostgresql size={24} className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={24} className="text-teal-400" /> },
  { name: "n8n", icon: <SiN8N size={24} className="text-orange-500" /> },
  { name: "OpenAI", icon: <SiOpenai size={24} className="text-white" /> },
  { name: "Langflow", icon: <BsRobot size={24} className="text-purple-400" /> },
  { name: "Make", icon: <SiMake size={24} className="text-purple-700" /> },
  { name: "Postman", icon: <SiPostman size={24} className="text-orange-500" /> },
  { name: "Git", icon: <FaGitAlt size={24} className="text-orange-700" /> },
  { name: "Wordpress", icon: <SiWordpress size={24} className="text-blue-500" /> },
  { name: "AWS", icon: <FaAws size={24} className="text-orange-700" /> },
  { name: "Vercel", icon: <SiVercel size={24} className="text-black" /> },
  { name: "Render", icon: <SiRender size={24} className="text-black" /> },


];

export default function About() {
  return (
    <section className="min-h-screen flex-1 flex flex-col justify-center items-start px-8 py-12 space-y-6 text-left">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-primary mb-4 border-muted inline-block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="space-y-4 text-muted text-base leading-relaxed w-full max-w-none"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p>
          I am <span className="font-bold text-white">Jeffrey Boakye</span> — a full-stack developer and AI automation enthusiast based in Hamburg, Germany. I began with a degree in Telecommunications Engineering, but my passion drew me toward building web apps and AI systems.
        </p>
        <p>
          I now build sleek digital products using technologies like React, Next.js, Node.js, and MongoDB — and integrate smart tools like chatbots, AI voice agents, and automations with platforms like n8n, Make, Vapi, and Relevance AI.
        </p>
        <p>
          Currently, I’m pursuing my MSc in IT Management and running my startup{" "}
          <span className="text-primary font-semibold">Ampe Ai</span>, focused on building AI-driven solutions for African businesses.
        </p>
        <p>
          Outside of tech, I enjoy long city walks (often recording POV videos for socials), exploring how AI fits into everyday life, and building things that make life easier.
        </p>
      </motion.div>

      <motion.div
        className="mt-10 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
          Technologies I Work With
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 px-0">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-200 group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
            >
              <div className="p-3 rounded-full bg-muted/10 group-hover:bg-muted/20">
                {tech.icon}
              </div>
              <span className="mt-2 text-xs text-center text-muted">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
