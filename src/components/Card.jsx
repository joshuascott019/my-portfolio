const Card = ({ project }) => {
  const { name, img, date, tags, links, short, priority } = project;
  const isFeatured = priority === 1;
  const [year, month, day] = date.split('-');
  const safeDate = new Date(year, month - 1, day);

  return (
    <article className="relative flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm">
      {isFeatured && (
        <span className="absolute left-3 top-3 z-10 rounded-md bg-black px-2 py-1 text-xs font-semibold text-white">
          Featured
        </span>
      )}

      {/* IMAGE */}
      <div className="aspect-video overflow-hidden bg-gray-100">
        {img && (
          <img
            src={img}
            alt={`${name} project preview`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <header>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">
            {safeDate.toLocaleDateString()}
          </p>
        </header>

        <p className="text-sm text-gray-700">{short}</p>

        {/* TAGS */}
        <ul className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* LINKS */}
        <div className="mt-3 flex gap-3 text-sm">
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-blue-600 hover:underline"
            >
              Live
            </a>
          )}
          {links.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-blue-600 hover:underline"
            >
              Repo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;
