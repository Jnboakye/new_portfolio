"use client";

import { motion } from "framer-motion";
import Socials from "./socials";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex-1 flex flex-col justify-center items-start px-8 py-12 text-left space-y-4"
    >
      <motion.p
        className="text-primary mb-4 text-sm md:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        className="text-4xl sm:text-6xl font-bold text-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Jeffrey Boakye.
      </motion.h1>

      <motion.h2
        className="text-4xl sm:text-6xl font-bold text-muted mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        I build things for the web.
      </motion.h2>

      <motion.p
        className="text-muted max-w-xl mt-6 text-sm sm:text-base leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        I’m a full stack developer focused on building accessible,
        human-centered products using modern technologies like React, Next.js,
        and Node.js. Currently, I’m building smart AI automations at{" "}
        <a
          href="https://ampe.ai"
          target="_blank"
          className="text-primary underline"
        >
          Ampe Ai
        </a>
        .
      </motion.p>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="#projects"
          className="inline-block border border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-background transition duration-300"
        >
          Check out my work →
        </a>
      </motion.div>
      {/* Socials visible only on mobile */}
      <div className="block md:hidden mt-10">
        <Socials />
      </div>
    </section>
  );
}
