import React,{useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(){
    const[ready, setReady]=useState(false);
    const[temperature, setTemperature]=useState(null);

    function handleResponse(response){
        setTemperature(response.data);
        setReady(true);
    }

    if (ready){
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
}else{
    const apiKey="03b710dce56cda3a371cb2ddd31580ad";
    let city="El Paso";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
}
       
}