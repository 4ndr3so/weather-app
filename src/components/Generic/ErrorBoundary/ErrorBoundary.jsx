import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends PureComponent {// cambio de Component a Pure Component, para usar un memo 

    constructor(props){
        super(props);

        this.state={activo:true,hasError:false};
        this.state.palabra="NOoo"
    }

    static propTypes = {
        prop: PropTypes
    }
    static getDerivedStateFromError(error){
        //this.setState({hasError:true})
        return {hasError:true}
    }
    componentDidCatch(error, errorInfo){
        console.log("error fallo:",errorInfo)
    }
    componentDidMount(){
        console.log("se ha montado")
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Se actualizo");
    }
    componentWillUnmount(){
        console.log("desmontado")
    }
    onClickHander=()=>{
        this.setState({activo:false})
    }
    estaActivo=()=>{
        return this.state.activo ? "Activo": "Desactivado"
    }
    render() {
        return (
            this.state.hasError ? <h1>Hubo error</h1>:
           this.props.children
        )
    }
}
