import React, { PropsWithChildren } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Container } from '@mui/material'
import { navbarHeightPx } from '~/components/Navbar/NavbarHeight'
import { Box } from '@mui/system'
import { Footer, FOOTER_HEIGHT_PX } from '~/components/Footer/Footer'

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box component="main" sx={{
        marginTop: navbarHeightPx,
      }}>
        <Container maxWidth="lg" sx={{ minHeight: `calc(100vh - ${navbarHeightPx} - ${FOOTER_HEIGHT_PX})` }}>
          {children}
        </Container>
      </Box>
      <Footer />
    </>
  )
}
