import { createTheme, experimental_sx as sx, ThemeOptions } from '@mui/material/styles';


export const theme: ThemeOptions = createTheme({
    palette: {
        primary: {
            main: '#6994F5',
            light: '#82a3f1',
            dark: '#5c7bce',
            contrastText: '#fff'
        },
        secondary: {
            main: '#a3aed0',
        },
        background: {
            default: '#EDEDED',

        },
        text: {
            primary: '#333333',
            secondary: '#A3AED0',
            disabled: '#b1b4bd',
        },
        error: {
            main: '#F2994A',
        },
        warning: {
            main: '#F44B4A',
        },
        success: {
            main: '#3ecd7b',
        },
        divider: '#EDEDED',
        info: {
            main: '#2196f3',
        },
    },
    typography: {
        fontFamily: 'Open Sans, sans-serif',
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontSize: 36,
        },
        h2: {
            fontSize: 30,
        },
        h4: {
            fontSize: 24,
        },
        h5: {
            fontSize: 20,
        },
        h6: {
            fontSize: 16,
        },
        subtitle1: {
            fontSize: 12,
        },
        body1: {
            fontSize: '1em',
        },
        button: {
            fontWeight: 600,
            lineHeight: 1.45,
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: sx({
                    borderRadius: '0.5em',
                    
                }),
                
            },
        },
        MuiCard: {
            styleOverrides: {
                root: sx({
                    borderRadius: '1em',
                }),
            },
        },

    }
});