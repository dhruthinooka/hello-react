//Remove -useEffect2 from file name to use this as index.js file 
//Example to play around with useEffect dependency array
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function App() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  useEffect( () => {
    console.log(`field 1 is: ${val}`);
  }, [val])

  useEffect( () => {
    console.log(`field 2 is: ${val2}`);
  }, [val2])

  return(
  <>
    <label>Favorite phrase: <input value = {val} onChange={e => setVal(e.target.value)}/></label> 
    <br />
    <label>Second Favorite phrase: <input value = {val2} onChange={e => setVal2(e.target.value)}/></label> 
  </>
  );
}


ReactDOM.render(
  <App/>,
  document.getElementById("root")
);

