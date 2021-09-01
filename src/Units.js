import "./index";
import "./Units.css";

export default function Units() {
  return (
    <div className="Units">
      <div className="weather">
        <span className="temperature">25</span>
      </div>
      <span class="units">
        <a href="celsius" className="active">
          ℃
        </a>
        |
        <a href="fahrenheit" className="deactivated">
          ℉
        </a>
      </span>
    </div>
  );
}
