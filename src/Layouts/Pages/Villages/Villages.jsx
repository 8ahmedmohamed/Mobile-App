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
import zaferVillage from '../../../assets/zaferVillage.jpg';
import ebnRakoshPalace from '../../../assets/ebnRakoshPalace.jpg';
import meldVillage from '../../../assets/meldVillage.jpg';
import ghshamraVillage from '../../../assets/ghshamraVillage.jpg';

// Theme
import useStyles from './Theme';

const Villages = () => {
    const { classes } = useStyles();
    const { t } = useTranslation(['Villages']);
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
                <Box className={classes.villages}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardTitle} gutterBottom variant="h6">{t('Villages:alDhafeerNeighborhood')}</Typography>
                            <Typography variant="body2">{t('Villages:alDhafeerNeighborhoodDescription')}</Typography>
                            <NavLink to='/' className={classes.more} onClick={() => { }}>{t('Villages:more')}...</NavLink>
                        </CardContent>
                        <CardMedia className={classes.cardImage} image={zaferVillage} title="Al-Dhafeer Neighborhood" />
                    </Card>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardTitle} gutterBottom variant="h6">{t('Villages:qasrBinRaqoush')}</Typography>
                            <Typography variant="body2">{t('Villages:qasrBinRaqoushDescription')}</Typography>
                            <NavLink to='/' className={classes.more} onClick={() => { }}>{t('Villages:more')}...</NavLink>
                        </CardContent>
                        <CardMedia className={classes.cardImage} image={ebnRakoshPalace} title="Qasr Bin Raqoush" />
                    </Card>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardTitle} gutterBottom variant="h6">{t('Villages:alMaldVillage')}</Typography>
                            <Typography variant="body2">{t('Villages:alMaldVillageDescription')}</Typography>
                            <NavLink to='/' className={classes.more} onClick={() => { }}>{t('Villages:more')}...</NavLink>
                        </CardContent>
                        <CardMedia className={classes.cardImage} image={meldVillage} title="Al-Mald Village" />
                    </Card>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardTitle} gutterBottom variant="h6">{t('Villages:alGhashamraVillage')}</Typography>
                            <Typography variant="body2">{t('Villages:alGhashamraVillageDescription')}</Typography>
                            <NavLink to='/' className={classes.more} onClick={() => { }}>{t('Villages:more')}...</NavLink>
                        </CardContent>
                        <CardMedia className={classes.cardImage} image={ghshamraVillage} title="Al-Ghashamra Village" />
                    </Card>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Villages;