'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-xl text-center py-28 px-4 sm:px-6 lg:px-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold tracking-tight text-primary"
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-5 text-muted text-lg"
      >
        I’m currently open to freelance or full-time roles. Whether you’ve got a cool idea, a job offer, or just want to chat, feel free to reach out!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-10 flex justify-center gap-4 flex-wrap"
      >
        <a
          href="mailto:jeffreyboakye2131@outlook.com"
          className="rounded border border-primary px-6 py-3 text-primary hover:bg-primary hover:text-background transition-colors duration-300"
        >
          Say Hello
        </a>

        <a
          href="https://www.linkedin.com/in/jeffrey-nana-boakye/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-muted px-6 py-3 text-muted hover:bg-muted hover:text-background transition-colors duration-300"
        >
            Check me out on Linkedln →
        </a>
      </motion.div>
    </section>
  );
}
