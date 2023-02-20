import React from 'react';
import Project from '../Project';
import '../../styles/Style.css';
import editorImage from '../../images/Editor.JPG';

const apps = [
  {
    title: "Title 1",
    appLink: "Link1",
    appGithub: "Github1",
    lesson: "Lesson1",
    image: editorImage
  },
  {
    title: "Title 2",
    appLink: "Link2",
    appGithub: "Github2",
    lesson: "Lesson2"
  },
  {
    title: "Title 3",
    appLink: "Link3",
    appGithub: "Github3",
    lesson: "Lesson3"
  },
  {
    title: "Title 4",
    appLink: "Link4",
    appGithub: "Github4",
    lesson: "Lesson4"
  },
  {
    title: "Title 5",
    appLink: "Link5",
    appGithub: "Github5",
    lesson: "Lesson5"
  },
  {
    title: "Title 6",
    appLink: "Link6",
    appGithub: "Github6",
    lesson: "Lesson6"
  },
];

function Portfolio() {
  return (
    <section className="projectContainer">
      {/* TODO: Utilice el metodo `map` para iterar sobre cada elemento `grocery` y regrese un elemento `li` que contenga el nombre del elemento y un atributo único*/}
      {apps.map((application) => {
        return (
          <Project application = {application}/>
        );
      })}
    </section>
  );
}

export default Portfolio;