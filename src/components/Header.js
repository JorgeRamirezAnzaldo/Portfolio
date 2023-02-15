import React from 'react';
import Navigation from './Navigation';

function Header(currentPage, handlePageChange) {
    return (
        <div>
            <h1>Jorge Alejandro Ramírez Anzaldo</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );

    }



export default Header;