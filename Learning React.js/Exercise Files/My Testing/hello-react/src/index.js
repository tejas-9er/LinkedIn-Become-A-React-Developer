import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake(props){
  return <h1>{props.name}</h1>
}

function App(){
  return  <div>
    <Lake name = "Lake Taho" />
    <Lake name = "Shirley Lake" />
    <Lake name = "Angora Lake" />
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
