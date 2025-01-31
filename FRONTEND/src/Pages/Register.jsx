// Register.js
import React from 'react';
import RegistrationComponent from '../Components/account/Registration/Registration'; // Correct import
import useDocumentTitle from './useDocumentTitle'; // Import the custom hook for setting the document title

const Register = () => {
  useDocumentTitle("Register - Overlays Clothing"); // Set the page title

  return (
    <div>
      <br />
      <RegistrationComponent />
    </div>
  );
};

export default Register;
