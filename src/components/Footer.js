//Import react
import React from 'react';
//Import necessary icons from react-icons/fa
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

//Define styles for elements in the footer
const styles = {
    list: {
            display: "inline-flex",
            flexWrap: "wrap",
            listStyleType: "none"
    },
    footer : {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        color: "white",
        height: "300px"
    },
    icon: {
        fill: "white" 
    }
}

//Define function to return footer elements with proper styles
function Footer() {
    return (
        <div style={styles.footer}>
            <nav> 
                <ul style={styles.list}>
                    <li className="elementIcon"><a href="https://github.com/JorgeRamirezAnzaldo" target="_blank"><FaGithub size={50} style={styles.icon}></FaGithub></a></li>
                    <li className="elementIcon"><a href="https://www.linkedin.com/in/jorge-alejandro-ram%C3%ADrez-anzaldo-b1350010a/" target="_blank"><FaLinkedin size={50} style={styles.icon}></FaLinkedin></a></li>
                    <li className="elementIcon"><a href="https://twitter.com/george091096?lang=es" target="_blank"><FaTwitterSquare size={50} style={styles.icon}></FaTwitterSquare></a></li>
                </ul>
            </nav>
        </div>
            
    );


}

//Export Footer
export default Footer;