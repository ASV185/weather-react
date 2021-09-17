import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    let [Loaded, setLoaded]= useState(false);
    let [Forecast, setForecast]= useState(null);

    useEffect(()=>{
        setLoaded(false);
    }, [props.coordinates]);
    
    function handleResponse(response){
     setForecast(response.data.daily);
     setLoaded(true);
    }
    function Load(){
      let apiKey= "03b710dce56cda3a371cb2ddd31580ad"; 
      let longitude= props.coordinates.lon;
      let latitude= props.coordinates.lat;
      let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);

    }

    if (Loaded){
    return(
        <div className="WeatherForecast">
            <div className="row">
             {Forecast.map(function(dailyForecast,index){
                 if(index <5) {
                return(
                <div className="col" key={index}>
                 <WeatherForecastDay data={dailyForecast}/>
                </div>  
                );
        }else{
            return null;
        }
    })}
</div>
</div>
);
}else{
    Load();
    return null;
}
}
    

    