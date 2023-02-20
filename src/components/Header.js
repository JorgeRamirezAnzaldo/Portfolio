import React from 'react';
import Navigation from './Navigation';
import backgroundHeader from '../images/FondoPaginaWeb.png';

const styles = {
    header : {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        color: "white",
        //backgroundImage: "linear-gradient(rgb(5, 61, 87, 0.6) 0%, rgb(5, 61, 87, 1) 100%",
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

function Header({currentPage, handlePageChange}) {
    return (
        <div style = {styles.header}>
            <h1 style = {styles.heading}>Jorge Alejandro Ramírez Anzaldo</h1>
            <Navigation style = {styles.nav} currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );

    }



export default Header;