import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather-app">
      <form className="weather-search-form" id="searchedcity">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city"
              className="form-control"
              id="city-input"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="form-control btn btn-primary"
            />
          </div>
        </div>
      </form>
      <h1>Sydney NSW, Australia</h1>
      <ul>
        <li className="current-time" id="nowtime">
          Wednesday 22:00
        </li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy icon"
              className="weather-icon"
            />

            <span className="temperature" id="temperature">
              19
            </span>
            <span className="units">
              <a href="https://" id="celsius" className="celsius">
                °C
              </a>{" "}
              |
              <a href="https://" id="fahrenheit" className="fahrenheit">
                °F
              </a>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 77%</li>
            <li>Wind: 8km/h</li>
          </ul>
          <a href="https://github.com/minoovr/my-react-app" id="sourse-code">
            Open source code
          </a>
        </div>
      </div>
    </div>
  );
}
