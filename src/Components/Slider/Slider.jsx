import React from 'react';

import { SplideSlide } from "@splidejs/react-splide";

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

// Theme
import useStyles from './Theme';

const Slider = () => {
    const { classes } = useStyles();

    return (
        <React.Fragment>
            <SplideSlide className={classes.splide}><img src={img1} alt="img1" /></SplideSlide>
            <SplideSlide className={classes.splide}><img src={img2} alt="img2" /></SplideSlide>
            <SplideSlide className={classes.splide}><img src={img3} alt="img3" /></SplideSlide>
        </React.Fragment>
    )
}

export default Slider;