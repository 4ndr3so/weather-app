import React, { } from 'react'
import CityInfo from './CityInfo'
import 'typeface-roboto'
export default {
    title: "CityInfo",
    component: CityInfo
}

export const CityExample = (args)=> (<CityInfo {...args}></CityInfo>)
CityExample.args={city:"Bogotá", country:"Colombia"}