import React from 'react';
import logo from '../images/logo.png'; // Tell webpack this JS file uses this image
import "../styles/logo.css"

console.log(logo); // /logo.84287d09.png

function Logo() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Logo;