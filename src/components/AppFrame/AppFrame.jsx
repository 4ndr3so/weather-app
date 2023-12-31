import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Grid from "@material-ui/core/Grid"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Link from "@material-ui/core/Link"
import { IconContext} from "react-icons"
import { WiDaySunny } from 'react-icons/wi';
import {Link as LinkRouter} from "react-router-dom"
import { Typography } from '@material-ui/core'

const AppFrame = ({ children }) => {
    const iconcontextSize=useMemo(()=>({size:'2em'}),[])
    return (
        <Grid container justify="center">
            <AppBar position="static">
                <Toolbar variant="dense">
                        <IconButton  aria-label="menu">
                            <Link component={LinkRouter} to="/main"  aria-label="menu">
                                <IconContext.Provider value={iconcontextSize} color="white">
                                    <WiDaySunny color="white"></WiDaySunny>
                                </IconContext.Provider>
                            </Link>
                        </IconButton>
                        <Typography variant="h6">
                            Weather App
                        </Typography>
                </Toolbar>
            </AppBar>
            <Grid container item xs={12} sm={11} md={10} lg={8}>
                {children}
            </Grid>
        </Grid>
    )
}

AppFrame.propTypes = {
    children:PropTypes.node,
}

export default AppFrame
