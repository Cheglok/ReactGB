import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#b263c7',
            light: '#0d1c73',
            dark: '#611575',
        },
        secondary: {
            main: '#f50057',
            light: '#cb2661',
            dark: '#9e043a',
        },
        text: {
            disabled: 'rgba(88,54,54,0.38)',
            primary: '#11114e',
        },
        background: {
            default: '#d2d296',
        },
        warning: {
            main: '#f59406',
            light: '#f1aa42',
            dark: '#925a09',
        },
        info: {
            main: '#178dea',
            light: '#278ee0',
            dark: '#0f5287',
            contrastText: '#ecdede',
        },
    },
});