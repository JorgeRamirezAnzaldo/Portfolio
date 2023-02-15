import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

function Footer() {
    return (
        <nav> 
            <ul>
                <li><a href="https://github.com/JorgeRamirezAnzaldo"><FaGithub></FaGithub></a></li>
                <li><a href="https://www.linkedin.com/in/jorge-alejandro-ram%C3%ADrez-anzaldo-b1350010a/"><FaLinkedin></FaLinkedin></a></li>
                <li><a href=""><FaTwitterSquare></FaTwitterSquare></a></li>
            </ul>
        </nav>    
    );


}

export default Footer;