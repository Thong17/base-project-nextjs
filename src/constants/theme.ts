import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: 'rgb(0, 69, 129)',
            contrastText: '#ffffff'
        },
        background: {
            default: '#ffffff',
            paper: '#f7f7f7',
        },
        text: {
            primary: '#000000',
            secondary: '#ffffff'
        }
    },
    shape: {
        borderRadius: 3
    }
})