import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import profileImage from "../assets/images/profile.jpeg";

function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero section">
      <div className="hero-grid" />

      <div className="container hero-content">
        {/* Hero Text */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">
            FULL STACK & MOBILE DEVELOPER
          </span>

          <h1>
            Building digital
            <span> experiences</span>
            <br />
            that solve real problems.
          </h1>

          <p>
            I'm Prasanna Venkatesh, a Full Stack and Mobile Application
            Developer focused on building responsive web applications,
            cross-platform mobile experiences, and RESTful APIs.
          </p>

          {/* Hero Buttons */}
          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={scrollToProjects}
            >
              View My Work
              <ArrowDown size={18} />
            </button>

            <a
              className="btn btn-secondary"
              href="/resume/Prasanna-Venkatesh-Resume.pdf"
              download
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          {/* Social Links */}
          <div className="social-links">
            {/* GitHub */}
            <a
              href="https://github.com/Prasanna2944"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={21} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/prasanna-venkatesh-s-76304b240"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={21} />
            </a>

            {/* Email */}
            <a
              href="mailto:prasanna2944@gmail.com"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="profile-orbit orbit-one" />
          <div className="profile-orbit orbit-two" />

          <div className="profile-card">
            <div className="profile-image-wrapper">
              <img
                src={profileImage}
                alt="Professional profile"
                className="profile-image"
              />
            </div>

            <div className="profile-status">
              <span />
              Available for opportunities
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;