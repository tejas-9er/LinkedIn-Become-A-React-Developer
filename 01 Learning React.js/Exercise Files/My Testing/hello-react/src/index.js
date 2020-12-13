import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Checkbox(){
  const [checked, toggle] = useReducer(
    checked => !checked,
    false
    );

  return(
    <>
      <input
      type = "checkbox"
      value = {checked}
      onChange={toggle}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
}

ReactDOM.render(
  <Checkbox />,
  document.getElementById("root")
);

/*
To create a production build run following command
npm run build
Above commands creates a build folder
After that to serve the project on static server run following commands
npm install -g serve (to install static server which can be used on our pc)

serve -s build (serves the buld folder on localhost 5000 [The address will be visible after you run the command])

Go to netlify.com
Login with github, or other options
Drag the build folder into netlify and it will deploy it.
*/