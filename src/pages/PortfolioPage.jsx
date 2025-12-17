import { useMemo, useState, useEffect } from 'react';
import CardList from '../components/CardList.jsx';
import projects from '../data/projects.json';

const PortfolioPage = () => {
  const [sortBy, setSortBy] = useState('newest');
  const [activeTags, setActiveTags] = useState([]);
  const PAGE_SIZE = 9;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy, activeTags]);

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

  const totalPages = Math.ceil(visibleProjects.length / PAGE_SIZE);

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return visibleProjects.slice(start, end);
  }, [visibleProjects, currentPage]);

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

        <CardList projects={paginatedProjects} />
        {totalPages > 1 && (
          <nav className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="rounded px-3 py-1 text-sm disabled:opacity-40"
            >
              Prev
            </button>

            {/* DESKTOP PAGE NUMBERS */}
            <div className="hidden sm:flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`rounded px-3 py-1 text-sm ${
                      page === currentPage
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="rounded px-3 py-1 text-sm disabled:opacity-40"
            >
              Next
            </button>
          </nav>
        )}
      </div>
    </section>
  );
};

export default PortfolioPage;
