import React from 'react'
import { useAuth } from '~/src/api/auth/context/AuthContext'
import { useRouter } from 'next/router'
import Routes from '~/config/routes'
import dynamic from 'next/dynamic'
import { Loading } from '~/components/Loading/Loading'
import { NextPage } from 'next'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { useLeadersRepository } from '~/src/api/leaders/LeadersRepository'
import { Box, Container, Typography } from '@mui/material'
import { Html } from '~/components/Html/Html'
import { PhotoGallery, PhotoProp } from '~/components/Gallery/Gallery'

export const Leaders = dynamic(() => Promise.resolve(() => {
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

  if (!user.leader) {
    router.replace(Routes.error403)
    return <Loading />
  }

  const leadersRepository = useLeadersRepository()
  const { data, isLoading } = useQuery('clubroom', leadersRepository.fetchLeadersData)

  return (
    <Container>
      <Box pt={2}>
        <Typography variant={'h3'}>Test</Typography>
        <Html html={data?.leader?.data?.attributes?.content ?? ''} />
      </Box>
      {
        data?.leader?.data?.attributes?.files?.data &&
          <PhotoGallery photos={data.leader.data.attributes.files.data.map(d => d.attributes as PhotoProp)} galleryId={'clubroom-photo-gallery'} />
      }
    </Container>
  )
}), {
  ssr: false
})

export const getStaticProps = async () => {
  const clubRoomRepository = useLeadersRepository()
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('clubroom', clubRoomRepository.fetchLeadersData)

  return {

    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 120, // In seconds
  }
}

export default Leaders

