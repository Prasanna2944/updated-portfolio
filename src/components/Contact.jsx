import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="contact-content">
            <span className="eyebrow">05 — CONTACT</span>

            <h2>
              Let's build something
              <span> useful.</span>
            </h2>

            <p>
              I'm currently interested in opportunities where I can
              contribute as a Full Stack, Frontend, Backend, or Mobile
              Developer while continuing to grow as a software
              engineer.
            </p>

            <div className="contact-location">
              <MapPin size={18} />
              <span>Coimbatore, Tamil Nadu</span>
            </div>
          </div>

          <div className="contact-actions">
            {/* Email Button */}
            <a
              href="mailto:prasanna2944@gmail.com"
              className="btn btn-primary"
            >
              <Mail size={18} />
              <span>Email Me</span>
              <ArrowUpRight size={17} />
            </a>

            {/* Social Links */}
            <div className="contact-socials">
              {/* GitHub */}
              <a
                href="https://github.com/Prasanna2944"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <span className="social-icon">
                  <FaGithub size={20} />
                </span>

                <span className="social-name">GitHub</span>

                <ArrowUpRight
                  size={16}
                  className="social-arrow"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/prasanna-venkatesh-s-76304b240"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <span className="social-icon">
                  <FaLinkedin size={20} />
                </span>

                <span className="social-name">LinkedIn</span>

                <ArrowUpRight
                  size={16}
                  className="social-arrow"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;