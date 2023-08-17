import React from "react"
import ErrorBoundary from "./ErrorBoundary";

export default {
    title: "ErrorBoundary",
    component: ErrorBoundary
}
const prop = (undefined)
const ComponentNoError=()=> <h1>No error</h1>
const ComponentConError=()=> <h1>{prop.hola}</h1>
export const ErrorBoundaryConErrorExample =()=><ErrorBoundary ><ComponentConError></ComponentConError></ErrorBoundary>

export const ErrorBoundarySinErrorExample =()=><ErrorBoundary ><ComponentNoError></ComponentNoError></ErrorBoundary>