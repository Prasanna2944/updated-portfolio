import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Smartphone,
  Code2,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    text: "Building responsive applications using modern frontend and backend technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    text: "Developing cross-platform mobile experiences using React Native.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Practical Experience",
    text: "Hands-on internship experience working with MERN stack development.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    text: "Focused on improving software architecture, debugging, and development practices.",
  },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-number">01</span>
          <div>
            <span className="eyebrow">ABOUT ME</span>
            <h2>Turning ideas into working products.</h2>
          </div>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="large-text">
              I'm a developer who enjoys working across the full
              application stack — from designing interfaces to building
              APIs and connecting applications with databases.
            </p>

            <p>
              My experience includes MERN stack development, React Native
              mobile development, RESTful APIs, and practical application
              projects. I'm particularly interested in creating clean,
              responsive interfaces and understanding how the different
              parts of a software system work together.
            </p>

          </motion.div>

          <div className="highlight-grid">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="highlight-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="icon-box">
                    <Icon size={22} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;