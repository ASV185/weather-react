import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import "./WeatherIcon.css";

export default function WeatherIcon (props){
   
    const codeMapping={
        "01d":"CLEAR_DAY",
        "01h":"CLEAR_NIGHT",
        "02d":"PARTLY_CLOUDY_DAY",
        "02n":"PARTLY_CLOUDY_NIGHT",
        "03d":"PARTLY_CLOUDY_DAY",
        "03n":"PARTLY_CLOUDY_NIGHT",
        "04d":"CLOUDY",
        "04n":"CLOUDY",
        "09d":"RAINY",
        "09n":"RAINY",
        "10d":"RAINY",
        "10n":"RAINY",
        "11d":"RAINY",
        "11n":"RAINY",
        "13d":"SNOW",
        "13n":"SNOW",
        "50d":"FOG",
        "50n":"FOG",
    };
    return(
  
    <ReactAnimatedWeather
    icon={codeMapping[props.code]}
    color="#1e1e1e"
    size={64}
    animate={true}
  />

    );
}