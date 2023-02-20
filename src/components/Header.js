//Import react
import React from 'react';
//Import Navigation component
import Navigation from './Navigation';
//Import image for header background
import backgroundHeader from '../images/FondoPaginaWeb.png';

//Define styles for the header elements
const styles = {
    header : {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        color: "white",
        background: `url(${backgroundHeader})`,
        backgroundSize: "cover",
        height: "300px"
    },
    heading: {
        fontSize: "34px",
        marginLeft: "40px",
        backgroundColor:"rgb(36, 84, 100)"
    },
    nav: {
        fontSize: "3rem",
        marginLeft: "auto",
        marginRight: "20px"
    }
}

//Define function to return header elements with proper styles, navigation bar with links is included here
function Header({currentPage, handlePageChange}) {
    return (
        <div style = {styles.header}>
            <h1 style = {styles.heading}>Jorge Alejandro Ramírez Anzaldo</h1>
            <Navigation style = {styles.nav} currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );

    }

//Export Header
export default Header;