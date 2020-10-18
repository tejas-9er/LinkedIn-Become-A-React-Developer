import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  React.createElement(
    "ul",
    {style: {color: "blue"}},
    React.createElement("li", null, "Hot Dogs"),
    React.createElement("li", null, "Burger"),
    React.createElement("li", null, "Pizza"),
    React.createElement("li", null, "Sushi"),
    ),
  document.getElementById("root")
);

