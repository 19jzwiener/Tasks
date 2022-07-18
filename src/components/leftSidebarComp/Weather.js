import React, { useState } from "react";

import "./Weather.css";

import { Link } from "react-router-dom";

// api to weather forecasts
const api = {
  key: "f41d2cf488e17f5ee0e86404ade45f24",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  // take inputs and search for location
  const search = (evt) => {
    // search on enter key press
    if (evt.key === "Enter") {
      // search api (api.base) for weather in location (query) and give metrics (api.key)
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          // change page to show the weather in specified area
          setWeather(result);
          // reset search bar to blank
          setQuery("");
        });
    }
  };

  // allow search to know what month it is
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // allow search to know what day it is
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // allow search to set correct day, month, year and date
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Weather
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Workout" className="nav-link active">
                  Workout
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Todo" className="nav-link active">
                  Todo
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Questions" className="nav-link active">
                  Questions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="col px-0">
          <div
            // change className depending on weather
            className={
              typeof weather.main != "undefined"
                ? weather.main.temp > 16
                  ? "weather warm"
                  : "weather"
                : "weather"
            }
          >
            <main>
              <div className="search__box">
                {/* search for specific city weather */}
                <input
                  type="text"
                  className="search__bar"
                  placeholder="Search a City..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  // run search function
                  onKeyPress={search}
                />
              </div>
              {/* if weather.main is defined place heading for City and Country */}
              {typeof weather.main != "undefined" ? (
                <div>
                  <div className="location__box">
                    <div className="location">
                      {weather.name}, {weather.sys.country}
                    </div>
                    {/* Place current date */}
                    <div className="date">{dateBuilder(new Date())}</div>
                  </div>

                  <div className="weather__box">
                    {/* Describe temperature in Faherheit */}
                    <div className="temp">
                      {Math.round((weather.main.temp * 9) / 5 + 32)}
                    </div>
                    {/* Describe how it is outside. EX: Cloudy, Clear */}
                    <div className="weather__weather">
                      {weather.weather[0].main}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </main>
          </div>
        </div>
    </div>

  );
}

export default App;
