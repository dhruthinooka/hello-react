//Remove -props from file name to use this as index.js file 
//Example on props

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 
function Hello(props) {
  console.log(Object.keys(props));
  return (
    <div> 
      <h1>Welcome to {props.library}!</h1>
      <p>{props.message}</p>
      <p>{Object.keys(props).length} in total</p>
    </div>
  );

}


ReactDOM.render(
  <Hello library ="React JS" message= "Have fun!" number= {3}/>,
  document.getElementById('root')
);

