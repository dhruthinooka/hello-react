//Remove -jsxTemplate from file name to use this as index.js file 
//Example on using the JSX template and add css effect to the h1 tag 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = "Madrid";


ReactDOM.render(
  <h1 id= "heading" className="cool-text">Hello from {city}</h1>, 
  document.getElementById('root')
);
