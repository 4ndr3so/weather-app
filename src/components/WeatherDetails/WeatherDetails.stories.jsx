import React from 'react'
import WeatherDetails from "./WeatherDetails"

export default {
    title: "WeatherDetails",
    component:WeatherDetails
}
export const WeatherDeatailsExample=()=>{
    return <WeatherDetails humidity={10} wind={9}></WeatherDetails>
}