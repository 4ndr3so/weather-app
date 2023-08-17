import React, { PureComponent } from 'react'
import {render} from "@testing-library/react"
import CityInfo from "./CityInfo"
import { ExpansionPanelActions } from '@material-ui/core'

test("CityInfo render",async()=>{
    //aaa
    //arrage
    //act
    const city="Bogotá"
    const country="Colombia"
        //render: renderiza el componente y retorna una serie de funciones de utilidad
        //findAllBy roll consulta nuestro componenete

    const { findAllByRole } = render(<CityInfo city={city} country={country}></CityInfo>)
     //assert
     //findAllbyrole nos va a buscar todos los componentes que sean "heading"=H1, H2, H3, H4 .. etc
     // el resultado es un array de componentes
    const cityAndCountryComponents = await findAllByRole("heading")
   // cuando el test va a ser correcto
   //definicion
   //Caundo el primer elemento heading se encuentr Bogotá
   // y cuando el segundo elemento este colombia

   expect(cityAndCountryComponents[0]).toHaveTextContent(city)
   expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})