'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const experience = [
  {
    company: 'SilverRock Technology Services',
    role: 'Backend Developer',
    period: 'Mar 2025 – Present',
    location: 'Accra, Ghana / Remote',
    details: [
      'Developed and maintained robust APIs to ensure seamless communication between frontend and backend systems.',
      'Designed and managed databases using MongoDB for scalable and efficient data handling.',
      'Wrote backend logic primarily in JavaScript, utilizing AI tools to adapt and translate code into Python and PHP for cross-stack flexibility.',
    ],
  },
  {
    company: 'Freelancer',
    role: 'Web Designer & Digital Marketer',
    period: 'Feb 2023 – Jan 2025',
    location: 'Accra, Ghana / Remote',
    details: [
      'Designed and developed responsive websites using WordPress, leading to a 30% increase in user engagement for clients.',
      'Created visually appealing UIs and marketing flyers, enhancing brand visibility and boosting customer acquisition by 20%.',
      'Managed social media presence for clients, increasing engagement by 25% through content strategy, AI-driven automation, and audience insights.',
      'Improved website performance by optimizing code, reducing load times by 20%, and enhancing user experience.',
    ],
  },
  {
    company: 'Vodafone Ghana',
    role: 'RF Engineer',
    period: 'Oct 2021 – Jan 2023',
    location: 'Accra, Ghana',
    details: [
      'Analyzed scanner data and GSM/CDMA networks to maximize wireless network quality and user experience.',
      'Diagnosed performance drops and implemented solutions to restore site performance.',
      'Conducted drive tests across 8 regions using Nemo Outdoor to evaluate voice and data KPIs.',
      'Utilized Microsoft Excel for advanced radio parameter analysis and reporting.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
        Where I’ve Worked
      </h2>

      <div className="space-y-12 text-left">
        {experience.map((job, index) => (
          <div
            key={index}
            className="bg-neutral-900/40 border border-neutral-800 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex justify-between flex-wrap">
              <h3 className="text-xl font-semibold text-white">
                {job.role}{' '}
                <span className="text-primary">@ {job.company}</span>
              </h3>
              <p className="text-sm text-muted-foreground italic mt-1 md:mt-0">
                {job.period} • {job.location}
              </p>
            </div>
            <ul className="mt-4 list-disc list-inside space-y-2 text-muted text-sm md:text-base">
              {job.details.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a
          href="/pdf/resume.pdf" // Replace with your uploaded resume path
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:underline text-lg font-medium"
        >
          Click to see full Resume <ArrowRight className="ml-2" size={18} />
        </a>
      </div>
    </section>
  );
};

export default Experience;
