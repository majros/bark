import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import company from '../img/company2.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: theme.spacing(1),
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        flex: '1 0 auto',
        backgroundImage: `url(${company})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    content: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.75)',
    },
    text: {
        padding: theme.spacing(2),
    },
    textStyle: {
        textShadow: '1px 0 white, 0 1px white, -1px 0 white, 0 -1px white',
    },
}));

export default function MediaControlCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.header}>
                    <div className={classes.content}>
                        <div className={classes.text}>
                            <Typography component="h1" variant="h3" align='center' paragraph>
                                Our company
                            </Typography>
                            <Typography variant="h6" paragraph className={classes.textStyle}>
                                Bark Manning Agency is a recruiting agent of Ukrainian seafarers for employment aboard vessels
                                of foreign Shipowners.
                            </Typography>
                            <Typography variant="body2" color="textPrimary" className={classes.textStyle}>
                                Since created in 1992 we have gained a proper experience, good reputation and formed a professional
                                staff team capable to select qualified crew to meet the expectations and specific requirements of our
                                Principals for our mutual benefit.
                                <br/>
                                Our quality system fully complies with the requirements of International Standard - ISO 9001:2015
                                and Maritime Labour Convention (MLC 2006). Bark is a licensed private company certified according to
                                International Standard ISO 9001: 2015 and as per requirements of Maritime Labour Convention (MLC 2006) by
                                Russian Maritime Register of Shipping.
                            </Typography>
                        </div>
                    </div>
                </CardContent>
            </div>
        </Card>
    );
}
