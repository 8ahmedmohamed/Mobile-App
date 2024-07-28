import React from 'react';

// React Router
import { Outlet } from 'react-router-dom';

// Material UI
import { Box } from "@mui/material";

// Components
import Navigation from '../Components/Navigation/Navigation';

// Scroll To Top
import ScrollToTop from 'react-scroll-to-top';

// Icons
import { Email } from '@mui/icons-material';

// Theme
import useStyles from './Theme';

const Container = () => {
    const { classes } = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Outlet />
            </Box>
            <Navigation />
            <ScrollToTop smooth className={classes.scrollToTop + ` ${localStorage.language === 'ar' ? 'dirRight' : ''}`} component={<Email />} />
        </React.Fragment>
    )
}

export default Container;