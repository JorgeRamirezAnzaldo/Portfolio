//Import react
import React from 'react';
//Import Project component
import Project from '../Project';
//Import styles from Style.css file
import '../../styles/Style.css';
//Import images for the applications
import editorImage from '../../images/Editor.JPG';
import synesthesiaImage from '../../images/Synesthesia.JPG';
import orderManagerImage from '../../images/OrderManager.JPG';
import schoolGuardianImage from '../../images/SchoolGuardian.JPG';
import weatherImage from '../../images/Weather.JPG';
import notepadImage from '../../images/Notepad.JPG';
import agendaImage from '../../images/Agenda.JPG';

//Create an object array with the data of all the applications to be displayed in the portfolio section
const apps = [
  {
    title: "Synesthesia",
    appLink: "https://djonguitud.github.io/synesthesia-project/",
    appGithub: "https://github.com/djonguitud/synesthesia-project",
    lesson: "Integration project 1",
    image: synesthesiaImage,
    id: 1
  },
  {
    title: "Order Manager",
    appLink: "https://order-manager-application.herokuapp.com/",
    appGithub: "https://github.com/jaime-a-esquivel-a/OrderManager",
    lesson: "Integration project 2",
    image: orderManagerImage,
    id: 2
  },
  {
    title: "School Guardian",
    appLink: "https://school-guardian.herokuapp.com/",
    appGithub: "https://github.com/JorgeRamirezAnzaldo/SchoolGuardian",
    lesson: "Integration project 3",
    image: schoolGuardianImage,
    id: 3
  },
  {
    title: "Text Editor",
    appLink: "https://editor-texto-jate.herokuapp.com/",
    appGithub: "https://github.com/JorgeRamirezAnzaldo/Editor-Texto",
    lesson: "PWA",
    image: editorImage,
    id: 4
  },
  {
    title: "Weather Dashboard",
    appLink: "https://jorgeramirezanzaldo.github.io/Tablero-Meteorologico/",
    appGithub: "https://github.com/JorgeRamirezAnzaldo/Tablero-Meteorologico",
    lesson: "Server-side APIs",
    image: weatherImage,
    id: 5
  },
  {
    title: "Notepad",
    appLink: "https://cuaderno-de-notas.herokuapp.com/",
    appGithub: "https://github.com/JorgeRamirezAnzaldo/Cuaderno-de-Notas",
    lesson: "Express",
    image: notepadImage,
    id: 6
  },
  {
    title: "Daily agenda",
    appLink: "https://jorgeramirezanzaldo.github.io/Agenda-diaria/",
    appGithub: "https://github.com/JorgeRamirezAnzaldo/Agenda-diaria",
    lesson: "Third party APIs",
    image: agendaImage,
    id: 7
  },
];

//Define function to return all the Portfolio elements
function Portfolio() {
  return (
    <div>
      <h2 className="portfolioHeading">Portfolio</h2>
      <section className="projectContainer">
        {/*Iterate over the applications array to display each application in the portfolio using the Project component*/}
        {apps.map((application) => {
          return (
            <Project application = {application} key={application.id}/>
          );
        })}
      </section>
    </div>
  );
}

//Export Portfolio
export default Portfolio;