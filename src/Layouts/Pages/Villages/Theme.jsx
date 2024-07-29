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
        villages: {
            marginBottom: '150px'
        },
        card: {
            display: 'flex',
            height: '100px',
            boxShadow: 'none',
            margin: '20px 10px',
            borderRadius: '0px',
            justifyContent: 'space-between'
        },
        cardContent: {
            width: '70%',
            padding: '0px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            '& p': {
                maxHeight: '35px',
                fontWeight: '600',
                fontSize: '0.7rem'
            }
        },
        cardTitle: {
            fontSize: '1rem',
            fontWeight: '600',
            color: theme.palette.navigation.home
        },
        cardImage: {
            width: '25%'
        },
        more: {
            fontWeight: '600',
            fontSize: '0.7rem',
            textDecoration: 'none',
            color: theme.palette.navigation.home
        }
    }
});

export default useStyles;