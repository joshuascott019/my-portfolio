const AboutPage = () => {
  return (
    <main className="bg-white px-4 py-16">
      <section className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold text-gray-900">About Me</h1>

        <p className="mt-6 text-gray-700 leading-relaxed">
          I’m a frontend web developer with a strong foundation in HTML, CSS,
          JavaScript, and React. I specialize in building clean, responsive
          interfaces with an emphasis on clarity, performance, and
          maintainability.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          I’m currently expanding into full-stack development, working with
          Node.js, Express, and relational databases to better understand how
          modern web applications are built end to end.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Long term, I plan to transition deeper into application security and
          cybersecurity, building on a solid understanding of both frontend and
          backend systems.
        </p>

        <div className="mt-10">
          <h2 className="text-xl font-medium text-gray-900">Current Focus</h2>

          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>react and modern frontend workflows</li>
            <li>node.js, express, and sql fundamentals</li>
            <li>building practical, deployable projects</li>
            <li>learning secure development practices</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
