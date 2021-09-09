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
        <Weather/>
      </div>
    </div>
  );
}
