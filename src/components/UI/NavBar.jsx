import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const btnStyle = ({ isActive }) =>
    isActive
      ? 'bg-blue-600 rounded-lg px-4 py-2 transition'
      : 'hover:text-blue-600 rounded-lg px-4 py-2 transition';

  return (
    <nav className="w-full bg-gray-900 text-white">
      <div className="flex items-center justify-between py-4 px-24">
        <div>
          <h3 className="w-min font-Montserrat text-3xl font-bold text-blue-300 leading-7">
            Joshua Scott
          </h3>
        </div>
        <div className="flex gap-16 p-4 text-lg">
          <NavLink className={btnStyle} to="/">
            Home
          </NavLink>
          <NavLink className={btnStyle} to="/about">
            About
          </NavLink>
          <NavLink className={btnStyle} to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink className={btnStyle} to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
