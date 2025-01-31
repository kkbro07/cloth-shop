// Login.js
import React from 'react';
import LoginComponent from '../Components/account/Login/Login'; // Correct import
import useDocumentTitle from './useDocumentTitle'; // Import the custom hook

const Login = () => {
  useDocumentTitle("Login - Overlays Clothing"); // Set the page title

  return (
    <div>
      <br />
      <LoginComponent /> {/* Correct usage */}
    </div>
  );
};

export default Login;
