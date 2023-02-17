import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Project({application}) {
  return (
    <section>
        <a href={application.appLink} target="_blank">
            <h3>{application.title}</h3>
        </a>
        <a href={application.appGithub}><FaGithub></FaGithub></a>
        <h4>{application.lesson}</h4>
    </section>
  );
}

export default Project;