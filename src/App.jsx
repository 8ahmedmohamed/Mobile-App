import React, { useEffect } from 'react';

// Theme Provider
import { ThemeProvider } from '@mui/material/styles';

// Material UI Base Line
import CssBaseline from '@mui/material/CssBaseline';

// Route Provider
import RouteProvider from './Services/Routes';

// Theme
import theme from './Theme';

const App = () => {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <RouteProvider>
                    <CssBaseline />
                </RouteProvider>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;