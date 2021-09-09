import React from "react";
import Image from "./Image";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="Container">
      <div className="App">
        <footer>
          <a href="https://github.com/ASV185/my-weather-app-project">
            Open-source code {""}
          </a>
          by Amanda Ventura
        </footer>
        <div id="root"></div>
      </div>
      <Image />
      <Weather/>
    </div>
  );
}

export default App;
