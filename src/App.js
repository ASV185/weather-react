import React from "react";
import Image from "./Image";
import "./App.css";
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
        <Weather defaultcity="El Paso"/>
        <div id="root"></div>
      <Image />
      <footer>
          <a href="https://github.com/ASV185/weather-react" target="_blank"rel="noopener noreferrer">
            Open-source code {""}
          </a>
          by Amanda Ventura
    </footer>
    </div>
    
  );
}

export default App;
