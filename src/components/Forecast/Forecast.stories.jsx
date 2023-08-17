import React from 'react'
import Forecast from './Forecast'
import 'typeface-roboto'
import {action} from "@storybook/addon-actions";
export default {
    title: "Forecast",
    component: Forecast
}
const forecastItemList=[
    {hour:18,state:"clear",temperature:18,weekDay:"Jueves"},
    {hour:12,state:"clouds",temperature:12,weekDay:"viernes"},
    {hour:6,state:"drizzle",temperature:6,weekDay:"martes"},
    {hour:14,state:"rain",temperature:15,weekDay:"lunes"},
]
export const ForecastExample=()=><Forecast forecastItemList={forecastItemList}></Forecast>