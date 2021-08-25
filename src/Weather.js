import React from "react";
import axios from "axios";
import Loader from "react-js-loader";

export default function Weather(props){
    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}℃`);
    }
    

let apiKey="03b710dce56cda3a371cb2ddd31580ad";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
return (
    <div className={"row"}>
            <div className={"item"}>
                <Loader type="bubble-scale" bgColor={"#FFFFFF"}  size={100} />
            </div>
    </div>
);
}
