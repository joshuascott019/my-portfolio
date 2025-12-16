import Hero from '../components/UI/Hero.jsx';

const HomePage = () => {
  return (
    <div>
      <Hero />

      {/* ABOUT SECTION */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            About Me
          </h2>

          <p className="max-w-3xl text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            doloremque nostrum aliquam eaque? Quam, eligendi tempore
            perspiciatis nam laborum nihil tempora. Dignissimos iure magnam
            cupiditate! Temporibus dolore possimus voluptate aut!
          </p>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900">
            Experience
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>
              <span className="font-medium text-gray-900">
                Personal & Portfolio Projects
              </span>{' '}
              — Built multiple React-based applications focusing on performance,
              accessibility, and clean UI.
            </li>

            <li>
              <span className="font-medium text-gray-900">
                Fullstack Learning & Practice
              </span>{' '}
              — Working with Node.js, Express, SQL, and PostgreSQL to build
              end-to-end applications.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
