import { useMemo, useState } from 'react';
import CardList from '../components/CardList.jsx';
import projects from '../data/projects.json';

const PortfolioPage = () => {
  const [sortBy, setSortBy] = useState('newest');
  const [activeTags, setActiveTags] = useState([]);

  const visibleProjects = useMemo(() => {
    let filtered = [...projects];

    if (activeTags.length > 0) {
      filtered = filtered.filter((project) =>
        project.tags.some((tag) => activeTags.includes(tag))
      );
    }

    switch (sortBy) {
      case 'oldest':
        return filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
      case 'az':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case 'za':
        return filtered.sort((a, b) => b.name.localeCompare(a.name));
      case 'featured':
        return filtered.sort((a, b) => Number(b.featured) - Number(a.featured));
      case 'newest':
      default:
        return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  }, [sortBy, activeTags]);

  const allTags = useMemo(() => {
    const tagSet = new Set();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, []);

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

        <div className="mb-6 flex flex-wrap gap-2">
          {allTags.map((tag) => {
            const isActive = activeTags.includes(tag);

            return (
              <button
                key={tag}
                onClick={() =>
                  setActiveTags((prev) =>
                    isActive ? prev.filter((t) => t !== tag) : [...prev, tag]
                  )
                }
                className={`rounded-full px-3 py-1 text-xs font-medium transition
          ${
            isActive
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        <CardList projects={visibleProjects} />
      </div>
    </section>
  );
};

export default PortfolioPage;
