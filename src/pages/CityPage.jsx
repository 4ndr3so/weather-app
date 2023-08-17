import React ,{useMemo} from 'react'
import Grid from "@material-ui/core/Grid"
import CityInfo from './../components/CityInfo'
import Weather from "./../components/Weather"
import WeatherDetails from "./../components/WeatherDetails"
import ForecastChart from "./../components/ForecastChart"
import Forecast from "./../components/Forecast"
import AppFrame from '../components/AppFrame'
import "moment/locale/es"
import useCityPage from "./../hooks/useCityPage"
import LinearProgress from "@material-ui/core/LinearProgress"
import useCityList from "./../hooks/useCityList"
import { getCityCode} from "./../utils/utils"
import {getCountryNameByCountryCode} from "./../utils/serviceCities"
import { useWeatherDispatchContext, useWeatherStateContext } from '../WeatherContext'

const CityPage = () => {// se quita los props {actions,data}
    const actions = useWeatherDispatchContext()
    const data = useWeatherStateContext()
    const {allWeather,allCharData,allForecastItemList} =data
//    const {onSetAllWeather,onSetCharData,onSetforecastItemList}= actions
    const {city,countryCode}=useCityPage(allCharData,allForecastItemList,actions)
    const cities =useMemo(()=>([{city,countryCode}]),[city,countryCode])

    //const {allWeather}= useCityList(cities)

    useCityList(cities,allWeather,actions)
    const cityCode=getCityCode(city,countryCode)
    //console.log(forecastItemList);
    //const city="Bogotá"
    const charData= allCharData[cityCode]
    const forecastItemList = allForecastItemList[cityCode]

    const weather=allWeather[cityCode]
    const country =getCountryNameByCountryCode(countryCode)
    const state=weather && weather.state;
    const temperature=weather && weather.temperature;
    const humidity=weather && weather.humidity;
    const wind=weather && weather.wind;
     const dataExmaple = [
        {
            "dayHour": "Jue 18",
            "min": 14,
            "max": 22,
        },
        {
            "dayHour": "Vie 06",
            "min": 18,
            "max": 27,
        },
        {
            "dayHour": "Vie 12",
            "min": 18,
            "max": 28,
        },
        {
            "dayHour": "Vie 18",
            "min": 18,
            "max": 25,
        },
        {
            "dayHour": "Sab 06",
            "min": 15,
            "max": 22,
        },
        {
            "dayHour": "Sab 12",
            "min": 12,
            "max": 19,
        }
    ] 
     const validValues = [
        "clouds",
        "clear",
        "rain",
        "snow",
        "drizzle",
        "thunderstorm"
    ]    
    const forecastItemListExample=[
        {hour:18,state:"clear",temperature:18,weekDay:"Jueves"},
        {hour:12,state:"clouds",temperature:12,weekDay:"viernes"},
        {hour:6,state:"thunderstorm",temperature:6,weekDay:"martes"},
        {hour:14,state:"rain",temperature:15,weekDay:"lunes"},
    ]
    return (
        <AppFrame>
            <Grid container
                justify="space-around"
                direction="column" spacing={2} >
                    <Grid item container xs={12} justify="center" alignItems="flex-end">
                        <CityInfo  city={city} country={country} ></CityInfo>
                    </Grid>
                    <Grid container item sx={12} justify="center">
                        
                            <Weather state={state} temperature={temperature}></Weather>
                        {   wind &&  humidity &&
                            <WeatherDetails humidity={humidity} wind={wind}></WeatherDetails>
                        }
                    </Grid>
                    <Grid item>
                        {
                            !charData && !forecastItemList && <LinearProgress></LinearProgress>
                        }
                    </Grid>
                    <Grid item>
                        {
                            charData &&
                            <ForecastChart data={charData}></ForecastChart>
                        }
                    </Grid>
                    <Grid item>
                        {   forecastItemList &&
                            <Forecast forecastItemList={forecastItemList}></Forecast>
                        }
                    </Grid>
                </Grid>
        </AppFrame>
        
    )
}



export default CityPage
