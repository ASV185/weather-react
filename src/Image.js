import React from "react";
import "./Image.css";


export default function Image() {
  return (
    <div className="Container">
      <div className="Image">
        <img
          src="images/day sky.jpg"
          className="DaySky"
          alt="Daysky Logo"
          width={1000}
        />
      </div>
    </div>
  );
}
