import React from "react";
import "./Image.css";
import Weather from "./Weather";


export default function Image() {
  return (
    <div className="Container">
      <div className="Footer">
          <footer>
          <a href="https://github.com/ASV185/weather-react" target="_blank"rel="noopener noreferrer">
            Open-source code {""}
          </a>
          by Amanda Ventura
          </footer>
        <Weather/>
      </div>
    </div>
  );
}
