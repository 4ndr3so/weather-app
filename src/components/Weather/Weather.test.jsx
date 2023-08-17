import React, {  } from 'react'
import {render} from "@testing-library/react"
import Weather from "./Weather"

test("Weather render sunny",async ()=>{
    //AAA Arrange Act Assert
    const {findByRole} = render(<Weather temperature={10} state="clear"></Weather>)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})