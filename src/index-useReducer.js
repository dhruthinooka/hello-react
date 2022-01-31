//Remove -useReducer from file name to use this as index.js file 
//Example on implementing useReducer in place of useEffect


import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Checkbox(){
  const [checked, toggle] = useReducer(checked => !checked, false);
  
  return (
    <>
      <input type="checkbox" value={checked} 
      onChange={toggle}/>
      {checked ? "checked" : "not checked"}
    </> 
  );
}

ReactDOM.render(
  <Checkbox/>,
  document.getElementById("root")
);
