import React from 'react'
import { NextPage } from 'next'
import { Box, Container, Typography } from '@mui/material'

export const ErrorPage: NextPage = () => {
  return (
    <Container maxWidth={'md'}>
      <Box pt={4}>
        <Typography variant={'h4'}>Jejda, něco se pokazilo. Prosím kontaktujte správce webu.</Typography>
      </Box>
    </Container>
  )
}

export default ErrorPage
