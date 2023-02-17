import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import '../styles/index.css'

const styles = {
  backgroundImage: "linear-gradient(rgba(5, 87, 76, 0.5) 0%, rgb(5, 61, 87, 1) 100%"
}

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={styles}>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <div className="container">
        {renderPage()}
      </div>
      <Footer/>
    </div>
  );
}