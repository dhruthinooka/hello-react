//Remove -useEffect1 from file name to use this as index.js file
//Example to render checkbox by displaying the state value whether checked or not using useEffect

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Checkbox(){
  const [checked, setChecked] = useState(false);
  useEffect(()=> {
    alert(`checked: ${checked.toString()}`);
  }

  )
  return (
    <>
      <input type="checkbox" value={checked} onChange={() =>setChecked(checked => !checked)}/>
      {checked ? "checked" : "not checked"}
    </> 
  );
}

ReactDOM.render(
  <Checkbox/>,
  document.getElementById("root")
);

