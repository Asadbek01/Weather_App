import React from "react";
import moment from "moment";
import { Main, RootObject, Sys, Weather } from "../types/interface";
// import DayCard from "./DayCard";
interface weatherObj {
  weatherObj : RootObject,
}

export default function Details({ weatherObj }: weatherObj) {
  return (
    <>
    <div className="animate__animated animate__backInLeft panel text-center">
      <h1>
      <i className="bi bi-geo-alt"></i> {weatherObj.name},{" "}
        {weatherObj.sys.country}
      </h1>{" "}
      <br />
      <p>{moment.unix(weatherObj.dt).format("dddd, MMMM Do YYYY")}</p>
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
    </>

  );
  
    // <DayCard />
  
}