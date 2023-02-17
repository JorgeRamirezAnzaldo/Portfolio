import React, { useState } from 'react';


import { validateEmail } from '../../utils/helpers';

function Contact() {
  // Crear variables de estado para los campos del formulario
  // También estamos configurando sus valores iniciales en una cadena vacía
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  //  TODO: Crear una variable de contraseña y una función "setPassword" usando useState

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Obtener el valor y el nombre de la entrada que desencadenó el cambio
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Según el tipo de entrada, establecemos el estado del correo electrónico, el nombre de usuario y la contraseña
    //  TODO: Agregar otra declaración al final que establecerá la contraseña en el valor "inputValue"

    if (inputType === 'email') {
      if (!email) {
        setErrorMessage('Introduce your email');
        // Queremos salir de este bloque de código si algo está mal para que el usuario pueda corregirlo
        return;
      } else if (!validateEmail(email)) {
        setErrorMessage('Your email is invalid');
        // Queremos salir de este bloque de código si algo está mal para que el usuario pueda corregirlo
        return;
      }
      setEmail(inputValue);
    } else if (inputType === 'name') {
      if (!name) {
        setErrorMessage('Introduce your name');
        // Queremos salir de este bloque de código si algo está mal para que el usuario pueda corregirlo
        return;
      }
      setName(inputValue);
    } else if (inputType === 'message') {
      if (!message) {
        setErrorMessage('Message is required');
        // Queremos salir de este bloque de código si algo está mal para que el usuario pueda corregirlo
        return;
      } 
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Evitar el comportamiento predeterminado del envío del formulario (que es para actualizar la página)
    e.preventDefault();
    // Si se realiza correctamente, queremos borrar la entrada después del registro.
    setName('');
    setEmail('');
    setMessage('');
    //alert(`Hello ${userName}`);
  };

  return (
    <div>
      <form className="form">
      <input
          value={name}
          name="name"
          onMouseOut={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onMouseOut={handleInputChange}
          type="email"
          placeholder="email"
        />
        <textarea
          value={message}
          name="message"
          onMouseOut={handleInputChange}
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
