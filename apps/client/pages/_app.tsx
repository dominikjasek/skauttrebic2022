import type { AppProps } from 'next/app'
import { AppLayout } from '../components/Layouts/AppLayout'
import { ThemeProvider, CssBaseline } from '@mui/material'

import '../styles/globals.css'
import lightTheme from '../styles/theme/lighttheme'
import * as React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <AppLayout>
        <title>Skaut Třebíč</title>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  )
}

export default MyApp