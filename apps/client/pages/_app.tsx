import type { AppProps } from 'next/app'
import { AppLayout } from '~/components/Layouts/AppLayout'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { Hydrate,QueryClient,QueryClientProvider } from 'react-query'

import '../styles/globals.css'
import lightTheme from '../styles/theme/lighttheme'
import * as React from 'react'
import { useRef } from 'react'
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: unknown }>) {
  const queryclient = useRef(new QueryClient())

  return (
    <QueryClientProvider client={queryclient.current} >
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <AppLayout>
            <title>Skaut Třebíč</title>
            <Component {...pageProps} />
            <Analytics />
          </AppLayout>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
