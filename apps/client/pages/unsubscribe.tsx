import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { Box, Container, Typography } from '@mui/material'
import { useQueryParam } from '~/src/utility/use-query-param'
import { useAuthRepository } from '~/src/api/auth/AuthRepository'
import { useMutation } from 'react-query'
import { Loading } from '~/components/Loading/Loading'
import dynamic from 'next/dynamic'

export const unsubscribe: NextPage = dynamic(() => Promise.resolve(() => {
  const authRepository = useAuthRepository()

  const token = useQueryParam('token')

  const { mutateAsync, isLoading, isSuccess, isError } = useMutation('unsubscribe', async () => {
    return await authRepository.unsubscribe(token as string)
  })

  useEffect(() => {
    mutateAsync()
  }, [])

  if (!token) {
    throw new Error('Token is missing')
  }

  return (
    <Container maxWidth={'md'}>
      <Box py={4} textAlign={'center'}>
        <Typography variant={'h3'}>Odhlášení z odběru</Typography>
        <Typography sx={{ pt: 2 }}>
          { isError && 'Něco se pokazilo, token na odhlášení není platný.' }
          { isSuccess && 'Byli jste odhlášení z odběru nových příspěvků na webu.' }
          { isLoading && <Loading />}
        </Typography>
      </Box>
    </Container>
  )
}),
{
  ssr: false
}
)

export default unsubscribe
