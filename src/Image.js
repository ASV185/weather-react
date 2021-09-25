import React from "react";
import "./Image.css";
import Weather from "./Weather";


export default function Image() {
  return (
    <div className="Container">
      <div className="Image">
        <img
          src="images/grass-mountains.jpg"
          className="grassMountains"
          alt="grassMountains Logo"
          width={1200}
        />
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
