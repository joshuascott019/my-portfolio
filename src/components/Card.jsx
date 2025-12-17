const Card = ({ project }) => {
  const { name, img, date, tags, links, short } = project;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm">
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
            {new Date(date).toLocaleDateString()}
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
