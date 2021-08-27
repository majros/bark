import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import imgLogo from '../img/logo.gif';
import appForm from '../appForm.doc';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        // width: 275,
        height: window.innerWidth > 450 ? 55 : 30,
    },
    toolbar: {
        justifyContent: 'space-between',
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar className={classes.toolbar}>
                    <img className={classes.logo} alt='icon' src={imgLogo}/>
                    <Button size={window.innerWidth > 450 ? "large" : "small"} variant="contained"
                            color="default" href={appForm} download="appForm">Application form</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
