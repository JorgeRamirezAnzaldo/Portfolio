import React from 'react';
import Project from './Project';

function Portfolio(props) {
  return (
    <section>
      {/* TODO: Utilice el metodo `map` para iterar sobre cada elemento `grocery` y regrese un elemento `li` que contenga el nombre del elemento y un atributo único*/}
      {props.applications.map((application) => {
        return (
          <Project application = {application}/>
        );
      })}
    </section>
  );
}

export default Portfolio;