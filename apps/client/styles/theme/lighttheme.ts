import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
  typography: {
    fontFamily: 'themix',
    h1: {
      fontFamily: 'skautbold',
      fontSize: '3rem',
      textAlign: 'center',
      margin: '15px'
    },
    h3: {
      fontFamily: 'skautbold',
      fontSize: '1.5rem',
    },
  },
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
    warning: {
      main: '#d30606'
    }
  },
})

export default lightTheme
