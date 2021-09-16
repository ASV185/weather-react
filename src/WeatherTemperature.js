import React  from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props){
return (
<div className="WeatherTemperature">
     <span className="temperature">{Math.round(props.celsius*9)/5+32}</span>
     <span className="unit">℉
     </span>
</div>
);
}
