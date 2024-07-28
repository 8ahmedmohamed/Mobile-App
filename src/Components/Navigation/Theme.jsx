import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            margin: 0,
            '& .home': {
                backgroundColor: theme.palette.navigation.home
            },
            '& .events': {
                backgroundColor: theme.palette.navigation.events
            },
            '& .parks': {
                backgroundColor: theme.palette.navigation.parks
            },
            '& .villages': {
                backgroundColor: theme.palette.navigation.villages
            },
            '& button': {
                color: theme.palette.primary.contrastText,
                '&.Mui-selected': {
                    color: theme.palette.primary.contrastText,
                },
                '& .MuiBottomNavigationAction-label': {
                    display: 'none',
                    '&.Mui-selected': {
                        display: 'inline-flex'
                    }
                }
            }
        }
    }
});

export default useStyles;