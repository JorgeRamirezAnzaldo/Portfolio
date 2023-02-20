import React from 'react';
import { FaGithub } from 'react-icons/fa';

const styles = {
  title:{
    display: "inline-block",
    marginRight: "10px",
    fontSize: "28px",
    color: "black"
  },
  lesson:{
    fontSize: "22px",
    color: "black",
    marginLeft: "20px"
  },
  icon:{
    marginBottom: "10px",
    fill: "black"
  },
}

function Project({application}) {
  return (
    <section className="appSection" style={{background: `url(${application.image})`, backgroundSize: "cover"}} > 
      <div className = "appData">
        <a className="appLink" href={application.appLink} target="_blank">
            <h3  style={styles.title}>{application.title}</h3>
        </a>
        <a className="appLink" href={application.appGithub} target="_blank"><FaGithub size={28} style={styles.icon}></FaGithub></a>
        <h4 style={styles.lesson}>{application.lesson}</h4>
      </div>
      
      
    </section>
  );
}

export default Project;