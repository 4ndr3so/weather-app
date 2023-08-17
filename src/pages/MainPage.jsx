import React from 'react'
import { useHistory } from "react-router-dom"
import CityList from "./../components/CityList"
import AppFrame from '../components/AppFrame'
import Paper from "@material-ui/core/Paper"
import { getCities} from "./../utils/serviceCities"


const cities=[
    {city:"Bogotá", country:"Colombia",countryCode:"CO"},
    {city:"Buenos Aires", country:"Argentina",countryCode:"AR"},
    {city:"Madrid", country:"España",countryCode:"ES"},
    {city:"Ciudad de Mexico", country:"Mexico",countryCode:"MX"}
]


const MainPage = () => {// se quita los props {actions,data}
    const history= useHistory();

    const onClickHandler=React.useCallback((city, countryCode)=>{
        console.log(city, countryCode)
       history.push(`/city/${countryCode}/${city}`)
    },[history])
    return (
        <AppFrame>
            <Paper elevation={3} className="tamUPaper">
                {/* SE quitan los props de cityList <CityList
                    data={data}
                    actions={actions} 
                    cities={getCities()} 
                    onClickCity={onClickHandler} /> */}
            <CityList
                    cities={getCities()} 
                    onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}


export default MainPage
