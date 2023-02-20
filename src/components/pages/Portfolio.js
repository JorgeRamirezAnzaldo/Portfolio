import React from 'react';
import Project from '../Project';
import '../../styles/Style.css';
import editorImage from '../../images/Editor.JPG';
import synesthesiaImage from '../../images/Synesthesia.JPG';
import orderManagerImage from '../../images/OrderManager.JPG';
import weatherImage from '../../images/Weather.JPG';
import notepadImage from '../../images/Notepad.JPG';
import agendaImage from '../../images/Agenda.JPG';

const apps = [
  {
    title: "Synesthesia",
    appLink: "https://djonguitud.github.io/synesthesia-project/",
    appGithub: "https://github.com/djonguitud/synesthesia-project",
    lesson: "Integration project 1",
    image: synesthesiaImage
  },
  {
    title: "Order Manager",
    appLink: "https://order-manager-application.herokuapp.com/",
    appGithub: "https://github.com/jaime-a-esquivel-a/OrderManager",
    lesson: "Integration project 2",
    image: orderManagerImage
  },
  {
    title: "Text Editor",
    appLink: "https://editor-texto-jate.herokuapp.com/",
    appGithub: "https://github.com/JorgeRamirezAnzaldo/Editor-Texto",
    lesson: "PWA",
    image: editorImage
  },
  {
    title: "Weather Dashboard",
    appLink: "https://jorgeramirezanzaldo.github.io/Tablero-Meteorologico/",
    appGithub: "https://github.com/JorgeRamirezAnzaldo/Tablero-Meteorologico",
    lesson: "Server-side APIs",
    image: weatherImage
  },
  {
    title: "Notepad",
    appLink: "https://cuaderno-de-notas.herokuapp.com/",
    appGithub: "https://github.com/JorgeRamirezAnzaldo/Cuaderno-de-Notas",
    lesson: "Express",
    image: notepadImage
  },
  {
    title: "Daily agenda",
    appLink: "https://jorgeramirezanzaldo.github.io/Agenda-diaria/",
    appGithub: "https://github.com/JorgeRamirezAnzaldo/Agenda-diaria",
    lesson: "Third party APIs",
    image: agendaImage
  },
];

function Portfolio() {
  return (
    <div>
      <h2 className="portfolioHeading">Portfolio</h2>
      <section className="projectContainer">
        {/* TODO: Utilice el metodo `map` para iterar sobre cada elemento `grocery` y regrese un elemento `li` que contenga el nombre del elemento y un atributo único*/}
        {apps.map((application) => {
          return (
            <Project application = {application}/>
          );
        })}
      </section>
    </div>
  );
}

export default Portfolio;