import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#556ee6',
            dark: '#276ac2',
            light: '#a6b0cf',
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#79829c',
            dark: '#2a3042',
            light: '#f3f3f8',
            contrastText: '#212529'
        },
        navigation: {
            home: '#00A99E',
            events: '#B3476E',
            parks: '#509179',
            villages: '#EE6821'
        }
    },
    typography: {
        fontSize: 13,
        fontFamily: [
            'Poppins',
            'sans-serif'
        ].join(',')
    }
});

export default theme;