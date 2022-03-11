import React from "react";
import moment from "moment";
import { RootObject } from "../types/interface";
interface WeatherObject {
    weatherObj : RootObject,
  }

export default function DayCard({ weatherObj }: WeatherObject) {
  return (
      <></>
    // <div
    //   className="animate__animated animate__backInUp daycard"
    //   style={{ width: "100%", }}
    // >
    //    <p>{moment.unix(weatherObj.dt).format("ddd, Do")}</p> 
      
    //    <img
    //     src={`https://openweathermap.org/img/wn/${weatherObj.weather[0].icon}.png`}
    //     style={{ width: "50%"}}
    //     alt={weatherObj.weather[0].description}
    //     title={weatherObj.weather[0].description}
    //   />
    //   <p>
    //     {Math.floor((weatherObj.main.temp_min)- 273.15)}
    //     {"° - "}
    //     {Math.floor(weatherObj.main.temp_max - 273.15)}° 
    //   </p> 
    // </div>
  )
}