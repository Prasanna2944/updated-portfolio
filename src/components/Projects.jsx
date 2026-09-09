import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Smartphone,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "../data/projects";
import SeddyCaseStudy from "./SeddyCaseStudy";

// Project images
import seddyImage from "../assets/images/seddy/driver-home.jpeg";
import quickCartImage from "../assets/images/projects/quick-cart.png";
import weatherImage from "../assets/images/projects/weather-app.png";
import quizImage from "../assets/images/projects/quiz-app.png";
import expenseImage from "../assets/images/projects/expense-tracker.png";
import todoImage from "../assets/images/projects/todo-app.png";
import portfolioImage from "../assets/images/projects/portfolio.png";

const filters = ["All", "Full Stack", "Frontend", "Mobile"];

const projectImages = {
  "SEDDY — Your Service Buddy": seddyImage,
  "Quick Cart": quickCartImage,
  "Weather App": weatherImage,
  "Quiz App": quizImage,
  "Expense Tracker": expenseImage,
  "Todo List": todoImage,
  "Portfolio": portfolioImage,
};

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showSeddy, setShowSeddy] = useState(false);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section id="projects" className="section section-muted">
      <div className="container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-number">04</span>

          <div>
            <span className="eyebrow">SELECTED WORK</span>

            <h2>Projects that show how I build.</h2>
          </div>
        </motion.div>

        {/* Project Filters */}
        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={
                activeFilter === filter ? "active" : ""
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => {
            const image =
              project.image || projectImages[project.title];

            return (
              <motion.article
                className={`project-card ${
                  project.featured ? "featured-project" : ""
                }`}
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
              >

                {/* Project Image */}
                <div
                  className={`project-image ${
                    project.id === "seddy"
                      ? "mobile-project-image"
                      : ""
                  }`}
                >
                  {image ? (
                    <img
                      src={image}
                      alt={`${project.title} project preview`}
                    />
                  ) : (
                    <div className="project-placeholder">
                      <Smartphone size={38} />
                      <span>Project Preview</span>
                    </div>
                  )}

                  {/* Featured Badge */}
                  {project.featured && (
                    <span className="featured-badge">
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Content */}
                <div className="project-content">

                  <div className="project-topline">
                    <span>{project.category}</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  {/* Technologies */}
                  <div className="skill-tags">
                    {project.technologies
                      .slice(0, 5)
                      .map((tech) => (
                        <span key={tech}>
                          {tech}
                        </span>
                      ))}
                  </div>

                  {/* Actions */}
                  <div className="project-actions">

                    {project.caseStudy ? (
                      <button
                        className="text-button"
                        onClick={() =>
                          setShowSeddy(true)
                        }
                      >
                        View Case Study
                        <ArrowUpRight size={17} />
                      </button>
                    ) : (
                      <>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-button"
                          >
                            Live Demo
                            <ExternalLink size={16} />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="icon-button"
                            aria-label={`${project.title} GitHub`}
                            title="View GitHub repository"
                          >
                            <FaGithub size={20} />
                          </a>
                        )}
                      </>
                    )}

                  </div>
                </div>

              </motion.article>
            );
          })}
        </div>
      </div>

      {/* SEDDY Case Study */}
      {showSeddy && (
        <SeddyCaseStudy
          onClose={() => setShowSeddy(false)}
        />
      )}
    </section>
  );
}

export default Projects;