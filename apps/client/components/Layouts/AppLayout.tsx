import React, { PropsWithChildren } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Container } from '@mui/material'
import { navbarHeight, navbarHeightPx } from '~/components/Navbar/NavbarHeight'
import { Box } from '@mui/system'
import { Footer, FOOTER_HEIGHT } from '~/components/Footer/Footer'
import { useScreen } from '~/utility/use-screen'

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { onlySmallScreen } = useScreen()

  return (
    <>
      <Navbar />
      <Box component="main" sx={{
        marginTop: { xs: `${navbarHeight.xs}px`, sm: `${navbarHeight.md}px` },
      }}>
        <Container maxWidth="xl" sx={{ minHeight: onlySmallScreen ? `calc(100vh - ${navbarHeightPx.xs} - ${FOOTER_HEIGHT})` : `calc(100vh - ${navbarHeightPx.md} - ${FOOTER_HEIGHT})` }}>
          {children}
        </Container>
      </Box>
      <Footer />
    </>
  )
}
