//Import react
import React from 'react';
//Import personal photo
import PersonalPhoto from '../../images/PersonalPhoto.jpeg';

//Define styles for the About page
const styles = {
    photo: {
        height: "250px",
        width: "200px",
        marginTop: "20px"
    },
    heading: {
        marginTop: "20px",
        color: "white",
        fontSize: "30px",
        fontWeight: "bold"
    },
    text:{
        marginTop: "20px",
        color: "white",
        fontSize: "24px"
    }
}

//Define function to return the elements of About page
function About() {
    return (
        <div>
            <h2 style={styles.heading}>About me</h2>
            <img style={styles.photo} src={PersonalPhoto}></img>
            <p style={styles.text}> 
                I am a mechatronics engineer graduated from Instituto Tecnológico y de Estudios Superiores de Monterrey, Campus Estado de México. Currently working as
                        a SAP Consultant in an enterprise named Adcos de México. I am certified as an ABAP developer with SAP Netweaver 7.5. Also, I am certified as an Automator
                        using the Worsoft Certify program to automatize business processes performed using SAP and multiple connected interfaces. I am interested in automation,
                        programming and industrial, manufacturing and processes sectors. I consider myself a responsible person, with leadership and organization capacity, as
                        well as an initiative to solve problems, work as a team, learn and work to achieve the established objectives. 
            </p>
        </div>
    );

}

//Export About
export default About;