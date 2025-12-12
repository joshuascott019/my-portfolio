const NavBar = ({ setCurrentPage }) => {
  return (
    <div>
      <div>
        <h3>Lorem Ipsum</h3>
      </div>
      <div>
        <button onClick={() => setCurrentPage('Home')}>Home</button>
        <button onClick={() => setCurrentPage('About')}>About</button>
        <button onClick={() => setCurrentPage('Portfolio')}>Portfolio</button>
        <button onClick={() => setCurrentPage('Contact')}>Contact</button>
      </div>
    </div>
  );
};
export default NavBar;
