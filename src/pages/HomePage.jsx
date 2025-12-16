import {
  primaryStack,
  expandingSkillset,
  tools,
  getTenure,
} from '../data/techstack.js';
import Hero from '../components/UI/Hero.jsx';

const HomePage = () => {
  return (
    <div>
      <Hero />

      {/* ABOUT SECTION */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            About Me
          </h2>

          <p className="max-w-3xl text-gray-500">
            I’m a frontend-focused web developer with strong experience building
            responsive, accessible interfaces using React, Tailwind, and modern
            JavaScript. I’m currently expanding into fullstack development with
            Node.js and PostgreSQL, with a long-term interest in application
            security and cybersecurity principles.
          </p>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900">
            Primary Stack & Expanding Skillset
          </h2>

          {/* Primary Stack */}
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-medium text-gray-900">
                Primary Stack
              </h3>
              <ul className="space-y-4">
                {primaryStack.map((tech) => (
                  <li
                    key={tech.name}
                    className="flex items-center gap-4 text-gray-600"
                  >
                    <tech.icon className="text-2xl text-blue-600" />
                    <span className="font-medium text-gray-900">
                      {tech.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {getTenure(tech.start)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expanding Skillset */}
            <div>
              <h3 className="mb-4 text-xl font-medium text-gray-900">
                Expanding Skillset
              </h3>
              <ul className="space-y-4">
                {expandingSkillset.map((tech) => (
                  <li
                    key={tech.name}
                    className="flex items-center gap-4 text-gray-600"
                  >
                    <tech.icon className="text-2xl text-blue-500" />{' '}
                    <span className="font-medium text-gray-900">
                      {tech.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* TOOLS SECTION */}
            {/* TOOLS */}
            <div className="md:col-span-2">
              <h3 className="mb-4 mt-12 text-xl font-medium text-gray-900">
                Tools
              </h3>

              <ul className="flex flex-wrap gap-6">
                {tools.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <Icon className="text-xl text-blue-500" />
                    <span className="text-sm font-medium text-gray-800">
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
