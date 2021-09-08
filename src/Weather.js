import React from "react";
import "./index";
import "./Weather.css";

export default function Weather() {
  return (
     <div className="Weather">
      <form>
          <div className="row">
          <div className="col-3">
          <input type="search" className="form-control" />
          </div>
          <div className="col-1">
          <input type="submit" value="Search"
          className="btn btn-primary"/>
          </div>
          </div>
      </form>
  
      <h1>El Paso</h1>

      <ul>
        <li className="date"></li>
        <li className="time"></li>
        <li className="humidity">Humidity:%</li>
        <li className="wind">Wind:km/h</li>
        <li className="Feels-like">Feels-Like:℃</li>
        <li className="lowTemp">Temp.Min.:℃</li>
        <li className="highTemp">Temp.Max.:℃</li>
        <li className="description"></li>
      </ul>

      <div className="Location">
        <span>
          <button
            type="button"
            class="btn btn-dark"
            id="current-location-button"
          >
            Current Location
          </button>
        </span>
      </div>
      </div>
      );
}
