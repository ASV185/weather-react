import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){

    return(
    <div className="WeatherInfo">
        <h1 className="city">{props.data.city}</h1>
            <ul>
                <li className="Date"><FormattedDate date={props.data.date}/></li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
        <div className="row">
            <div className="col-6">
                <div className="float-left">
                 <WeatherIcon code={props.data.icon} />
                </div>
                <span className="temperature">{Math.round(props.data.temperature)}</span><span className="unit">℃</span>
                </div>
            <div className="col-6">
                <ul>
                    <li className="Humidity">Humidity:{props.data.humidity}%</li>
                    <li className="Wind">Wind:{props.data.wind}km/h</li>
                </ul>
            </div>
       </div>  
       </div>  
    );
    
}