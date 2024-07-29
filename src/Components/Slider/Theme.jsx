import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => {
    return {
        root: {
            margin: 0
        },
        splide: {
            '&.splide__slide': {
                width: '100%',
                marginLeft: '0px !important',
                marginRight: '0px !important',
                '& img': {
                    width: '100%',
                    height: '170px'
                }
            }
        },
    }
});

export default useStyles;