import React, { useEffect, useState } from 'react';

// Material UI
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

import { Splide } from "@splidejs/react-splide";

import Slider from '../../../Components/Slider/Slider';

// Translation
import { useTranslation } from 'react-i18next';

//React Router
import { NavLink } from 'react-router-dom';

// Images
import saudiArabiaMap from '../../../assets/saudiArabiaMap.jpg';

// Theme
import useStyles from './Theme';

const Parks = () => {
    const { classes } = useStyles();
    const { t } = useTranslation(['Parks']);
    const [position] = useState(localStorage.language);
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        setLanguage(position)
    }, [t, position])

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box className={classes.sliderImages}>
                    <Splide aria-label="images" options={{ type: "loop", direction: language === 'ar' ? "rtl" : "ltr", autoWidth: true, perMove: 1, autoplay: true, speed: 3000, gap: "10px", }}>
                        <Slider />
                    </Splide>
                </Box>
                <Box className={classes.parks}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardTitle} gutterBottom variant="h6">{t('Parks:alJanabinPark')}</Typography>
                            <Typography variant="body2">{t('Parks:alJanabinParkDescription')}</Typography>
                            <NavLink to='/' className={classes.more} onClick={() => { }}>{t('Parks:more')}...</NavLink>
                        </CardContent>
                        <CardMedia className={classes.cardImage} image={saudiArabiaMap} title="Al-Janabin Park" />
                    </Card>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardTitle} gutterBottom variant="h6">{t('Parks:raghadanPark')}</Typography>
                            <Typography variant="body2">{t('Parks:raghadanParkDescription')}</Typography>
                            <NavLink to='/' className={classes.more} onClick={() => { }}>{t('Parks:more')}...</NavLink>
                        </CardContent>
                        <CardMedia className={classes.cardImage} image={saudiArabiaMap} title="Raghadan Park" />
                    </Card>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardTitle} gutterBottom variant="h6">{t('Parks:princeMishariPark')}</Typography>
                            {/* <Typography className={classes.cardTitle} gutterBottom variant="h6">{t('Parks:princeMishariBinSaudbinAbdulazizPark')}</Typography> */}
                            <Typography variant="body2">{t('Parks:princeMishariParkDescription')}</Typography>
                            <NavLink to='/' className={classes.more} onClick={() => { }}>{t('Parks:more')}...</NavLink>
                        </CardContent>
                        <CardMedia className={classes.cardImage} image={saudiArabiaMap} title="Prince Mishari Park" />
                    </Card>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardTitle} gutterBottom variant="h6">{t('Parks:alShukranPark')}</Typography>
                            <Typography variant="body2">{t('Parks:alShukranParkDescription')}</Typography>
                            <NavLink to='/' className={classes.more} onClick={() => { }}>{t('Parks:more')}...</NavLink>
                        </CardContent>
                        <CardMedia className={classes.cardImage} image={saudiArabiaMap} title="Al-Shukran Park" />
                    </Card>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Parks;