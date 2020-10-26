import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(){
  const[val, setVal] = useState("");
  const[val2, setVal2] = useState("");

  useEffect(() => {
    console.log(`field 1: ${val}`);
  });

  useEffect(() => {
    console.log(`field 2: ${val2}`);
  });

  return(
    <>
      <label>
        Favorite phrase
      </label>
      <input
      value = {val}
      onChange={e => setVal(e.target.value)}/>
      <br />
      <label>
        Second favorite phrase
      </label>
      <input
      value = {val2}
      onChange={e => setVal2(e.target.value)}/>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
