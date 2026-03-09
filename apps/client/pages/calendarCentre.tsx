import React from 'react'
import { useAuth } from '~/src/api/auth/context/AuthContext'
import { useRouter } from 'next/router'
import Routes from '~/config/routes'
import dynamic from 'next/dynamic'
import { Loading } from '~/components/Loading/Loading'
import { Box, Container, Typography } from '@mui/material'

export const CalendarCentre = dynamic(() => Promise.resolve(() => {
  const router = useRouter()
  const authContext = useAuth()
  const isUserLoading = authContext?.auth?.isLoading
  const user = authContext?.auth?.user ?? null

  if (isUserLoading) {
    return <Loading />
  }

  if (user === null) {
    router.replace(Routes.login + `?redirect=${router.asPath}`)
    return <Loading />
  }

  if (user.role?.type !== 'vedouci') {
    router.replace(Routes.error403)
    return <Loading />
  }

  return (
    <Container>
      <Box pt={4}>
        <Typography variant={'h3'}> Kalendář Středisko </Typography>
      </Box>
      {/*Desktop*/}
      <Box pt={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        <iframe
          src={'https://calendar.google.com/calendar/embed?src=rikitan.trebic%40skaut.cz&ctz=Europe%2FPrague&wkst=2&showPrint=1&showTz=0&showCalendars=1&title&showTitle=0&hl=cs&mode=MONTH'}
          style={{ border: 0 }}
          width="100%"
          height="600"
          scrolling="no">
        </iframe>
      </Box>
      {/*Mobile*/}
      <Box pt={6} sx={{ display: { xs: 'block', md: 'none' } }}>
        <iframe
          src={'https://calendar.google.com/calendar/embed?src=rikitan.trebic%40skaut.cz&ctz=Europe%2FPrague&wkst=2&showPrint=0&showTz=0&showCalendars=1&title&showTitle=0&hl=cs&mode=AGENDA'}
          style={{ border: 0 }}
          width="100%"
          height="500"
          scrolling="no">
        </iframe>
      </Box>
    </Container>
  )
}), {
  ssr: false
})

export default CalendarCentre

