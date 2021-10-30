import React from "react";
import "./Image.css";
import Weather from "./Weather";


export default function Image() {
  return (
    <div className="Container">
      <div className="Image">
        <img
          src="images/grassland.jpg"
          className="grassMountains"
          alt="grassMountains Logo"
          width={900}
        />
          <footer>
          <a href="https://github.com/ASV185/weather-react" target="_blank"rel="noopener noreferrer">
            Open-source code {""}
          </a>
          by Amanda Ventura and image from {""}
          <span className="link">
             unsplash.com {""}
          </span>
            from {""} 
          <div className="photographer">
            Ezra Jeffrey-Comeau
          </div>
          </footer>
        <Weather/>
      </div>
    </div>
  );
}
