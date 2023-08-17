import React from 'react'
import ForecastItem from './ForecastItem'
import 'typeface-roboto'
import {action} from "@storybook/addon-actions";

export default{
    title: "ForecsatItems",
    component: ForecastItem
}
export const lunesSoleado=()=>{
    return <ForecastItem hour={10} state={"clear"} temperature={23} weekDay="Lunes"></ForecastItem>
}