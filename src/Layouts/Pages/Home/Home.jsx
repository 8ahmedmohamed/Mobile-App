import React, { useEffect, useState } from 'react';

// Material UI
import { Box, Grid as MuiGrid, Badge, Typography } from '@mui/material';

import { Splide } from "@splidejs/react-splide";

import Slider from '../../../Components/Slider/Slider';

// Translation
import { useTranslation } from 'react-i18next';

import "dayjs/locale/ar";
import "dayjs/locale/en";
//import dayjs from 'dayjs';
//import hijri from 'dayjs/plugin/hijri';
//import { styled } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar, PickersDay } from '@mui/x-date-pickers';

// Theme
import useStyles from './Theme';

const Home = () => {
    const { classes } = useStyles();
    const { t } = useTranslation(['Home']);
    const [position] = useState(localStorage.language);
    const [language, setLanguage] = useState('en');

    // const CustomPickersDay = styled(PickersDay, {
    //     shouldForwardProp: (prop) => prop !== 'isSelected' && prop !== 'isHovered',
    // })(({ theme, isSelected, day }) => ({
    //     borderRadius: 0,
    //     ...(isSelected && {
    //         '&:hover, &:focus': {
    //             backgroundColor: day.date() === 12 ? 'red' : 'blue',
    //         },
    //     }),
    // }));

    useEffect(() => {
        // i18next.changeLanguage(position);
        setLanguage(position)
    }, [t, position])

    const dayFormat = (day) => {
        switch (day) {
            case 'Sat':
                return 'السبت'
            case 'Sun':
                return 'الاحد'
            case 'Mon':
                return 'الاتنين'
            case 'Tue':
                return 'الثلاثاء'
            case 'Wed':
                return 'الاربعاء'
            case 'Thu':
                return 'الخميس'
            case 'Fri':
                return 'الجمعة'
            default:
                return day;
        }
    }

    let wetDays = [1, 2, 5, 10, 11, 15, 21, 22, 25, 27, 30];
    function ServerDay(props) {
        let { wetDays = [], day, outsideCurrentMonth, ...other } = props;
        const isSelected =
            !props.outsideCurrentMonth && wetDays.indexOf(props.day.date()) >= 0;
        return (
            <Badge
                key={props.day.toString()}
                color="primary" variant="dot" className={classes.dotStyle} anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}>
                <PickersDay {...other} day={day} sx={{ px: 2.5 }} outsideCurrentMonth={outsideCurrentMonth}/>
            </Badge>
        );
    }

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box className={classes.sliderImages}>
                    <Splide aria-label="images" options={{ type: "loop", direction: language === 'ar' ? "rtl" : "ltr", autoWidth: true, perMove: 1, autoplay: true, speed: 3000, gap: "10px", }}>
                        <Slider />
                    </Splide>
                </Box>
                <Box className={classes.home}>
                    <MuiGrid item xs={12} sm={12} md={6} lg={4} xl={12} className={classes.calendar}>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={localStorage.language || 'en'}>
                            {localStorage.language === 'ar' ? <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} dayOfWeekFormatter={(day) => dayFormat(String(day.$d).split(' ')[0])} views={['day']} slots={{
                                day: ServerDay
                            }} slotProps={{ day: { wetDays } }} /> : <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} dayOfWeekFormatter={(day) => String(day.$d).split(' ')[0]} views={['day']} slots={{
                                day: ServerDay
                            }} slotProps={{ day: { wetDays } }} />}
                        </LocalizationProvider>
                    </MuiGrid>
                <Box className={classes.contentText}>
                    <MuiGrid container spacing={1}>
                            <MuiGrid item xs={12} style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                <Box className={classes.mark}></Box>
                                <Typography variant='h6'>{t('Home:GovernorateSummer')}</Typography>
                            </MuiGrid>
                            <MuiGrid item xs={12} style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                <Box className={classes.mark}></Box>
                                <Typography variant='h6'>{t('Home:blegresh')}</Typography>
                            </MuiGrid>
                    </MuiGrid>
                </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Home;