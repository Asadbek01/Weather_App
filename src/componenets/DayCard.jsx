import React from "react";
import moment from "moment";


export default function DayCard({ weatherObj }) {
  return (
    <div
      className="animate__animated animate__backInUp daycard"
      style={{ width: "100%", cover: "100%" }}
    >
      <p>{moment.unix(weatherObj.dt).format("ddd, Do")}</p>
      <img
        variant="top"
        src={`https://www.weatherbit.io/static/img/icons/${weatherObj.weather.icon}.png`}
        style={{ width: "50%", position: "center" }}
        alt={weatherObj.weather.description}
        title={weatherObj.weather.description}
      />
      <p>
        {Math.floor((weatherObj.main.temp_min)- 273.15)}
        {"° - "}
        {Math.floor(weatherObj.main.temp_max - 273.15)}°
      </p>
    </div>
  );
}