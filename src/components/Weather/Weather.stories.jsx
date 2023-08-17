import React, {  } from 'react'
import Weather from "./Weather"

export default {
    title:"Weather",
    component:Weather
}

const Template =(args)=> <Weather {...args}></Weather>;
//export const Weathercloud =(args)=> <Weather {...args}></Weather>
export const Weathercloud =Template.bind({});
Weathercloud.args ={temperature:15, state:"clouds"}

export const WeatherSunny =()=> (<Weather temperature={10} state="clear"></Weather>)