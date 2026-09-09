import { ArrowUp } from "lucide-react";

function Footer() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>Prasanna Venkatesh</strong>
          <span>Full Stack & Mobile Developer</span>
        </div>

        <button
          className="back-top"
          onClick={backToTop}
          aria-label="Back to top"
        >
          Back to top
          <ArrowUp size={17} />
        </button>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Prasanna Venkatesh
        </span>

        <span>Built with React</span>
      </div>
    </footer>
  );
}

export default Footer;