import "./index";
import "./Information.css";

export default function Information() {
  let weather = {
    city: "El Paso",
    date: "Sunday, July 2021",
    time: "19:03",
    humidity: "33",
    wind: "2",
    feels: "31",
    lowTemp: "31",
    highTemp: "33",
    description: "Broken Clouds"
  };

  return (
    <div className="Information">
      <h1>{weather.city}</h1>

      <ul>
        <li className="date">{weather.date}</li>
        <li className="time">{weather.time}</li>
        <li className="humidity">Humidity:{weather.humidity}%</li>
        <li className="wind">Wind:{weather.wind}km/h</li>
        <li className="Feels-like">Feels-Like:{weather.feels}℃</li>
        <li className="lowTemp">Temp.Min.:{weather.lowTemp}℃</li>
        <li className="highTemp">Temp.Max.:{weather.highTemp}℃</li>
        <li className="description">{weather.description}</li>
      </ul>

      <div className="Location">
        <span>
          <button
            type="button"
            class="btn btn-dark"
            id="current-location-button"
          >
            Current Location
          </button>
        </span>
      </div>
    </div>
  );
}
