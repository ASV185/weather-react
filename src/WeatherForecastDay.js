import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

    function day(){
        let date= new Date(props.data.dt*1000);
    

    let day= date.getDay();

    let days= ["Sun","Mon", "Tue", "Wed", "Thu", "Friday","Sat"];

    return days[day];
    }
    function maxTemperature(){

     let temperature= (Math.round(props.data.temp.max)*9/5+32);
     return `${Math.round(temperature)}°`;
    }

    function minTemperature(){
    
     let temperature= (Math.round(props.data.temp.min)*9/5+32);
     return `${Math.round(temperature)}°`;
    }
    return(
        <div>
            <div className="WeatherForecast-Day">
                {day()}
            </div>
                <WeatherIcon code={props.data.weather[0].icon} size={36} />
                <div className="WeatherForecast-temperature">
                    <span className="WeatherForecast-temperature-max">{maxTemperature()}</span>
                    <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
                </div>
        </div>
        
    );
}