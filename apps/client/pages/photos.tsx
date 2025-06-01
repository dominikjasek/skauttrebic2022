import React from 'react'
import { Box, Button, Container, Link, Stack, Typography } from '@mui/material'
import { useAuth } from '~/src/api/auth/context/AuthContext'
import { useRouter } from 'next/router'
import Routes from '~/config/routes'
import dynamic from 'next/dynamic'
import { Loading } from '~/components/Loading/Loading'

interface PhotoLink {
  name: string
  url: string
}

const photoLinks: PhotoLink[] = [
  {
    url: 'https://eu.zonerama.com/2oddilskautu/743177?secret=KFO29DoVp6DryMYNWwnk6VNe3',
    name: 'Skauti'
  },
  {
    url: 'https://eu.zonerama.com/2oddilskautekTrebic/989542',
    name: 'Skautky'
  },
  {
    url: 'https://eu.zonerama.com/KarelJanicek/795748',
    name: 'Vlčata'
  },
  {
    url: 'https://eu.zonerama.com/svetluskyvedouci',
    name: 'Světlušky'
  },
  {
    url: 'https://eu.zonerama.com/Link/Open/64ef8e6eaa781646a0a4323f',
    name: 'Roveři',
  },
  {
    url: 'https://eu.zonerama.com/2oddilbenjaminku/1078727',
    name: 'Benjamínci'
  }
]

export const Photos = dynamic(() => Promise.resolve(() => {
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
}), {
  ssr: false
})

export default Photos

