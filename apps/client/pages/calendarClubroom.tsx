import React from 'react'
import { NextPage } from 'next'
import { Box, Container, Typography } from '@mui/material'

export const CalendarClubroom: NextPage = () => {
  return (
    <Container>
      <Box pt={4}>
        <Typography variant={'h3'}> Kalendář klubovna </Typography>
      </Box>
      {/*Desktop*/}
      <Box pt={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        <iframe
          src={'https://calendar.google.com/calendar/embed?src=c_cd027c36814f9f61243cf72cbafb1b2dfbaaeba055a576bc5993693b51f6b80d@group.calendar.google.com&ctz=Europe%2FPrague&wkst=2&showPrint=0&showTz=0&showCalendars=1&title&showTitle=0&hl=cs&mode=MONTH'}
          style={{ border: 0 }}
          width="100%"
          height="600"
          scrolling="no">
        </iframe>
      </Box>
      {/*Mobile*/}
      <Box pt={6} sx={{ display: { xs: 'block', md: 'none' } }}>
        <iframe
          src={'https://calendar.google.com/calendar/embed?src=c_cd027c36814f9f61243cf72cbafb1b2dfbaaeba055a576bc5993693b51f6b80d@group.calendar.google.com&ctz=Europe%2FPrague&wkst=2&showPrint=0&showTz=0&showCalendars=1&title&showTitle=0&hl=cs&mode=AGENDA'}
          style={{ border: 0 }}
          width="100%"
          height="500"
          scrolling="no">
        </iframe>
      </Box>
    </Container>
  )
}

export default CalendarClubroom
