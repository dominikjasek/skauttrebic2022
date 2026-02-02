import React from 'react'
import { useAuth } from '~/src/api/auth/context/AuthContext'
import { useRouter } from 'next/router'
import Routes from '~/config/routes'
import dynamic from 'next/dynamic'
import { Loading } from '~/components/Loading/Loading'
import { useQuery } from 'react-query'
import { useMemberRegistrationRepository } from '~/src/api/memberRegistration/MemberRegistrationRepository'
import { Box, Button, Container, Divider, Link, Stack, Typography } from '@mui/material'
import { Html } from '~/components/Html/Html'

export const MemberRegistration = dynamic(() => Promise.resolve(() => {
  const router = useRouter()
  const authContext = useAuth()
  const isUserLoading = authContext?.auth?.isLoading
  const user = authContext?.auth?.user ?? null

  const memberRegistrationRepository = useMemberRegistrationRepository()
  const { data, isLoading } = useQuery('member-registration', memberRegistrationRepository.fetchMemberRegistrationData, {
    enabled: !!user
  })

  if (isUserLoading || isLoading) {
    return <Loading />
  }

  if (user === null) {
    router.replace(Routes.login + `?redirect=${router.asPath}`)
    return <Loading />
  }

  return (
    <Container>
      <Box pt={4}>
        <Typography variant={'h3'}> {data?.memberRegistration?.data?.attributes?.title} </Typography>
      </Box>
      <Box pt={2}>
        <Html html={data?.memberRegistration?.data?.attributes?.content ?? ''} />
      </Box>
      <Divider style={{ margin: '10px 0px' }} />
      {
        data?.memberRegistration?.data?.attributes?.files?.data &&
          data?.memberRegistration?.data?.attributes?.files?.data.map((file, i) =>
            <Stack key={i} direction={'row'} sx={{ m: 2, maxWidth: '100%' }} alignItems={'center'} flexWrap={'wrap'}>
              <Typography sx={{ mr: 2, wordBreak: 'break-word' }}>{file.attributes?.caption}</Typography>
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

export default MemberRegistration