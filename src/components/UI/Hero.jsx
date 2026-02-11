import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative flex min-h-[80vh] items-center bg-gray-50 px-6 overflow-hidden">
      <img
        src="/images/HeroBanner.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-4xl text-left">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
          Hi, I’m Josh.
          <br />
          Frontend Web Developer.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
          I build and deploy fast and responsive web interfaces with React,
          Tailwind, and modern JavaScript.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            to="/portfolio"
            className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
