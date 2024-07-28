import React, { useEffect, useState } from 'react';

// Material UI
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

import { Splide } from "@splidejs/react-splide";

import Slider from '../../../Components/Slider/Slider';

// Translation
import { useTranslation } from 'react-i18next';

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
                    <Card sx={{ display: 'flex', margin: '20px 10px' }}>
                        <CardMedia sx={{ width: '35%' }} image={zaferVillage} title="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5">{t('Villages:alDhafeerNeighborhood')}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ display: 'flex', margin: '20px 10px' }}>
                        <CardMedia sx={{ width: '35%' }} image={ebnRakoshPalace} title="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5">{t('Villages:qasrBinRaqoush')}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ display: 'flex', margin: '20px 10px' }}>
                        <CardMedia sx={{ width: '35%' }} image={meldVillage} title="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5">{t('Villages:alMaldVillage')}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ display: 'flex', margin: '20px 10px' }}>
                        <CardMedia sx={{ width: '35%' }} image={ghshamraVillage} title="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5">{t('Villages:alGhashamraVillage')}</Typography>
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

export default Villages;