import React, { PropsWithChildren } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Container, Typography } from '@mui/material'
import { useNavbarHeight } from '~/components/Navbar/NavbarHeight'
import { Box } from '@mui/system'

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const navbarHeight = useNavbarHeight()

  return (
    <>
      <Navbar />
      <Box component="main" sx={{
        marginTop: { xs: `${navbarHeight.xs}px`, sm: `${navbarHeight.md}px` }
      }}>
        <Container maxWidth="xl">
          {children}
        </Container>
      </Box>
      <Typography fontFamily={'skautbold'}>footer</Typography>
    </>
  )
}