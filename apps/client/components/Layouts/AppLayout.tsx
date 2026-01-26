import React, { PropsWithChildren } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Container } from '@mui/material'
import { navbarHeightPx, topbarHeight } from '~/components/Navbar/NavbarHeight'
import { Box } from '@mui/system'
import { Footer, FOOTER_HEIGHT_PX } from '~/components/Footer/Footer'
import { TopBarNotification } from '~/components/TopBar/TopBarNotification'
import { useTopBarContext } from '~/components/TopBar/TopBarProvider'

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { topBarNotification } = useTopBarContext()

  return (
    <>
      <Box zIndex={1000} position="fixed" top={0} left={0} right={0}>
        <TopBarNotification />
        <Navbar />
      </Box>
      <Box component="main" sx={{
        marginTop: `calc(${navbarHeightPx} + ${topBarNotification ? topbarHeight + 'px' : '0px'})`, // Account for both TopBar and Navbar height
      }}>
        <Container maxWidth="lg" sx={{ minHeight: `calc(100vh - ${navbarHeightPx} - ${FOOTER_HEIGHT_PX} - ${topBarNotification ? topbarHeight + 'px' : '0px'})` }}>
          {children}
        </Container>
      </Box>
      <Footer />
    </>
  )
}
