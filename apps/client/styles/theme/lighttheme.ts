import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#294885',
            light: '#3979B5'
        },
        secondary: {
            main: '#F49E00',
            light: '#F9B200'
        },
    },
    typography: {
        fontFamily: 'themix',
    }
})

export default lightTheme