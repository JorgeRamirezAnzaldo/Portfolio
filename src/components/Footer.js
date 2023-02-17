import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

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


function Footer() {
    return (
        <div style={styles.footer}>
            <nav> 
                <ul style={styles.list}>
                    <li class="elementIcon"><a href="https://github.com/JorgeRamirezAnzaldo" target="_blank"><FaGithub size={50} style={styles.icon}></FaGithub></a></li>
                    <li class="elementIcon"><a href="https://www.linkedin.com/in/jorge-alejandro-ram%C3%ADrez-anzaldo-b1350010a/" target="_blank"><FaLinkedin size={50} style={styles.icon}></FaLinkedin></a></li>
                    <li class="elementIcon"><a href="" target="_blank"><FaTwitterSquare size={50} style={styles.icon}></FaTwitterSquare></a></li>
                </ul>
            </nav>
        </div>
            
    );


}

export default Footer;