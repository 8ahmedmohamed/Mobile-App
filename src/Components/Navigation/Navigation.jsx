import React, { useEffect, useState } from 'react';

// Material UI
import { BottomNavigation, BottomNavigationAction, Box, Paper } from '@mui/material';

// Icons
import { CalendarMonth, Castle, Forest, Home } from '@mui/icons-material';

// React Router
import { useNavigate } from 'react-router-dom';

// Theme
import useStyles from './Theme';

const Navigation = () => {
    const { classes } = useStyles();
    const Navigate = useNavigate();
    const [value, setValue] = useState(0);
    const [option, setOption] = useState('home');

    useEffect(() => {
        setOption(localStorage.getItem('option'));
    }, [option])

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: '9999' }} elevation={3}>
                    <BottomNavigation className={`${value === 0 ? 'home' : (value === 1 ? 'events' : (value === 2 ? 'parks' : 'villages'))}`} showLabels value={value} onChange={(_, newValue) => { setValue(newValue); }}>
                        <BottomNavigationAction className={classes.home} label='الروزنامة' icon={<Home />} onClick={() => { setOption('home'); localStorage.setItem('option', 'home'); Navigate(''); }} />
                        <BottomNavigationAction className={classes.events} label='الفعاليات' icon={<CalendarMonth />} onClick={() => { setOption('events'); localStorage.setItem('option', 'events'); Navigate('Events'); }} />
                        <BottomNavigationAction className={classes.parks} label='المنتزهات' icon={<Forest />} onClick={() => { setOption('parks'); localStorage.setItem('option', 'parks'); Navigate('Parks'); }} />
                        <BottomNavigationAction className={classes.villages} label='القرى الاثرية' icon={<Castle />} onClick={() => { setOption('villages'); localStorage.setItem('option', 'villages'); Navigate('Villages'); }} />
                    </BottomNavigation>
                </Paper>
            </Box>
        </React.Fragment >
    )
}

export default Navigation;