import { validValues } from "./../../components/IconState"
import {getCityCode, toCelsius} from "./../utils"

const getAllWather =(response,city,countryCode) =>{
    const {data}= response;
    const temperature= toCelsius(data.main.temp);
    const stateFromServer =data.weather[0].main.toLowerCase()
    const state = validValues.includes(stateFromServer) ? stateFromServer : null // data.weather[0].main.toLowerCase()
    const propName=getCityCode(city,countryCode);
    const humidity=data.main.humidity
    const wind=data.wind.speed
    const propValue={temperature,state,humidity,wind}
    console.log("propName", propName)
    console.log("propValue", propValue)
    return ({[propName]: propValue })
    
}

export default getAllWather