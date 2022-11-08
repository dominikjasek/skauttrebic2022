import React from 'react'
import { Box, Button, Container, Link, Stack, Typography } from '@mui/material'
import { useUser } from '~/src/api/auth/context/AuthContext'
import { useRouter } from 'next/router'
import Routes from '~/config/routes'
import { Loading } from '~/components/Loading/Loading'
import dynamic from 'next/dynamic'

interface PhotoLink {
    name: string
    url: string
}

const photoLinks: PhotoLink[] = [
  {
    url: 'https://eu.zonerama.com/2oddilskautu/Album/8955897',
    name: 'Skauti'
  },
  {
    url: 'https://eu.zonerama.com/KarelJanicek/48905',
    name: 'Vlčata'
  },
  {
    url: 'https://eu.zonerama.com/RR2oddil/790978',
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

export const Photos = dynamic(() => Promise.resolve<React.FC>(() => {
  const user = useUser()
  const router = useRouter()

  if (!user) {
    router.push(Routes.login)
    return <Loading />
  }

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
}),
{
  ssr: false
})

export default Photos

