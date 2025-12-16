const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
        <p className="text-sm">
          © {new Date().getFullYear()} Josh — Fullstack Web Developer
        </p>

        <nav className="flex gap-4 text-sm">
          <a href="/projects" className="hover:underline">
            Projects
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-username"
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
