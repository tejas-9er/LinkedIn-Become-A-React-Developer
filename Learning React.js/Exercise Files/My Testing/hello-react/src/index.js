import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello(props){
  console.log(Object.keys(props));
  return (
    <div>
      <h1>Welcome to {props.library}!</h1>
      <p>{props.message}</p>
      <p>{Object.keys(props).length} Props Total</p>
    </div>
  );/* Dynamic numbers for props */
}

ReactDOM.render(
  <Hello
  library="React"
  message="add dynamic data"
  number = {3}/* This is how to write numbers */
  />,
  document.getElementById("root")
);
