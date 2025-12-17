import Card from './Card.jsx';

const CardList = ({ projects }) => {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <li key={project.id}>
          <Card project={project} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
