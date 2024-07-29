import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => {
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
        events: {
            marginTop: '20px',
            marginBottom: '150px'
        },
        item: {
            display: 'flex',
            margin: '5px 0px',
            alignItems: 'center',
            flexDirection: 'column',
            '& h6': {
                fontSize: '0.95rem'
            },
            '& span': {
                fontSize: '0.6rem'
            }
        },
        image: {
            width: '35%',
            height: '100px'
        },
        description: {
            color: '#EE6821',
            fontSize: '0.7rem',
            textAlign: 'center',
        }
    }
});

export default useStyles;