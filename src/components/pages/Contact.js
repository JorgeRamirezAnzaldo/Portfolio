//Import react
import React, { useState } from 'react';
//Import styles from Style.css file
import '../../styles/Style.css';
//Import function from utilities to validate email
import { validateEmail } from '../../utils/helpers';

//Define styles for the Contact page
const styles = {
  heading: {
      marginTop: "20px",
      color: "white",
      fontSize: "30px",
      fontWeight: "bold"
  },
}

//Define function to return elements and functions for Contact page
function Contact() {
  //Create state variables for the input fields in form and set empty string as initial value
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  //Create state variables for the error message and set empty string as initial value
  const [errorMessage, setErrorMessage] = useState('');

  //Define function to handle changes in input fields
  const handleInputChange = (e) => {
    //Get the name and value of the input field that triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    //Based on the input field name, change the state of the input field using the introduced value
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  //Function to validate the input 
  const validateInput = (e) => {
    //Get the name and value of the input field
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    //Validate if email is not empty and has the correct format
    if (inputType === 'email') {
      if (!email) {
        setErrorMessage('Introduce your email'); //Change state of error message
        return;
      } else if (!validateEmail(email)) {
        setErrorMessage('Your email is invalid'); //Change state of error message
        return;
      } else{
        setErrorMessage('');
      }
    } else if (inputType === 'name') { //Validate if name is not empty
      if (!name) {
        setErrorMessage('Introduce your name'); //Change state of error message
        return;
      } else{
        setErrorMessage('');
      }
    } else if (inputType === 'message') { //Validate if message is not empty
      if (!message) {
        setErrorMessage('Message is required'); //Change state of error message
        return;
      } else {
        setErrorMessage('');
      }
      
    }
  }

  //Define function when submitting form
  const handleFormSubmit = (e) => {
    //Prevent default behavior of the form submission
    e.preventDefault();
    //Clean all the input fields by changing their states
    setName('');
    setEmail('');
    setMessage('');
  };

  //Return contact data along with the contact form
  return (
    <div>
      <h2 style={styles.heading}>Contact</h2>
      <ul>
        <li className="contactList">Phone number: <a href="https://wa.me/+525519281738">+52 5519281738</a></li>
        <li className="contactList">Email: <a href="mailto: jaanzaldo@hotmail.com">jaanzaldo@hotmail.com</a></li>
      </ul>
      <form className="form" style={{marginTop:"15px"}}>
        <p className="formTexts">Name:</p>
        <div>
          <input
              value={name}
              name="name"
              onChange = {handleInputChange}
              onMouseOut={validateInput}
              type="text"
              placeholder="name"
              className="form-input w-50"
            /> 
        </div>
        <p className="formTexts">Email address:</p>
        <div>
          <input
            value={email}
            name="email"
            onChange = {handleInputChange}
            onMouseOut={validateInput}
            type="email"
            placeholder="email"
            className="form-input w-50"
          />
        </div>
        <p className="formTexts">Message:</p>
        <div>
          <textarea
            value={message}
            name="message"
            onChange = {handleInputChange}
            onMouseOut={validateInput}
            placeholder="message"
            className="form-input w-50"
          />
        </div>
        <div>
          <button type="button" className="submitButton" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

//Export Contact
export default Contact;
