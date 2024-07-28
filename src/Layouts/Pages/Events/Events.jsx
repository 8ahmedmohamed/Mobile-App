import React, { useEffect, useState } from 'react';

// Material UI
import { Box, Grid, Typography } from '@mui/material';

import { Splide } from "@splidejs/react-splide";

import Slider from '../../../Components/Slider/Slider';

// Translation
import { useTranslation } from 'react-i18next';

// Images
import saudiArabiaMap from '../../../assets/saudiArabiaMap.jpg';

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
                        <Grid item xs={5.5}>
                            <Box sx={{ margin: '20px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img style={{ height: '150px', width: '50%' }} src={saudiArabiaMap} alt="green iguana" />
                                <Typography variant="h6">{t('Events:alJanabinPark')}</Typography>
                                <Typography variant="span" color='text.secondary'>20/11/1444 H</Typography>
                                <Typography sx={{ textAlign: 'center', color: '#EE6821' }} variant="body2">
                                    Lizards are a widespread group of squamate reptiles.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={5.5}>
                            <Box sx={{ margin: '20px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img style={{ height: '150px', width: '50%' }} src={saudiArabiaMap} alt="green iguana" />
                                <Typography variant="h6">{t('Events:raghadanPark')}</Typography>
                                <Typography variant="span" color='text.secondary'>20/11/1444 H</Typography>
                                <Typography sx={{ textAlign: 'center', color: '#EE6821' }} variant="body2">
                                    Lizards are a widespread group of squamate reptiles.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={5.5}>
                            <Box sx={{ margin: '20px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img style={{ height: '150px', width: '50%' }} src={saudiArabiaMap} alt="green iguana" />
                                <Typography variant="h6">{t('Events:princeMishariPark')}</Typography>
                                <Typography variant="span" color='text.secondary'>20/11/1444 H</Typography>
                                <Typography sx={{ textAlign: 'center', color: '#EE6821' }} variant="body2">
                                    Lizards are a widespread group of squamate reptiles.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={5.5}>
                            <Box sx={{ margin: '20px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img style={{ height: '150px', width: '50%' }} src={saudiArabiaMap} alt="green iguana" />
                                <Typography variant="h6">{t('Events:alShukranPark')}</Typography>
                                <Typography variant="span" color='text.secondary'>20/11/1444 H</Typography>
                                <Typography sx={{ textAlign: 'center', color: '#EE6821' }} variant="body2">
                                    Lizards are a widespread group of squamate reptiles.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Events;