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
    </div>
    
  );
}

export default App;
