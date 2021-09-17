import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
    
    function handleResponse(response){
     console.log(response.data);
    }
     console.log (props);

     let apiKey="03b710dce56cda3a371cb2ddd31580ad";
     let longitude= props.coordinates.lon;
     let latitude= props.coordinates.lat;
     let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">
                         Thu
                    </div>
                    <WeatherIcon code="01d" size={36} />
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">
                            19
                        </span>
                        <span className="WeatherForecast-temperature-min">
                            10
                        </span>
                    </div>  
                </div>
            </div>
        </div>
    );
}