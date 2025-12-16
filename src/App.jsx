import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import NavBar from './components/UI/NavBar.jsx';
import Footer from './components/UI/Footer.jsx';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
