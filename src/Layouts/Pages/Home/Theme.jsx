import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            margin: 0
        },
        sliderImages: {
            marginBottom: '0px',
            '& .splide': {
                height: '170px'
            }
        },
        home: {
            marginBottom: '150px'
        },
        calendar: {
            '& .MuiDateCalendar-root': {
                width: '100% !important'
            },
            '& .MuiPickersCalendarHeader-root': {
                justifyContent: 'space-between !important',
                '& .MuiPickersCalendarHeader-labelContainer': {
                    marginRight: 0
                }
            },
            '& .MuiDayCalendar-header': {
                justifyContent: 'space-around !important'
            },
            '& .MuiDayCalendar-weekContainer': {
                justifyContent: 'space-around !important'
            }
        },
        contentText: {
            paddingInlineStart: '17px',
            paddingTop: '30px',
            '& .MuiGrid-item': {
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }
        },
        mark: {
            width: '10px',
            height: '30px',
            background: theme.palette.navigation.villages
        },
        dotStyle: {
            '& .MuiBadge-badge': {
                backgroundColor: theme.palette.navigation.villages,
                bottom: '3px !important',
                right: '22px !important'
            }
        }
    }
});

export default useStyles;