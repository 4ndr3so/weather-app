import React , { useReducer, useCallback} from 'react'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import WelcomePage from "./pages/WelcomePage"
import MainPage from "./pages/MainPage"
import CityPage from "./pages/CityPage"
import NotFoundPage from "./pages/NotFoundPage"
import {Weathercontext} from "./WeatherContext"



const App = props => {
   
    
    /* const [allWeather, setAllWeather] = useState({})
    const [allCharData, setAllCharData] = useState({})
    const [allForecastItemList, setAllForecastItemList] = useState({})

    const onSetAllWeather = useCallback((weatherCity) => {
        setAllWeather(allWeather => {
            return ({ ...allWeather, ...weatherCity })
        })
    }, [setAllWeather])

    const onSetCharData= useCallback((charDataCity)=>{
        setAllCharData(charData=>({...charData,...charDataCity}))
    },[setAllCharData]);

    const onSetforecastItemList= useCallback((forecastItemListCity)=>{
        setAllForecastItemList(forecastItemList=>({...forecastItemList,...forecastItemListCity}))
    },[setAllForecastItemList]);

    const actions= useMemo(() =>( { onSetAllWeather,onSetCharData,onSetforecastItemList }),[onSetAllWeather,onSetCharData,onSetforecastItemList])
    const data= useMemo(() =>( { allWeather,allCharData,allForecastItemList }),[allWeather,allCharData,allForecastItemList]) */
    return (
                <Weathercontext>
                    <Router>
                        
                        <Switch>
                                <Route exact path="/">
                                    <WelcomePage></WelcomePage>
                            </Route>
                            <Route path="/main">
                                    <MainPage/>     {/*  <MainPage data={state} actions={dispatch}/>  SE cambia a context*/}
                            </Route>      
                            <Route path="/city/:countryCode/:city">
                                <CityPage /> {/* <CityPage data={state} actions={dispatch}/> SE cambia a context */}
                            </Route> 
                            <Route >
                                    <NotFoundPage></NotFoundPage>
                            </Route>
                        </Switch>
                    </Router>
                </Weathercontext>
    )
}

export default App
