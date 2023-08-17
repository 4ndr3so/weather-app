import moment from "moment"
import "moment/locale/es"
import {toCelsius} from "./../../utils/utils"

const getCharData=(data)=>{

    console.log(data)

    const daysAhead =[0,1,2,3,4,5]
    const days= daysAhead.map(d=> moment().add(d,"d"))
    const dataAux= days.map(d=>{
        const temObjetoArray= data.list.filter(item=>{
            const dayOfYear= moment.unix(item.dt).dayOfYear()
            return dayOfYear === d.dayOfYear()
        })
        console.log("temObjetoArray",temObjetoArray)
        /* "dayHour": "Jue 18",
        "min": 14,
        "max": 22, */
        const temps= temObjetoArray.map(item=> item.main.temp)
        
        return ({
            dayHour:d.format("ddd"),
            min:toCelsius(Math.min(...temps)),
            max:toCelsius(Math.max(...temps)),
            hasTemp:(temps.length > 0 ?true:false)
        })
    }).filter(item => item.hasTemp)

    return dataAux
}
export default getCharData;