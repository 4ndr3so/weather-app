import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Alert from '@material-ui/lab/Alert'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import useCityList from './../../hooks/useCityList'
import CityInfo from './../CityInfo'
import Weather from './../Weather'
import { getCityCode } from './../../utils/utils'
import {useWeatherDispatchContext, useWeatherStateContext } from '../../WeatherContext'

const areEqual= (prev,next)=>{
    debugger
    console.log("city", prev.city === next.city);
    console.log("countryCode", prev.countryCode === next.countryCode);
    console.log("country", prev.country === next.country);
    console.log("weather", prev.weather === next.weather);
    console.log("eventClickCity", prev.eventClickCity === next.eventClickCity);
}
const CityListItem=React.memo(({city,countryCode,country,weather,eventClickCity})=>{
    return ( 
        <ListItem button key={getCityCode(city,countryCode)} onClick={()=>{
            return eventClickCity(city, countryCode)
        }}>
            <Grid container justify="center" alignItems="center">
                <Grid item md={9} xs={12}>
                    <CityInfo city={city} country={country}></CityInfo>
    
                </Grid>
                <Grid item md={3} xs={12}>
                    <Weather temperature={weather && weather.temperature} state={weather && weather.state}></Weather>    
                </Grid>
            </Grid>
            
            
        </ListItem>
        )

})
//Se va a comvertir en una funcion que retorna otra función
const renderCityAndCountry=eventClickCity=>(cityAndCountry,weather)=>{
   
    //const {temperature, state} = weather;
    const {city, country,countryCode}= cityAndCountry;
    console.log("renderCity",city, country,countryCode,weather);
    return ( 
        <CityListItem key={getCityCode(city,countryCode)} eventClickCity={eventClickCity} weather={weather} {...cityAndCountry}></CityListItem>
    )
}
const CityList = ({cities,onClickCity}) => {//city list y data salen del contexto,actions,data
    const actions = useWeatherDispatchContext()
    const data = useWeatherStateContext()
    
    const {allWeather} =data;
    //const {onSetAllWeather}= actions
    const {  error, setError } = useCityList(cities,allWeather,actions)
    return (
        <div>
            {
                error && <Alert onClose={()=>setError(null)} severity="error">{error}</Alert>
            }
             <List className="listaEst">
            {
                cities.map(cityAndCountry => {
                    console.log("en map",getCityCode(cityAndCountry.city,cityAndCountry.countryCode));
                    return renderCityAndCountry(onClickCity)(cityAndCountry, 
                    allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)])})
                    
              }
            </List>
        </div>
       
    )
}

CityList.propTypes = {
    cities:PropTypes.arrayOf(PropTypes.shape({
        city:PropTypes.string.isRequired, 

        conuntryCode:PropTypes.string,
    })).isRequired,
    onClickCity:PropTypes.func,
}

export default React.memo(CityList)

/*const CityList = ({cities,onClickCity}) => {

    /* Estrucutura allWeather
            {
                    [Buenos Aires-argnetina]:{temperatura 10:state:"sunny"},
                    [Bogota-Colombia]:{temperatura 10:state:"sunny"},
            }    
    */
 /*   const [allWeather, setAllWeather] = useState({})
    const [error,setError]=useState(null)

    useEffect(() => {
        console.log("entra use effect");
        const setWeather= async(city,conuntryCode)=>{
            const apId="59723b52ef2cdacce790353a5680ef86";
            const ulr=`https://api.openweathermap.org/data/2.5/weather?q=${city},${conuntryCode}&appid=${apId}`
            try{
                const response =await axios.get(ulr)// se espera la respuesta
                const {data}= response;
                const temperature= Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0));
                const state=data.weather[0].main.toLowerCase()
                const propName=getCityCode(city,conuntryCode);
                const propValue={temperature,state}
                console.log("propName", propName)
                console.log("propValue", propValue)
                setAllWeather(allWeather=>({...allWeather,[propName]: propValue })
                )
            }
            catch(error){
                // errores respuesta del servidor
                if(error.response){
                    const {data , status}= error.response;
                    console.log(data)
                    console.log(status);
                    setError("Ha ocurrido un error en el servidor")
                }else if(error.request){//errores no llegamos al servidor
                    console.log("servidor innacesible");
                    setError("Verifique su internet")
                }else{
                    console.log("servidor innacesible");
                    setError("Error modificar datos")
                }
            }

            /*
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${conuntryCode}&appid=${apId}`)
            .then(response =>{
                const {data}= response;
                const temperature= Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0));
                const state=data.weather[0].main.toLowerCase()
                const propName=`${city}-${country}`;
                const propValue={temperature,state}
                console.log("propName", propName)
                console.log("propValue", propValue)
                //No se pone en las dependencias
                setAllWeather(allWeather=>{
                        const result={...allWeather,[propName]: propValue }
                        console.log("Set wather")
                        return result
                    }
                    )
            }).catch(error=>{
                // errores respuesta del servidor
                if(error.response){
                    const {data , status}= error.response;
                    console.log(data)
                    console.log(status);
                    setError("Ha ocurrido un error en el servidor")
                }else if(error.request){//errores no llegamos al servidor
                    console.log("servidor innacesible");
                    setError("Verifique su internet")
                }else{
                    console.log("servidor innacesible");
                    setError("Error modificar datos")
                }
                

                //errores desconodidos
            })

        }
        cities.forEach(({city,conuntryCode}) => {
            console.log("primero aqui",city,conuntryCode);
            setWeather(city,conuntryCode)
        });
    }, [cities])
    const {allWeather,error,setError}=useCityList(cities)
    return (
        <div>
            {
                error && <Alert onClose={()=>setError(null)} severity="error">{error}</Alert>
            }
             <List className="listaEst">
            {
                cities.map(cityAndCountry=> renderCityAndCountry(onClickCity)(cityAndCountry,allWeather[getCityCode(cityAndCountry.city,cityAndCountry.conuntryCode)]))
            }
            </List>
        </div>
       
    )
}*/