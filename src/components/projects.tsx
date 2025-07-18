'use client';

import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Ampe AI',
      description:
        'Website for AI-powered business tools built for African startups. Includes chatbots, voice agents, and automation dashboards.',
      github: 'https://github.com/Jnboakye/Ampe_Ai',
      link: 'https://ampeai.com',
    },
    {
      title: 'ProfileBot',
      description:
        'AI agent that auto-generates LinkedIn-style profiles and CVs from a voice prompt or short form.',
      github: 'https://github.com/Jnboakye/profilebot',
      link: 'https://profilebot.vercel.app',
    },
    {
      title: 'b17 Decorate',
      description: 'A website for an interior designer.',
      github: 'https://github.com/Jnboakye/b17_decorate',
      link: 'https://b17decorate.netlify.app',
    },
    {
      title: 'Hydrohub Water Services',
      description: 'A website for a water delivery company.',
      github: 'https://github.com/Jnboakye/hydrohub-App',
      link: 'https://hydrohubws.netlify.app',
    },
    {
      title: 'eBegger',
      description:
        'A crowdfunding app for micro-donations and wallet saving among friends, built with React Native.',
      github: 'https://github.com/jeffreyboakye/ebegger',
      link: 'https://ebegger.app',
    },
    {
      title: 'More on GitHub',
      description: 'Click here to see my GitHub Repos.',
      github: 'https://github.com/Jnboakye',
      link: 'https://github.com/Jnboakye',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 md:px-12 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative bg-neutral-900/40 backdrop-blur-md p-6 rounded-lg border border-neutral-800 transition-all duration-300 ease-in-out 
                       hover:border-primary hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <p className="text-muted mt-3 flex items-center gap-2">
              {project.description}
              {project.title === 'More on GitHub' && (
                <ArrowRight className="inline-block text-primary" size={18} />
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
