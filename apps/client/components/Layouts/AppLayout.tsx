import React, { PropsWithChildren } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Container } from '@mui/material'
import { navbarHeight } from '~/components/Navbar/NavbarHeight'
import { Box } from '@mui/system'
import { Footer, FOOTER_HEIGHT } from '~/components/Footer/Footer'

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {

  return (
    <>
      <Navbar />
      <Box component="main" sx={{
        marginTop: { xs: `${navbarHeight.xs}px`, sm: `${navbarHeight.md}px` },
        marginBottom: FOOTER_HEIGHT
      }}>
        <Container maxWidth="xl">
          {children}
        </Container>
      </Box>
      <Footer />
    </>
  )
}
