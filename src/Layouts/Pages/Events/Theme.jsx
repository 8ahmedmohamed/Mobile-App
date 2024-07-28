import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => {
    return {
        root: {
            margin: 0
        },
        sliderImages: {
            marginBottom: '0px',
        },
        events: {
            marginBottom: '150px'
        }
    }
});

export default useStyles;