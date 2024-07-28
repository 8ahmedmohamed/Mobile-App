import React, { useEffect, useState } from 'react';

// Material UI
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

import { Splide } from "@splidejs/react-splide";

import Slider from '../../../Components/Slider/Slider';

// Translation
import { useTranslation } from 'react-i18next';

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
                    <Card sx={{ display: 'flex', margin: '20px 10px' }}>
                        <CardMedia sx={{ width: '35%' }} image={saudiArabiaMap} title="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5">{t('Parks:alJanabinPark')}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ display: 'flex', margin: '20px 10px' }}>
                        <CardMedia sx={{ width: '35%' }} image={saudiArabiaMap} title="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5">{t('Parks:raghadanPark')}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ display: 'flex', margin: '20px 10px' }}>
                        <CardMedia sx={{ width: '35%' }} image={saudiArabiaMap} title="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5">{t('Parks:princeMishariPark')}</Typography>
                            {/* <Typography gutterBottom variant="h5">{t('Parks:princeMishariBinSaudbinAbdulazizPark')}</Typography> */}
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ display: 'flex', margin: '20px 10px' }}>
                        <CardMedia sx={{ width: '35%' }} image={saudiArabiaMap} title="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5">{t('Parks:alShukranPark')}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Parks;