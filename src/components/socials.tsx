import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex space-x-6 text-2xl text-muted-foreground">
      <a
        href="https://github.com/jnboakye"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors duration-200"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/jeffrey-nana-boakye/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors duration-200"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://instagram.com/jnboakye2131"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors duration-200"
      >
        <FaInstagram />
      </a>
    </div>
  );
}
