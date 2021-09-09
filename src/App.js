import React from "react";
import Image from "./Image";
import "./App.css";


function App() {
  return (
    <div className="Container">
      <div className="App">
        <footer>
          <a href="https://github.com/ASV185/weather-react">
            Open-source code {""}
          </a>
          by Amanda Ventura
        </footer>
        <div id="root"></div>
      </div>
      <Image />
    </div>
  );
}

export default App;
