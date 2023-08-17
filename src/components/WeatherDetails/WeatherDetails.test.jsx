import React from "react"
import { render, findByText } from "@testing-library/react"
import WeatherDetails from "./WeatherDetails"

test("WeatherDetails render",async ()=>{
    const { findByText }= render(<WeatherDetails wind={10} humidity={80}></WeatherDetails>)

    const wind= await findByText(/10/)
    const humidity=await findByText(/80/)

    expect(humidity).toHaveTextContent("Humedad: 80")
    expect(wind).toHaveTextContent("Viento: 10")
})