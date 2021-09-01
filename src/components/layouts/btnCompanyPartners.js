import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import nomikosPic from '../img/nomikos.jpg';
import samosPic from '../img/samos.jpg';
import albertaPic from '../img/albertaLimnionas.jpg';
import offenPic from '../img/offen.jpg';

const listOfPartners = [
    {
        url: nomikosPic,
        title: 'A.M. NOMIKOS T.W.M.A. S.A.',
        site: 'https://www.amnomikos.com/',
        width: '25%',
    },
    {
        url: samosPic,
        title: 'SAMOS STEAMSHIP Co.',
        site: 'https://samossteamship.gr/#home',
        width: '25%',
    },
    {
        url: albertaPic,
        title: 'Alberta Shipbrokers Ltd.',
        site: 'https://www.albertaship.com/',
        width: '25%',
    },
    {
        url: offenPic,
        title: 'OffenGroup',
        site: 'https://offengroup.de/',
        width: '25%',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

export default function ButtonBases() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {listOfPartners.map((_listOfPartners) => (
                <ButtonBase
                    focusRipple
                    key={_listOfPartners.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: _listOfPartners.width,
                    }}
                    target='_blank'
                    href={_listOfPartners.site}
                >
                    <span
                        className={classes.imageSrc}
                        style={{
                        backgroundImage: `url(${_listOfPartners.url})`,
                        }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                    <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        {_listOfPartners.title}
                        <span className={classes.imageMarked} />
                    </Typography>
                    </span>
                </ButtonBase>
            ))}
        </div>
    );
}