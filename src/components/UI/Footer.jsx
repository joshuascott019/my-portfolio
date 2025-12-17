import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
        <p className="text-sm">
          © {new Date().getFullYear()} Josh — Frontend Web Developer
        </p>

        <nav className="flex gap-4 text-sm">
          <Link to="/projects" className="hover:underline">
            Projects
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <a
            href="https://github.com/joshuascott019"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joshua-scott-295a3b265/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
