import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"
import { IconContext } from "react-icons";
import IconState,{validValues} from "./../IconState"

const ForecastItem = ({weekDay, hour, state, temperature}) => {
    const size=useMemo(()=>({size:"2em"}),[])
    return (
        <Grid container
        direction="column"
        justify="center"
        alignItems="center">
            <Grid item>
                <Typography>{weekDay}</Typography>
            </Grid>
            <Grid item>
                <Typography>{hour}</Typography>
            </Grid>
            <Grid item>
                <IconContext.Provider value={size}> 
                   <IconState state={state}></IconState>
                </IconContext.Provider>
            </Grid>
            <Grid item>
                <Typography>{temperature} °</Typography>
            </Grid>
        </Grid>
    )
}

ForecastItem.propTypes = {
    weekDay:PropTypes.string.isRequired, 
    hour:PropTypes.number.isRequired, 
    temperature:PropTypes.number.isRequired,
    state:PropTypes.oneOf(validValues).isRequired,
}

export default ForecastItem
