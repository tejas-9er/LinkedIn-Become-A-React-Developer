import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Checkbox(){
  const [checked, setChecked] = useState(false);
  return(
  <>
    <input
    type = "checkbox"
    value = {checked}
    onChange={() =>
      setChecked(checked => !checked)
    }
    />
    {checked ? "checked" : "not checked"}
  </>
  );
}

ReactDOM.render(
  <Checkbox />,
  document.getElementById("root")
);
