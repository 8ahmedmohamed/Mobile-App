import React, { useEffect, useState } from 'react';

// Material UI
import { BottomNavigation, BottomNavigationAction, Box, Paper } from '@mui/material';

// Translation
import { useTranslation } from 'react-i18next';

// Icons
import { CalendarMonth, Castle, Forest, Home } from '@mui/icons-material';

// React Router
import { useNavigate } from 'react-router-dom';

// Theme
import useStyles from './Theme';

const Navigation = () => {
    const { classes } = useStyles();
    const { t } = useTranslation(['Global']);
    const Navigate = useNavigate();
    const [value, setValue] = useState(0);
    const [option, setOption] = useState('home');

    useEffect(() => {
        setOption(localStorage.getItem('option'));
        console.log(option);
    }, [option])

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation className={`${value === 0 ? 'home' : (value === 1 ? 'events' : (value === 2 ? 'parks' : 'villages'))}`} showLabels value={value} onChange={(_, newValue) => { setValue(newValue); }}>
                        <BottomNavigationAction className={classes.home} label={t('Global:home')} icon={<Home />} onClick={() => { setOption('home'); localStorage.setItem('option', 'home'); Navigate(''); }} />
                        <BottomNavigationAction className={classes.events} label={t('Global:events')} icon={<CalendarMonth />} onClick={() => { setOption('events'); localStorage.setItem('option', 'events'); Navigate('Events'); }} />
                        <BottomNavigationAction className={classes.parks} label={t('Global:parks')} icon={<Forest />} onClick={() => { setOption('parks'); localStorage.setItem('option', 'parks'); Navigate('Parks'); }} />
                        <BottomNavigationAction className={classes.villages} label={t('Global:villages')} icon={<Castle />} onClick={() => { setOption('villages'); localStorage.setItem('option', 'villages'); Navigate('Villages'); }} />
                    </BottomNavigation>
                </Paper>
            </Box>
        </React.Fragment >
    )
}

export default Navigation;