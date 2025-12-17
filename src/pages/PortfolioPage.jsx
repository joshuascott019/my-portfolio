import { useMemo, useState } from 'react';
import CardList from '../components/CardList.jsx';
import projects from '../data/projects.json';

const PortfolioPage = () => {
  const [sortBy, setSortBy] = useState('newest');

  const sortedProjects = useMemo(() => {
    const copy = [...projects];

    switch (sortBy) {
      case 'oldest':
        return copy.sort((a, b) => new Date(a.date) - new Date(b.date));
      case 'az':
        return copy.sort((a, b) => a.name.localeCompare(b.name));
      case 'za':
        return copy.sort((a, b) => b.name.localeCompare(a.name));
      case 'featured':
        return copy.sort((a, b) => Number(b.featured) - Number(a.featured));
      case 'newest':
      default:
        return copy.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  }, [sortBy]);

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-semibold">Portfolio</h1>
        <div className="mb-6 flex items-center justify-between">
          <label className="text-sm font-medium">
            Sort by:
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="ml-2 rounded border px-2 py-1 text-sm"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="az">A–Z</option>
              <option value="za">Z–A</option>
              <option value="featured">Featured</option>
            </select>
          </label>
        </div>

        <CardList projects={sortedProjects} />
      </div>
    </section>
  );
};

export default PortfolioPage;
