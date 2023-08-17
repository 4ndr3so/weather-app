import {useRef, useEffect, useState} from 'react'

import Clouds from "vanta/dist/vanta.clouds.min"
import * as THREE from "three"

const useVanta=()=>{
    const myRefDiv=useRef(null)
    const [vanta, setVanta]= useState(0)//no inicializado vanta
    //La primera renderización toma null
    console.log(myRefDiv.current)

    useEffect(()=>{
        console.log("en use effect"+myRefDiv.current)
        if(!vanta){

                setVanta(Clouds({
                    THREE,
                    el:myRefDiv.current
                }))
                console.log("se actualiza vanta");
        }
        //Al salir da la pantalla debemos detener el efecto
        // desasociar todos los recursos
        return()=>{
            //Dentro de esta funcion se va a realizar la tarea
            // de destruir los recursos tomados por vanta
            if(vanta){
                vanta.destroy();
                console.log("libero")
            }
        }

    },[vanta])

        return myRefDiv
}
export default useVanta;