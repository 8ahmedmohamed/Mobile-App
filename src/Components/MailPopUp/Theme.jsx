import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            margin: 0,
        },
        email: {
            // right: '20px',
            zIndex: '9999',
            bottom: '70px',
            padding: '15px',
            display: 'none',
            position: 'fixed',
            alignItems: 'center',
            borderRadius: '50% !important',
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.dark,
            // '&.dirRight': {
            right: 'auto',
            left: '20px !important',
            // }
        }
    }
});

export default useStyles;