import {useEffect,useDebugValue} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import {getForecastUrl} from "./../utils/urls"

import getCharData from "./../utils/transform/getChartData"
import getForecastItemList from "./../utils/transform/getForecastItemList"
import { getCityCode } from '../utils/utils'

const useCityPage=(allCharData,allForecastItemList,actions)=>{
    const {city,countryCode}=useParams()

   // const [charData, setCharData] = useState(null)
    //const [forecastItemList, setforecastItemList] = useState(null)

    //useDebugValue(` useCityPage ${city}`)
    useEffect(() => {
        const getForecast=async ()=>{

            const ulr=getForecastUrl(city,countryCode)
            const cityCode= getCityCode(city,countryCode)
            try{
                const { data }=await axios.get(ulr)

                
                const dataAux=getCharData(data)
               
                
                //onSetCharData({[cityCode]:dataAux})
                actions({type: 'SET_CHART_DATA',payload:{[cityCode]:dataAux}})
                const forecastItemListAux =getForecastItemList(data)
                console.log(forecastItemListAux);
                //onSetforecastItemList({[cityCode]: forecastItemListAux})
                actions({type: 'SET_FORECAST_ITEM_LIST',payload:{[cityCode]:forecastItemListAux}})
            }catch(error){
                console.log(error)
            }
        }

        const cityCode=getCityCode(city,countryCode)
        if(allCharData && allForecastItemList && !allCharData[cityCode] && !allForecastItemList[cityCode])
        {
            getForecast();
        }
        
    }, [city,countryCode,actions,allCharData,allForecastItemList])

        return {city,countryCode}
}
export default useCityPage;