import CardList from '../components/CardList.jsx';
import projects from '../data/projects.json';

const PortfolioPage = () => {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-semibold">Portfolio</h1>

        <CardList projects={projects} />
      </div>
    </section>
  );
};

export default PortfolioPage;
