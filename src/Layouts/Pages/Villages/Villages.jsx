import React from 'react';

// Material UI
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

import { Splide } from "@splidejs/react-splide";

import Slider from '../../../Components/Slider/Slider';

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

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box className={classes.sliderImages}>
                    <Splide aria-label="images" options={{ type: "loop", direction: "rtl", autoWidth: true, perMove: 1, autoplay: true, speed: 3000, gap: "10px", }}>
                        <Slider />
                    </Splide>
                </Box>
                <Box className={classes.villages}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardTitle} gutterBottom variant="h6">حي الظفير</Typography>
                            <Typography variant="body2">حي الظفير التاريخي جنوب شرقي الباحة و يبعد عنها حوالي كيلومتر واحد</Typography>
                            <NavLink to='/' className={classes.more} onClick={() => { }}>المزيد...</NavLink>
                        </CardContent>
                        <CardMedia className={classes.cardImage} image={zaferVillage} title="Al-Dhafeer Neighborhood" />
                    </Card>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardTitle} gutterBottom variant="h6">قصر بن رقوش</Typography>
                            <Typography variant="body2">يقع قصر بن رقوش على سفح تلة تضم مجموعة من الابنية التراثية في قرية بني سار التي  تبعد عن مدينة</Typography>
                            <NavLink to='/' className={classes.more} onClick={() => { }}>المزيد...</NavLink>
                        </CardContent>
                        <CardMedia className={classes.cardImage} image={ebnRakoshPalace} title="Qasr Bin Raqoush" />
                    </Card>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardTitle} gutterBottom variant="h6">قرية الملد</Typography>
                            <Typography variant="body2">تبعد قرية الملد حوالي 4.5 كلم عن مدينة الباحة, و هي احدى قرى السراة التراثية</Typography>
                            <NavLink to='/' className={classes.more} onClick={() => { }}>المزيد...</NavLink>
                        </CardContent>
                        <CardMedia className={classes.cardImage} image={meldVillage} title="Al-Mald Village" />
                    </Card>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardTitle} gutterBottom variant="h6">قرية الغشامرة</Typography>
                            <Typography variant="body2">تقع قرية الغشامرة جنوب العقشان و تبعد عنها حوالي 0.5 كلم</Typography>
                            <NavLink to='/' className={classes.more} onClick={() => { }}>المزيد...</NavLink>
                        </CardContent>
                        <CardMedia className={classes.cardImage} image={ghshamraVillage} title="Al-Ghashamra Village" />
                    </Card>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Villages;