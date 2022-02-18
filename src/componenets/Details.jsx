import React from "react";
import moment from "moment";
import DayCard from "./DayCard";


export default function Details({ weatherObj }) {
  return (
    <div className="animate__animated animate__backInLeft panel">
      <h1>
      <i class="bi bi-geo-alt"></i> {weatherObj.name},{" "}
        {weatherObj.sys.country}
      </h1>{" "}
      <br />
      <p>{moment.unix(weatherObj.dt).format("dddd, MMMM Do YYYY")}</p>
      <img
        variant="center"
        // src={`http://openweathermap.org/static/img/icon/${weatherObj.weather[0].icon}.png`}
        style={{ width: "15%", position: "center" }}
      />
      <p>
        {Math.round((weatherObj.main.temp)- 273.15)}°
        <br />
      </p>
      <p>
      {weatherObj.weather[0].description}

        <br />
        Humidity: {weatherObj.main.humidity}%
      </p>
    </div>
  );
  
    <DayCard />
  
}