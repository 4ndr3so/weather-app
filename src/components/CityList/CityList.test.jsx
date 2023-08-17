import React, {  } from 'react'
import {render, fireEvent} from "@testing-library/react"
import CityList from "./CityList"

const cities=[
    {city:"Bogotá", country:"Colombia",conuntryCode:"CO"},
    {city:"Buenos Aires", country:"Argentina",conuntryCode:"AR"},
    {city:"Madrid", country:"España",conuntryCode:"ES"},
    {city:"Ciudad de Mexico", country:"Mexico",conuntryCode:"MX"}
]
test("CityList renderes",async()=>{
    // AAA arrange, act assert

    const { findAllByRole}= render(<CityList cities={cities} onClickCity={()=>{}}/>)
    const items= await findAllByRole("button")

    expect(items).toHaveLength(4)
})

test("CityList clic on item",async()=>{
    //debemos simular una acición del usuario:click sobre un item
    //usamos una función "Mock"
    const fnClickOnItem= jest.fn();

    const {findAllByRole} = render(<CityList cities={cities} onClickCity={(fnClickOnItem)}/>)

    const items =await findAllByRole("button")

    //ahora se simula la acción, fireevent
    fireEvent.click(items[0])

    // se debio llamar la funcion fnClickOnitem una unica vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})