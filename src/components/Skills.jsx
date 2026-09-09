import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Wrench,
  Sparkles,
} from "lucide-react";

import { skillCategories } from "../data/skills";

const iconMap = {
  Code2,
  Server,
  Wrench,
  Sparkles,
};

function Skills() {
  return (
    <section id="skills" className="section section-muted">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-number">02</span>

          <div>
            <span className="eyebrow">TECHNICAL SKILLS</span>
            <h2>Tools I use to build.</h2>
          </div>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon];

            return (
              <motion.div
                className="skill-card"
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="skill-card-header">
                  <div className="icon-box">
                    <Icon size={21} />
                  </div>

                  <h3>{category.title}</h3>
                </div>

                <div className="skill-tags">
                  {category.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;