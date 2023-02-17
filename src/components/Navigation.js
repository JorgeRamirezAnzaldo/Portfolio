import React from 'react';
import '../styles/Style.css'

const listStyles = {
        list: {
                display: "inline-flex",
                flexWrap: "wrap",
                listStyleType: "none"
        },
    }

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

export default Navigation;
