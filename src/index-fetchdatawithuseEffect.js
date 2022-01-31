//Remove -fetchdatawithuseEffect from file name to use this as index.js file 
//Example on fetching the data with useEffect

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 
function GithubUser({ login }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then(res => res.json())
    .then(setData)
    .catch(console.error);  
  }, []);

  if(data) {
    return <div>{JSON.stringify(data)}</div>;
  }
  return null;
}

function App() {
  return <GithubUser login = "dhruthinooka"/>;
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
