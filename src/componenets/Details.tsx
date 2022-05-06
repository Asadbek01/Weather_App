import React from "react";
import moment from "moment";
import { Main, RootObject, Sys, Weather } from "../types/interface";

interface WeatherObject {
  weatherObj : RootObject,
}

export default function Details({ weatherObj }: WeatherObject) {
  return (
    <>
    <div className="animate__animated animate__backInLeft panel text-center">
      <h1>
      <i className="bi bi-geo-alt"></i> {weatherObj.name},{" "}
        {weatherObj.sys.country}
      </h1>
      <br />
      <p>{moment.unix(weatherObj.dt).format("dddd, MMMM Do YYYY")}</p>
      <img style={{maxWidth: "100px"}} src={`https://openweathermap.org/img/wn/${weatherObj.weather[0].icon}.png`} alt='weather icon' />
      <p style={{fontSize: "14px"}}>
        {Math.round((weatherObj.main.temp)- 273.15)}°
        <br />
      {weatherObj.weather[0].description}
        <br />
        Humidity: {weatherObj.main.humidity}%
     
      </p>
    </div>
    </>

  );
  
  
}