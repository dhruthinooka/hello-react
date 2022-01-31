//Remove -fetchdataandavatarwithuseEffect from file name to use this as index.js file 
//Example on fetching the github login name and avatar with useEffect

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
    return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} width={100}/>
      </div>
    )
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
