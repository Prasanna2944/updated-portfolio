import { motion } from "framer-motion";
import { experiences } from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-number">03</span>

          <div>
            <span className="eyebrow">EXPERIENCE</span>
            <h2>Where I've been learning and building.</h2>
          </div>
        </motion.div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.article
              className="experience-card"
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="experience-date">
                <span>{experience.period}</span>
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3>{experience.role}</h3>
                    <h4>
                      {experience.company}
                      <span> · {experience.type}</span>
                    </h4>
                  </div>
                </div>

                <p>{experience.description}</p>

                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="skill-tags">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;