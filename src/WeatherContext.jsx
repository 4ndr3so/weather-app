import React, { useCallback, useReducer } from "react"
import { useContext } from "react";
const WeatherStateContext = React.createContext();
const WeatherDispatchContext = React.createContext();






const Weathercontext =({children})=>{
    const initialValue={//antes estaba adentro, pero por performance
        allWeather:{},
        allCharData:{},
        allForecastItemList:{}
    }
    const reducer=useCallback((state,action)=>{
        switch(action.type){
            case'SET_ALL_WEATHER':
                const weatherCity= action.payload;
                const newAllWeather={ ...state.allWeather, ...weatherCity }
                return {...state,allWeather:newAllWeather}               
            case'SET_CHART_DATA':
                const charDataCity =action.payload;
                const newAllChartData ={...state.allCharData,...charDataCity}
                return {...state,allCharData:newAllChartData}
            case'SET_FORECAST_ITEM_LIST':
                const forecastItemListCity =action.payload;
                const newforecastItemListCity ={...state.allForecastItemList,...forecastItemListCity}
                return {...state,allForecastItemList:newforecastItemListCity}
            default:
                return state
        }
    },[])

    const [state,dispatch]= useReducer(reducer, initialValue)
    return (
        <WeatherDispatchContext.Provider value={dispatch}>
                <WeatherStateContext.Provider value={state}>
                    {children}
                </WeatherStateContext.Provider>
        </WeatherDispatchContext.Provider>
    )
}
const useWeatherDispatchContext=()=>{
    const dispatch=useContext(WeatherDispatchContext)
    if(!dispatch){
        throw Error("Must set dispatch Provider")
    }
    return dispatch
}
const useWeatherStateContext =()=>{
    const state= useContext(WeatherStateContext)
    if(!state){
        throw Error("Must set dispatch Provider")
    }
    return state;
}
export {
    Weathercontext,
    useWeatherDispatchContext, 
    useWeatherStateContext
}