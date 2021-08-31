import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import cadetProgram from '../img/cadetsProgram.jpg';

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
        backgroundImage: `url(${cadetProgram})`,
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
        padding: theme.spacing(1),
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
                                Cadets program
                            </Typography>
                            <Typography variant="body1" paragraph>
                                SAMOS Cadets program of Ukrainian Nationality to become eligible for first employment,
                                candidates must provide verification that they are studying for Bachelor Degree and they are
                                on fourth year course (third year course completed) Prior second employment following
                                requirements should be met:
                            </Typography>
                            <Typography variant="body2" color="textPrimary" paragraph>
                                <li>Excellent evaluations from superintendents, Captains or Chief Engineers during first employment</li>
                                <li>Evidence of Graduation (submission of Bachelor Diploma / Degree)</li>
                                <li>Verification that they enrolled to Higher (Master) Degree course</li>
                            </Typography>
                            <Typography variant="body2" color="textPrimary">
                                Upon completion of second employment as well as achievement of performance criteria, Cadets
                                will be promoted to Junior Cadets (a bit older in age) that have been already employed within
                                Samos Steamship Cadets’ ranks and have been obtained Bachelor degree (+COC) but have not
                                commenced their higher education will be eligible for promotion to Juniors, upon excellent
                                performances and verification that they enrolled to Higher (Master) degreeWe are always
                                available to provide clarifications and/or assistance on implementation of am policy scheme
                            </Typography>
                        </div>
                    </div>
                </CardContent>
            </div>
            {/*<CardMedia className={classes.cover} image={cadetProgram}/>*/}
        </Card>
    );
}
