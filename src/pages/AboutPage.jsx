const AboutPage = () => {
  return (
    <main className="bg-white px-4 py-16">
      <section className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold text-gray-900">About Me</h1>

        <p className="mt-6 text-gray-700 leading-relaxed">
          I’m a frontend web developer focused on building responsive,
          maintainable interfaces with HTML, CSS, JavaScript, and React. I learn
          by building and shipping real projects, with attention to structure,
          performance, and clean component design.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Most of my experience comes from hands-on project work—designing
          layouts, managing state, organizing reusable components, and deploying
          applications. I prioritize clarity in both UI and code. My goal is not
          just to make things work, but to make them understandable and
          scalable.{' '}
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          I’m currently strengthening my understanding of backend
          fundamentals—Node.js, Express, and relational databases—to better
          support full application development. My primary focus, however,
          remains modern frontend workflows and building production-ready
          interfaces.{' '}
        </p>

        <div className="mt-10">
          <h2 className="text-xl font-medium text-gray-900">Current Focus</h2>

          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>React and modern component architecture</li>
            <li>State management and application structure</li>
            <li>Performance and responsive design</li>
            <li>Building and deploying practical frontend projects</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
