import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardCompany from './cardCompany';
import CardCadets from './cardCadets';
import CardVacancies from './cardVacancies';
import CardContactUs from './cardContactUs';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(1),
    },
    paper: {
        margin: 'auto',
        boxShadow: 'none',
        justifyContent: 'center',
        maxWidth: 1000,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <CardCompany/>
                <CardVacancies/>
                <CardCadets/>
                <CardContactUs/>
            </Paper>
        </div>
    );
}
