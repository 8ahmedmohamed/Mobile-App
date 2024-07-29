import React, { useEffect } from 'react';

// Translation
import i18next from "i18next";

// React Router
import { Outlet } from 'react-router-dom';

// Material UI
import { Box } from "@mui/material";

// Components
import Navigation from '../Components/Navigation/Navigation';
import MailPopUp from '../Components/MailPopUp/MailPopUp';

// Theme
import useStyles from './Theme';

const Container = () => {
    const { classes } = useStyles();

    useEffect(() => {
        i18next.changeLanguage(localStorage.language === "ar" ? "ar" : "en");
    }, [])

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Outlet />
            </Box>
            <Navigation />
            <MailPopUp />
        </React.Fragment>
    )
}

export default Container;