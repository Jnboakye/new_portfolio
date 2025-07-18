"use client";
import Socials from "./socials";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  return (
    <nav className="w-h md:w-1/2 p-4 md:p-6 flex flex-col gap-12 sticky top-0 h-auto md:h-screen text-left">
      <div className="pt-16 md:pt-20 pl-8 md:pl-12 pr-4 md:pr-6">
        <a href="#hero">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">
            Jeffrey Boakye
          </h1>
          <p className="text-base md:text-lg font-medium text-gray-300 mb-3 md:mb-5">
            Full-Stack Engineer
          </p>
          <p className="text-sm md:text-base text-gray-400 mb-8 md:mb-10">
            I Build Design, Develop and Deliver.
          </p>
        </a>

        <ul className="space-y-3 md:space-y-4 text-sm md:text-base font-medium uppercase tracking-widest">
          <li>
            <a
              href="#about"
              className={`border-l-2 pl-3 transition-colors ${
                activeSection === "about"
                  ? "text-white border-white"
                  : "text-gray-500 border-transparent hover:text-white hover:border-white"
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={`border-l-2 pl-3 transition-colors ${
                activeSection === "experience"
                  ? "text-white border-white"
                  : "text-gray-500 border-transparent hover:text-white hover:border-white"
              }`}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`border-l-2 pl-3 transition-colors ${
                activeSection === "projects"
                  ? "text-white border-white"
                  : "text-gray-500 border-transparent hover:text-white hover:border-white"
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`border-l-2 pl-3 transition-colors ${
                activeSection === "contact"
                  ? "text-white border-white"
                  : "text-gray-500 border-transparent hover:text-white hover:border-white"
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="pt-16 md:pt-20 pl-8 md:pl-12 pr-4 md:pr-6">
        <Socials />
      </div>
    </nav>
  );
}
