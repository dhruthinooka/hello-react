//Remove -React Fragment from file name to use this as index.js file 
//Example on React Fragmemt

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake(){
  return <h1>Lake!</h1>;
}

function SkiResort(){
  return <h1>Ski Resort!</h1>;
}

function App(){
  return (
    <React.Fragment>  
      <Lake/>
      <SkiResort/>
    </React.Fragment>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



/*
<>
    <Lake /> 
    <SkiResort />,
  </>,

*/
