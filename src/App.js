import React from "react";
import Weather from "./Weather";
import Image from "./Image";
import Units from "./Units";
import "./App.css";

function App() {
  return (
    <div className="Container">
      <div className="App">
        <Weather/>
        <footer>
          <a href="https://github.com/ASV185/my-weather-app-project">
            Open-source code {""}
          </a>
          by Amanda Ventura
        </footer>
        <Units />
        <Image />
      
        <div id="root"></div>
      </div>
    </div>
  );
}

export default App;
