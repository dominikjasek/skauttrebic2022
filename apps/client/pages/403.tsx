import React from 'react'
import { NextPage } from 'next'
import { Box, Container, Typography } from '@mui/material'

export const ErrorPage: NextPage = () => {
  return (
    <Container maxWidth={'md'}>
      <Box pt={4} mx="auto" width="fit-content">
        <Typography variant={'h1'}>Error 403</Typography>
      </Box>
      <Box pt={4} mx="auto" width="fit-content">
        <Typography variant={'h4'}>K této stránce nemáš přístup</Typography>
      </Box>
      <Box pt={1} mx="auto" width="fit-content">
        <Typography variant={'h6'}>Pokud jsi vedoucí, uprav si svůj účet v nastavení</Typography>
      </Box>
    </Container>
  )
}

export default ErrorPage