//Remove -unorderedLists from file name to use this as index.js file 
//Example on rendering unordered Lists to the DOM

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <ul>
      <li>Hot Dogs</li>
      <li>Hamburger</li>
      <li>Pizza</li>
      <li>Sushi</li>
  </ul>, 
  document.getElementById('root')
);
