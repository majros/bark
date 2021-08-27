import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';
import TableVacancies from './tableVacancies';

import openVacancies from '../img/openVacancies.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(0),
    },
    media: {
        paddingTop: 40,
        height: 140,
    },
    textStyle: {
        textShadow: '1px 0 white, 0 1px white, -1px 0 white, 0 -1px white',
    },
}));

export default function MediaControlCard() {
    const classes = useStyles();

    const date = new Date()

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={openVacancies}>
                <Typography className={classes.textStyle} component="h1" variant="h3" align='center' >
                    Vacancies
                </Typography>
                <Typography className={classes.textStyle} variant="h6" align='center'>
                    Open positions on <Moment format="DD MMMM YYYY">{date}</Moment>
                </Typography>
            </CardMedia>
            <CardContent className={classes.root}>
                <TableVacancies/>
            </CardContent>
        </Card>
    );
}