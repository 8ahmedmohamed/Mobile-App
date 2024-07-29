import React from 'react';

// Material UI
import { Box, Grid, Typography } from '@mui/material';

import { Splide } from "@splidejs/react-splide";

import Slider from '../../../Components/Slider/Slider';

// Images
import lohmaWatn from '../../../assets/lohmaWatn.jpg';

// Theme
import useStyles from './Theme';

const Events = () => {
    const { classes } = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box className={classes.sliderImages}>
                    <Splide aria-label="images" options={{ type: "loop", direction: "rtl", autoWidth: true, perMove: 1, autoplay: true, speed: 3000, gap: "10px", }}>
                        <Slider />
                    </Splide>
                </Box>
                <Box className={classes.events}>
                    <Grid container gap={2} justifyContent='center'>
                        <Grid className={classes.item} item xs={5.5}>
                            <img className={classes.image} src={lohmaWatn} alt="Lohma Watn" />
                            <Typography variant="h6">{('مسرحية " لحمة وطن "')}</Typography>
                            <Typography variant="span" color='text.secondary'>21/1/1446 H</Typography>
                            <Typography className={classes.description} variant="body2">الباحة - المسرح الرئيسي بأمانة</Typography>
                        </Grid>
                        <Grid className={classes.item} item xs={5.5}>
                            <img className={classes.image} src={lohmaWatn} alt="Lohma Watn" />
                            <Typography variant="h6">{('مسرحية " لحمة وطن "')}</Typography>
                            <Typography variant="span" color='text.secondary'>21/1/1446 H</Typography>
                            <Typography className={classes.description} variant="body2">الباحة - المسرح الرئيسي بأمانة</Typography>
                        </Grid>
                        <Grid className={classes.item} item xs={5.5}>
                            <img className={classes.image} src={lohmaWatn} alt="Lohma Watn" />
                            <Typography variant="h6">{('مسرحية " لحمة وطن "')}</Typography>
                            <Typography variant="span" color='text.secondary'>21/1/1446 H</Typography>
                            <Typography className={classes.description} variant="body2">الباحة - المسرح الرئيسي بأمانة</Typography>
                        </Grid>
                        <Grid className={classes.item} item xs={5.5}>
                            <img className={classes.image} src={lohmaWatn} alt="Lohma Watn" />
                            <Typography variant="h6">{('مسرحية " لحمة وطن "')}</Typography>
                            <Typography variant="span" color='text.secondary'>21/1/1446 H</Typography>
                            <Typography className={classes.description} variant="body2">الباحة - المسرح الرئيسي بأمانة</Typography>
                        </Grid>
                        <Grid className={classes.item} item xs={5.5}>
                            <img className={classes.image} src={lohmaWatn} alt="Lohma Watn" />
                            <Typography variant="h6">{('مسرحية " لحمة وطن "')}</Typography>
                            <Typography variant="span" color='text.secondary'>21/1/1446 H</Typography>
                            <Typography className={classes.description} variant="body2">الباحة - المسرح الرئيسي بأمانة</Typography>
                        </Grid>
                        <Grid className={classes.item} item xs={5.5}>
                            <img className={classes.image} src={lohmaWatn} alt="Lohma Watn" />
                            <Typography variant="h6">{('مسرحية " لحمة وطن "')}</Typography>
                            <Typography variant="span" color='text.secondary'>21/1/1446 H</Typography>
                            <Typography className={classes.description} variant="body2">الباحة - المسرح الرئيسي بأمانة</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Events;