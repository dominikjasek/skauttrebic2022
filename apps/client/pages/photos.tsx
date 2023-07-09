import React from 'react'
import { Box, Button, Container, Link, Stack, Typography } from '@mui/material'

interface PhotoLink {
    name: string
    url: string
}

const photoLinks: PhotoLink[] = [
  {
    url: 'https://eu.zonerama.com/2oddilskautu/743177',
    name: 'Skauti'
  },
  {
    url: 'https://eu.zonerama.com/KarelJanicek/795748',
    name: 'Vlčata'
  },
  {
    url: 'https://svetluskytrebic.rajce.idnes.cz',
    name: 'Světlušky'
  },
  {
    url: 'https://eu.zonerama.com/RR2oddil/796874',
    name: 'Roveři',
  },
  {
    url: 'https://eu.zonerama.com/2oddilskautekTrebic/989542',
    name: 'Skautky'
  },
  {
    url: 'https://eu.zonerama.com/2oddilbenjaminku/1078727',
    name: 'Benjamínci'
  }
]

export const Photos = () => {
  return (
    <Container sx={{ p: 4 }} maxWidth="md">
      <Box>
        <Typography variant={'h3'}>Fotogalerie</Typography>
        {
          photoLinks.map((photoLink, i) =>
            <Stack key={i} direction={'row'} sx={{ m: 2 }} alignItems={'center'}>
              <Typography sx={{ mr: 2 }}>{photoLink.name}</Typography>
              <Link href={photoLink.url} target={'_blank'}>
                <Button variant={'contained'}>
                  Prohlédnout
                </Button>
              </Link>
            </Stack>)
        }
      </Box>
    </Container>
  )
}

export default Photos

