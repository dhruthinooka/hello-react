//This is the default file which runs automatically when we run npm start command

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(React.createElement("div", {style: {color: "orange"}}, React.createElement("h1", null, "Hi Dhruthi!")),
  document.getElementById('root')
);
