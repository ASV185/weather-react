import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){

    return(
    <div className="WeatherInfo">
           
            <h1 className="city">{props.data.city}</h1>
            <ul>
                <li className="Date"><FormattedDate date={props.data.date}/></li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row">
            <div className="col-2">
                <div className="clearfix"></div>
                <div className="float-right">
                 <WeatherIcon code={props.data.icon} size={56} />
                </div>
                </div>
            <div className="col-4">
              <WeatherTemperature celsius={(props.data.temperature)*9/5+32}/>
            </div>
            <div className="col-2">
                <div class="float-left">
                    <ul>
                        <li className="Humidity">Humidity:{props.data.humidity}%</li>
                        <li className="Wind">Wind:{props.data.wind}km/h</li>
                    </ul>
                </div> 
            </div>
        </div>
        </div>
       
    );
    
}