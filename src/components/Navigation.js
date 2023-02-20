//Import react
import React from 'react';
//Import styles from Style.css file
import '../styles/Style.css';

//Define styles for navigation list
const listStyles = {
        list: {
                display: "inline-flex",
                flexWrap: "wrap",
                listStyleType: "none",
                marginRight: "20px"
        },
    }

//Define function to return navigation bar with links as list elements
function Navigation({currentPage, handlePageChange}) {
    return (
        <ul style={listStyles.list} className="listelement">
            <li><a  href="#about"
                    onClick = {() => handlePageChange("About")}
                    className = {currentPage === "About" ? "active-link" : "inactive-link"}>About me</a></li>
            <li><a  href="#portfolio"
                    onClick = {() => handlePageChange("Portfolio")}
                    className = {currentPage === "Portfolio" ? "active-link" : "inactive-link"}>Portfolio</a></li>
            <li><a  href="#contact"
                    onClick = {() => handlePageChange("Contact")}
                    className = {currentPage === "Contact" ? "active-link" : "inactive-link"}>Contact</a></li>
            <li><a  href="#resume"
                    onClick = {() => handlePageChange("Resume")}
                    className = {currentPage === "Resume" ? "active-link" : "inactive-link"}>Resume</a></li>
        </ul>
    );


}

//Export Navigation
export default Navigation;
