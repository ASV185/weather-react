import React,{useState} from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props){
    const[weatherData, setWeatherData]=useState({ready:false});
    
    function handleResponse(response){
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt*1000),
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudly.png",
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }

    if (weatherData.ready){
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
            <h1 className="city">{weatherData.city}</h1>
            <ul>
                <li className="Date"><FormattedDate date={weatherData.date}/></li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
        <div className="row">
            <div className="col-6">
                   <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    className="float-left"/>
                <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">℃</span>
                </div>
            <div className="col-6">
                <ul>
                    <li className="Humidity">Humidity:{weatherData.humidity}%</li>
                    <li className="Wind">Wind:{weatherData.wind}km/h</li>
                </ul>
            </div>
            </div>
       </div>  
       </div>  
        
   </div>
    );
}else{
    const apiKey="03b710dce56cda3a371cb2ddd31580ad";
    let city=`{weatherData.city}`;
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
}
       
}