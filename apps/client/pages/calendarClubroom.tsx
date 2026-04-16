import React from 'react'
import { NextPage } from 'next'
import { Box, Container, Stack, Typography } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import Link from 'next/link'

export const CalendarClubroom: NextPage = () => {
  return (
    <Container>
      <Box pt={4}>
        <Typography variant={'h3'}> Obsazenost klubovny </Typography>
      </Box>
      {/*Desktop*/}
      <Box pt={4} sx={{ display: { xs: 'none', md: 'block' } }}>
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
      <Box pt={2} pb={3}>
        <Typography variant={'h3'} pt={1}> Kontakt pro rezervaci </Typography>
        <Typography pt={1}> (platí i pro oddíly našeho střediska) </Typography>
        <Link href={'tel:777284053'}>
          <Stack direction={'row'} gap={2} pt={0.75} alignItems={'center'}>
            <LocalPhoneIcon />
            <Typography>777 284 053</Typography>
          </Stack>
        </Link>
        <Stack direction={'row'} gap={2} pt={0.5} alignItems={'center'}>
          <EmailIcon />
          <Typography>klubovna.ruska@skaut.cz</Typography>
        </Stack>
      </Box>
    </Container>
  )
}

export default CalendarClubroom
