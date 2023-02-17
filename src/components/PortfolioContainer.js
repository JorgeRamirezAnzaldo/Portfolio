import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
const apps = [
  {
    title: "Title 1",
    appLink: "Link1",
    appGithub: "Github1",
    lesson: "Lesson1"
  },
  {
    title: "Title 2",
    appLink: "Link2",
    appGithub: "Github2",
    lesson: "Lesson2"
  },
  {
    title: "Title 3",
    appLink: "Link3",
    appGithub: "Github3",
    lesson: "Lesson3"
  },
];

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio applications = {apps}/>;
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
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
      <Footer/>
    </div>
  );
}