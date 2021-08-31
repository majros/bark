import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import contacts from '../img/contactUs_3.jpg';

const useStyles = makeStyles(() => ({
    root: {
        // maxWidth: 800,
    },
    media: {
        paddingTop: 40,
        height: 150,
    },
    typographs: {
        textShadow: '1px 0 white, 0 1px white, -1px 0 white, 0 -1px white',
    },
}));

export default function MediaControlCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={contacts}>
                <Typography className={classes.typographs} component="h1" variant="h3" align='center' >
                    Contact Us
                </Typography>
            </CardMedia>
            <CardContent>
                <Typography className={classes.typographs} variant="h5" align='center' >
                    We are always glad to see you in our office at:
                </Typography>
                <Typography className={classes.typographs} variant="body1">
                    <b>Address:</b>
                    <br/>
                    11, Chernomorskaya str., 27 apt.,
                    <br/>
                    Mariupol, Ukraine, 87517
                    <br/>
                    <br/>
                    <b>Samos/Alberta/Offen</b> +38 0629 41-36-(25) (38)
                    <br/>
                    <b>Nomikos</b> +38 (0629) 41-71-(48) (49) (50)
                    <br/>
                    <b>e-mail:</b> info@bark.com.ua
                </Typography>
            </CardContent>
        </Card>
    );
}