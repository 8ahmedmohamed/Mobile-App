import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            margin: 0
        },
        scrollToTop: {
            right: '20px',
            bottom: '70px',
            padding: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50% !important',
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.dark,
            '&.dirRight': {
                right: 'auto',
                left: '40px !important',
            }
        }
    }
});

export default useStyles;