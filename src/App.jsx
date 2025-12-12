import { useState } from 'react';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import NavBar from './components/UI/NavBar.jsx';
import Hero from './components/UI/Hero.jsx';
import Footer from './components/UI/Footer.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage />;
      case 'About':
        return <AboutPage />;
      case 'Contact':
        return <ContactPage />;
      case 'Portfolio':
        return <PortfolioPage />;
      default:
        return <NotFoundPage />;
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
