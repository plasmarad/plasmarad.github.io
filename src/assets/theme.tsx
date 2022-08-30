//typescript BS
declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
  }
  


import {createTheme} from '@mui/material/styles';

export  const DefaultTheme = createTheme({
    palette: {
        primary: {
            main: '#e1a933',
        },
        secondary: {
            main: '#002542',
        },
        error: {
            main: '#FF0000',
        },
        background: {
            default: '#d2d2d2',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
    shape: {
        borderRadius: 2,
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});