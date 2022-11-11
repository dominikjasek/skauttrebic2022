import React from 'react'
import { NextPage } from 'next'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { useClubRoomRepository } from '~/src/api/clubRoom/ClubroomRepository'
import { Loading } from '~/components/Loading/Loading'
import { Box, Container, Typography } from '@mui/material'
import { Html } from '~/components/Html/Html'

export const Clubroom: NextPage = () => {
  const clubRoomRepository = useClubRoomRepository()
  const { data, isLoading } = useQuery('clubroom', clubRoomRepository.fetchClubroomData)

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <Box pt={2}>
        <Html html={ data?.clubroom?.data?.attributes?.content ?? '' } />
      </Box>
    </Container>
  )
}

export const getStaticProps = async () => {
  const clubRoomRepository = useClubRoomRepository()
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('clubroom', clubRoomRepository.fetchClubroomData)

  return {

    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 120, // In seconds
  }
}

export default Clubroom
