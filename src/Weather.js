import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(){
    return(
      <div className="Weather">
        <div className="card"  >
        <div className="card-body">
            
            <form>
            <div className="row">
                <div className="col-9">
                    <input
                    type="search"
                    className="form-control"
                />
                </div>
                <div className="col-3">
                    <input type="submit" value="Search"
                    className="btn btn-dark"/>
                </div>
        </div>
        </form>
            <h1 className="city">El Paso</h1>
            <ul>
                <li className="Date"> Thursday 03:00</li>
                <li className="description">Mostly Cloudly</li>
            </ul>
        <div className="row">
            <div className="col-6">
                   <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="Mostly Cloudly"
                    className="float-left"/>
                <span className="temperature">6</span><span className="unit">℃</span>
                </div>
            <div className="col-6">
                <ul>
                    <li className="Precipitation">Precipitation: 15%</li>
                    <li className="Humidity">Humidity: 72%</li>
                    <li className="Wind">Wind: 13 km/h</li>
                </ul>
            </div>
            </div>
       </div>  
       </div>  
        
   </div>
       
        
    );
}