import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MapPin,
  Smartphone,
  Database,
  Server,
  Navigation,
} from "lucide-react";

// SEDDY screenshots
import driverHomeImage from "../assets/images/seddy/driver-home.jpeg";
import mechanicJobImage from "../assets/images/seddy/mechanic-job.jpeg";
import activeRequestImage from "../assets/images/seddy/active-request.jpeg";
import mechanicOnlineImage from "../assets/images/seddy/mechanic-online.jpeg";
import registerImage from "../assets/images/seddy/register.jpeg";
import loginImage from "../assets/images/seddy/login.jpeg";

const screenshots = [
  {
    src: driverHomeImage,
    title: "Driver Home",
  },
  {
    src: mechanicJobImage,
    title: "Mechanic Job Request",
  },
  {
    src: activeRequestImage,
    title: "Active Service Request",
  },
  {
    src: mechanicOnlineImage,
    title: "Mechanic Online",
  },
  {
    src: registerImage,
    title: "Account Registration",
  },
  {
    src: loginImage,
    title: "User Login",
  },
];

function SeddyCaseStudy({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="case-study-modal"
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 30,
          }}
          onClick={(event) => event.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close case study"
          >
            <X size={22} />
          </button>

          {/* Hero */}
          <div className="case-study-hero">
            <span className="eyebrow">
              MASTER'S PROJECT
            </span>

            <h2>
              SEDDY — Your Service Buddy
            </h2>

            <p>
              A cross-platform mobile roadside assistance
              application designed to connect drivers
              experiencing vehicle breakdowns with nearby
              mechanics.
            </p>

            <div className="case-study-tags">
              <span>React Native</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Location Services</span>
            </div>
          </div>

          {/* Problem */}
          <div className="case-study-section">
            <h3>Problem</h3>

            <p>
              Vehicle breakdowns can become difficult to
              handle when drivers are in unfamiliar
              locations. SEDDY was designed around the
              idea of making it easier for drivers to
              request roadside assistance and connect
              with available mechanics.
            </p>
          </div>

          {/* Solution */}
          <div className="case-study-section">
            <h3>Solution</h3>

            <div className="solution-grid">
              <div>
                <MapPin size={22} />

                <h4>
                  Location-based assistance
                </h4>

                <p>
                  Helps connect drivers with nearby
                  service providers.
                </p>
              </div>

              <div>
                <Smartphone size={22} />

                <h4>
                  Cross-platform mobile UI
                </h4>

                <p>
                  Built the mobile experience using
                  React Native.
                </p>
              </div>

              <div>
                <Server size={22} />

                <h4>MERN backend</h4>

                <p>
                  Uses Node.js, Express.js and MongoDB
                  for application services and data
                  management.
                </p>
              </div>

              <div>
                <Navigation size={22} />

                <h4>Service workflow</h4>

                <p>
                  Designed separate driver and mechanic
                  workflows for service requests.
                </p>
              </div>
            </div>
          </div>

          {/* Application Screens */}
          <div className="case-study-section">
            <h3>Application Screens</h3>

            <div className="seddy-gallery">
              {screenshots.map((screen) => (
                <div
                  className="seddy-screen"
                  key={screen.src}
                >
                  <div className="seddy-screen-image">
                    <img
                      src={screen.src}
                      alt={screen.title}
                    />
                  </div>

                  <span>{screen.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div className="case-study-section">
            <h3>
              Architecture & Technologies
            </h3>

            <div className="architecture">
              <div className="architecture-box">
                <Smartphone size={25} />

                <strong>
                  React Native
                </strong>

                <span>
                  Mobile Application
                </span>
              </div>

              <div className="architecture-line" />

              <div className="architecture-box">
                <Server size={25} />

                <strong>
                  Node + Express
                </strong>

                <span>
                  REST API Layer
                </span>
              </div>

              <div className="architecture-line" />

              <div className="architecture-box">
                <Database size={25} />

                <strong>
                  MongoDB
                </strong>

                <span>
                  Data Layer
                </span>
              </div>
            </div>
          </div>

          {/* Deployment Note */}
          <div className="case-study-note">
            <strong>
              Deployment status:
            </strong>

            <span>
              The application currently runs locally
              with MongoDB Atlas and can be presented
              as a development project. Cloud deployment
              can be added later.
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SeddyCaseStudy;