import React from 'react'
import { useAuth } from '~/src/api/auth/context/AuthContext'
import { useRouter } from 'next/router'
import Routes from '~/config/routes'
import dynamic from 'next/dynamic'
import { Loading } from '~/components/Loading/Loading'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { useLeaderRepository } from '~/src/api/leader/LeaderRepository'
import { Box, Button, Container, Divider, Link, Stack, Typography } from '@mui/material'
import { Html } from '~/components/Html/Html'

export const Leader = dynamic(() => Promise.resolve(() => {
  const router = useRouter()
  const authContext = useAuth()
  const isUserLoading = authContext?.auth?.isLoading
  const user = authContext?.auth?.user ?? null

  const leaderRepository = useLeaderRepository()
  const { data, isLoading } = useQuery('leader', leaderRepository.fetchLeaderData, {
    enabled: (user?.role?.type === 'vedouci')
  })

  if (isUserLoading) {
    return <Loading />
  }

  if (isLoading) {
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
        <Typography variant={'h2'}> {data?.leader?.data?.attributes?.title} </Typography>
      </Box>
      <Box pt={2}>
        <Html html={data?.leader?.data?.attributes?.content ?? ''} />
      </Box>
      <Divider style={{ margin: '10px 0px' }} />
      {
        data?.leader?.data?.attributes?.files?.data &&
          data?.leader?.data?.attributes?.files?.data.map((file, i) =>
            <Stack key={i} direction={'row'} sx={{ m: 2 }} alignItems={'center'}>
              <Typography sx={{ mr: 2 }}>{file.attributes?.caption}</Typography>
              <Link href={file.attributes?.url} target={'_blank'}>
                <Button variant={'contained'}>
                  Stáhnout
                </Button>
              </Link>
            </Stack>)
      }
    </Container>
  )
}), {
  ssr: false
})

export const getStaticProps = async () => {
  const leaderRepository = useLeaderRepository()
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('leader', leaderRepository.fetchLeaderData)

  return {

    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 120, // In seconds
  }
}

export default Leader

