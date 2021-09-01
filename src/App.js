import React from "react";
import Information from "./Information";
import Form from "./Form";
import Image from "./Image";
import Units from "./Units";

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
