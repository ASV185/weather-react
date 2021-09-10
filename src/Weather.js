import React,{useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props){
    const[weatherData, setWeatherData]=useState({ready:false});
    const[city, setCity]=useState(props.city);
    
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

    function Search(){
    const apiKey="03b710dce56cda3a371cb2ddd31580ad";
    let city=`{props.data.city}`;
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); 
    }

    function handleSubmit(event){
        event.preventDefault();
        Search();
    }

    function handleCityChange(event){
        setCity(event.target.value);
    }

    if (weatherData.ready){
    return(
      <div className="Weather">
        <div className="card"  >
        <div className="card-body">
            
            <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                    <input
                    type="search"
                    className="form-control"
                    onChange={handleCityChange}
                />
                </div>
                <div className="col-3">
                    <input type="submit" value="Search"
                    className="btn btn-dark"/>
                </div>
            </div>
        </form>
        </div>
      
        <WeatherInfo data= {weatherData}/>
        </div>
    </div>
    );
}else{
    Search();
    return "loading...";

}
    
}