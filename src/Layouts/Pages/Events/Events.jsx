import React, { useEffect, useState } from 'react';

// Material UI
import { Box, Grid, Typography } from '@mui/material';

import { Splide } from "@splidejs/react-splide";

import Slider from '../../../Components/Slider/Slider';

// Translation
import { useTranslation } from 'react-i18next';

// Images
import lohmaWatn from '../../../assets/lohmaWatn.jpg';

// Theme
import useStyles from './Theme';

const Events = () => {
    const { classes } = useStyles();
    const { t } = useTranslation(['Events']);
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
                <Box className={classes.events}>
                    <Grid container gap={2} justifyContent='center'>
                        <Grid className={classes.item} item xs={5.5}>
                            <img className={classes.image} src={lohmaWatn} alt="Lohma Watn" />
                            <Typography variant="h6">{t('Events:lohmaWatnPlay')}</Typography>
                            <Typography variant="span" color='text.secondary'>21/1/1446 H</Typography>
                            <Typography className={classes.description} variant="body2">{t('Events:alBahaTheMainTheaterInAlAmana')}</Typography>
                        </Grid>
                        <Grid className={classes.item} item xs={5.5}>
                            <img className={classes.image} src={lohmaWatn} alt="Lohma Watn" />
                            <Typography variant="h6">{t('Events:lohmaWatnPlay')}</Typography>
                            <Typography variant="span" color='text.secondary'>21/1/1446 H</Typography>
                            <Typography className={classes.description} variant="body2">{t('Events:alBahaTheMainTheaterInAlAmana')}</Typography>
                        </Grid>
                        <Grid className={classes.item} item xs={5.5}>
                            <img className={classes.image} src={lohmaWatn} alt="Lohma Watn" />
                            <Typography variant="h6">{t('Events:lohmaWatnPlay')}</Typography>
                            <Typography variant="span" color='text.secondary'>21/1/1446 H</Typography>
                            <Typography className={classes.description} variant="body2">{t('Events:alBahaTheMainTheaterInAlAmana')}</Typography>
                        </Grid>
                        <Grid className={classes.item} item xs={5.5}>
                            <img className={classes.image} src={lohmaWatn} alt="Lohma Watn" />
                            <Typography variant="h6">{t('Events:lohmaWatnPlay')}</Typography>
                            <Typography variant="span" color='text.secondary'>21/1/1446 H</Typography>
                            <Typography className={classes.description} variant="body2">{t('Events:alBahaTheMainTheaterInAlAmana')}</Typography>
                        </Grid>
                        <Grid className={classes.item} item xs={5.5}>
                            <img className={classes.image} src={lohmaWatn} alt="Lohma Watn" />
                            <Typography variant="h6">{t('Events:lohmaWatnPlay')}</Typography>
                            <Typography variant="span" color='text.secondary'>21/1/1446 H</Typography>
                            <Typography className={classes.description} variant="body2">{t('Events:alBahaTheMainTheaterInAlAmana')}</Typography>
                        </Grid>
                        <Grid className={classes.item} item xs={5.5}>
                            <img className={classes.image} src={lohmaWatn} alt="Lohma Watn" />
                            <Typography variant="h6">{t('Events:lohmaWatnPlay')}</Typography>
                            <Typography variant="span" color='text.secondary'>21/1/1446 H</Typography>
                            <Typography className={classes.description} variant="body2">{t('Events:alBahaTheMainTheaterInAlAmana')}</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Events;