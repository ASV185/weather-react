import React from "react";
import Information from "./Information";
import Form from "./Form";
import Image from "./Image";
import Units from "./Units";
import "./App.css";

function App() {
  return (
    <div className="Container">
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
        <footer>
          <a href="https://github.com/ASV185/my-weather-app-project">
            Open-source code {""}
          </a>
          by Amanda Ventura
        </footer>
        <Units />
        <Image />
        <Form />
        <Information />
        <div id="root"></div>
      </div>
    </div>
  );
}

export default App;
