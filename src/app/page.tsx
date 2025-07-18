'use client';

import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Section from '@/components/section';
import { useEffect, useState } from 'react';
import ChatWidget from "@/components/chatbotWidget";


export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'about';
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen my-colorful-element">
      <Navbar activeSection={activeSection} />
      <main className="w-full md:w-3/4 p-4 md:p-6 overflow-y-auto no-scrollbar">
        <Hero />
        <ChatWidget />

        <Section id="about">
          <About />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </main>
    </div>
  );
}