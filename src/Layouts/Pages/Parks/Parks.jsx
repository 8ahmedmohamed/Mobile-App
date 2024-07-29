import React from 'react';

// Material UI
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

import { Splide } from "@splidejs/react-splide";

import Slider from '../../../Components/Slider/Slider';

//React Router
import { NavLink } from 'react-router-dom';

// Images
import saudiArabiaMap from '../../../assets/saudiArabiaMap.jpg';

// Theme
import useStyles from './Theme';

const Parks = () => {
    const { classes } = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box className={classes.sliderImages}>
                    <Splide aria-label="images" options={{ type: "loop", direction: "rtl", autoWidth: true, perMove: 1, autoplay: true, speed: 3000, gap: "10px", }}>
                        <Slider />
                    </Splide>
                </Box>
                <Box className={classes.parks}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardTitle} gutterBottom variant="h6">منتزة الجنابين</Typography>
                            <Typography variant="body2">يعتبر منتزة و وادي الجنابين الذي يبعد عن المحافظة 15 كم جنوبا من أكثر المنتزهات هدوء و طبيعة, و هو مميز</Typography>
                            <NavLink to='/' className={classes.more} onClick={() => { }}>المزيد...</NavLink>
                        </CardContent>
                        <CardMedia className={classes.cardImage} image={saudiArabiaMap} title="Al-Janabin Park" />
                    </Card>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardTitle} gutterBottom variant="h6">منتزة رغدان</Typography>
                            <Typography variant="body2">اشهر المنتزهات بمنطقة الباحة يقع بالقرب من وسط مدينة الباحة و يعد من أجمل المنتزهات في منطقة </Typography>
                            <NavLink to='/' className={classes.more} onClick={() => { }}>المزيد...</NavLink>
                        </CardContent>
                        <CardMedia className={classes.cardImage} image={saudiArabiaMap} title="Raghadan Park" />
                    </Card>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardTitle} gutterBottom variant="h6">منتزة الامير مشاري بن سعود بن عبد العزيز</Typography>
                            <Typography variant="body2">يقع شمال غرب الباحة على و يتوفر به جميع الخدمات و يوجد بها شلال ينحدر في بركه محاطة بالصخور, كانت</Typography>
                            <NavLink to='/' className={classes.more} onClick={() => { }}>المزيد...</NavLink>
                        </CardContent>
                        <CardMedia className={classes.cardImage} image={saudiArabiaMap} title="Prince Mishari Park" />
                    </Card>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardTitle} gutterBottom variant="h6">منتزة الشكران</Typography>
                            <Typography variant="body2">منتزة الشكران</Typography>
                            <NavLink to='/' className={classes.more} onClick={() => { }}>المزيد...</NavLink>
                        </CardContent>
                        <CardMedia className={classes.cardImage} image={saudiArabiaMap} title="Al-Shukran Park" />
                    </Card>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Parks;