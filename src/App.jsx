import { useState } from 'react';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';
import NotFound from './pages/NotFound.jsx';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Portfolio':
        return <Portfolio />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div>
      <NavBar setCurrentPage={setCurrentPage} />
      <Hero />
      {renderPage()}
      <Footer />
    </div>
  );
};
export default App;
