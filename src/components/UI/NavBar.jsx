import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div>
        <h3>Lorem Ipsum</h3>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};
export default NavBar;
