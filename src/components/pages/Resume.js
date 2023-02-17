import React from 'react';
import resumeFile from "../../assets/files/Resume.pdf";
const styles = {
    heading: {
        marginTop: "20px",
        color: "white",
        fontSize: "30px",
        fontWeight: "bold"
    },
    text: {
        color: "white",
        fontSize: "22px"
    },
    link: {
        color: "blue"
    }
  }

function Resume() {
    return (
        <div>
            <h2 style={styles.heading}>Resume</h2>
            <p style={styles.text}>Download my <a style={styles.link} href= {resumeFile} download>Resume</a></p>
            <h2 style={styles.heading}>Front-end Proficiencies</h2>
            <ul className="profList">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>Responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>

            </ul>
            <h2 style={styles.heading}>Back-end Proficiencies</h2>
            <ul className="profList">
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
            </ul>
        </div>
    );

}

export default Resume;