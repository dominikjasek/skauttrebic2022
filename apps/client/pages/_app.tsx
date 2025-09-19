import type { AppProps } from 'next/app'
import { AppLayout } from '~/components/Layouts/AppLayout'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { Hydrate,QueryClient,QueryClientProvider } from 'react-query'

import '../styles/globals.css'
import '../styles/ckeditor.css'
import lightTheme from '../styles/theme/lighttheme'
import * as React from 'react'
import { useRef } from 'react'
import { AuthProvider } from '~/src/api/auth/context/AuthContextProvider'
import { TopBarProvider } from '~/components/TopBar/TopBarProvider'

function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: any }>) {
  const queryclient = useRef(new QueryClient())

  return (
    <QueryClientProvider client={queryclient.current} >
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <AuthProvider>
            <TopBarProvider>
              <AppLayout>
                <title>Skaut Třebíč</title>
                <Component {...pageProps} />
              </AppLayout>
            </TopBarProvider>
          </AuthProvider>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
