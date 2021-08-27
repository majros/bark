import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import company from '../img/company.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        flex: '1 0 auto',
        padding: theme.spacing(0),
    },
    background: {
        backgroundImage: `url(${company})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    content: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    text: {
        padding: theme.spacing(1),
    },
}));

export default function MediaControlCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            {/*<CardMedia className={classes.cover} image={company}/>*/}
            <div className={classes.details}>
                <CardContent className={classes.header}>
                    <div className={classes.background}>
                        <div className={classes.content}>
                            <div className={classes.text}>
                                <Typography component="h1" variant="h3" align='center' paragraph>
                                    Our company
                                </Typography>
                                <Typography variant="h6" paragraph>
                                    Bark Manning Agency is a recruiting agent of Ukrainian seafarers for employment aboard vessels
                                    of foreign Shipowners.
                                </Typography>
                                <Typography variant="body2" color="textPrimary">
                                    Since created in 1992 we have gained a proper experience, good reputation and formed a professional
                                    staff team capable to select qualified crew to meet the expectations and specific requirements of our
                                    Principals for our mutual benefit.
                                </Typography>
                                <Typography variant="body2" color="textPrimary">
                                    Our quality system fully complies with the requirements of International Standard - ISO 9001:2015
                                    and Maritime Labour Convention (MLC 2006). Bark is a licensed private company certified according to
                                    International Standard ISO 9001: 2015 and as per requirements of Maritime Labour Convention (MLC 2006) by
                                    Russian Maritime Register of Shipping.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </div>
        </Card>
    );
}
