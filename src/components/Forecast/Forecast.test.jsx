import React, {  } from 'react'
import {render, fireEvent} from "@testing-library/react"
import Forecast from "./Forecast"


test("Forecast render",async()=>{
    // AAA arrange, act assert
    // se usa una marca para identificar componenete
    const forecastItemList=[
        {hour:18,state:"clear",temperature:18,weekDay:"Jueves"},
        {hour:12,state:"clouds",temperature:12,weekDay:"viernes"},
        {hour:6,state:"drizzle",temperature:6,weekDay:"martes"},
        {hour:14,state:"rain",temperature:15,weekDay:"lunes"},
    ]
    const {findAllByTestId} = render(<Forecast forecastItemList={forecastItemList}></Forecast>)

    const forecastItems = await findAllByTestId("forecast-item-container");
    expect(forecastItems).toHaveLength(4)
})