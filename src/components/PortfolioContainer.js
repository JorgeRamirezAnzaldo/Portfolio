//Import react and useState
import React, { useState } from 'react';
//Import Header component
import Header from './Header';
//Import About page
import About from './pages/About';
//Import Portfolio page
import Portfolio from './pages/Portfolio';
//Import Contact page
import Contact from './pages/Contact';
//Import Resume page
import Resume from './pages/Resume';
//Import Footer component
import Footer from './Footer';
//Import styles from index.css
import '../styles/index.css'

//Define styles for the portfolio container
const styles = {
  backgroundImage: "linear-gradient(rgba(5, 87, 76, 0.5) 0%, rgb(5, 61, 87, 1) 100%"
}

//Define function to return portfolio container elements and functions
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About'); //Define About page as the initial page

  //Define function to render the page based on the currentPage state
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

  //Function to change the currentPage based on the selected navigation link
  const handlePageChange = (page) => setCurrentPage(page);

  //Return portfolio container elements including the Header and Footer always fixed and the page selected by user
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