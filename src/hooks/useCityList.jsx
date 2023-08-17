import {useEffect,useState} from 'react'
import axios from "axios"

import {getWeatherUrl} from "./../utils/urls"
import getAllWather from '../utils/transform/getAllWeather'
import { getCityCode } from './../utils/utils'

const useCityList=(cities,allWeather,actions)=>{
    //const [allWeather, setAllWeather] = useState({})
    const [error,setError]=useState(null)

    useEffect(() => {
        //debugger;
        console.log("entra use effect");
        const setWeather= async(city,countryCode)=>{
            const ulr=getWeatherUrl(city,countryCode)
            try{
               // onSetAllWeather({[getCityCode(city, countryCode)]:{}})//bandera para controlar si se pidio el dato
               actions({type: 'SET_ALL_WEATHER',payload:{[getCityCode(city, countryCode)]:{}}})
                const response =await axios.get(ulr)// se espera la respuesta
               const allWeatherAux= getAllWather(response, city, countryCode)

               //setAllWeather(allWeather=>({...allWeather, ...allWeatherAux}))
                //onSetAllWeather(allWeatherAux)
                actions({type: 'SET_ALL_WEATHER',payload:allWeatherAux})
               
            }
            catch(error){
                // errores respuesta del servidor
                if(error.response){
                    //const {data , status}= error.response;
                    //console.log(data)
                    //console.log(status);
                    setError("Ha ocurrido un error en el servidor")
                }else if(error.request){//errores no llegamos al servidor
                   // console.log("servidor innacesible");
                    setError("Verifique su internet")
                }else{
                    //console.log("servidor innacesible");
                    setError("Error modificar datos",error)
                }
            }  

        }
        cities.forEach(({city,countryCode}) => {
            console.log("primero aqui",city,countryCode);
            if (!allWeather[getCityCode(city, countryCode)]) {
                setWeather(city, countryCode)
            }
        });
    }, [cities,actions,allWeather])

    return {  error, setError }
}

export default useCityList