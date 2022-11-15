import React from 'react'
import { useAuthRepository } from '~/src/api/auth/AuthRepository'
import { Container, Stack, TextField, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useForm } from 'react-hook-form'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useMutation } from 'react-query'
import { useJwtCookieStorage } from '~/src/api/auth/context/JwtCookieStorage'
import Link from 'next/link'
import Routes from '~/config/routes'

const forgotPassword: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ query }) => {
  const { resetPassword } = useAuthRepository()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()

  const { code } = query as Record<string,string | undefined>
  if (!code) {
    throw new Error('Registration hash is missing in query parameters')
  }

  const jwtCookieStorage = useJwtCookieStorage()
  jwtCookieStorage.delete()

  const { isSuccess: isSubmitted, isLoading: isSubmitLoading, mutateAsync: submitResetPassword } = useMutation(async (password: string) => resetPassword(password, code)
  )

  if (isSubmitted) {
    return (
      <Container sx={{ p: 6 }} maxWidth={'sm'}>
        <Typography variant={'h3'} align={'center'} mb={2}>Nastavení nového hesla</Typography>
        <Typography>
          Tvoje heslo bylo úspěšně nastaveno, pro přihlášení pokračuj <Link href={Routes.login}>zde</Link>.
        </Typography>
      </Container>
    )
  }

  return (
    <Container sx={{ p: 6 }} maxWidth={'sm'}>
      <Typography variant={'h3'} align={'center'} mb={2}>Nastavení nového hesla</Typography>
      <Typography align={'center'} sx={{ mb: 1 }}>Zadejte nové heslo.</Typography>
      <form noValidate onSubmit={handleSubmit((data) => submitResetPassword(data.password))}>
        <Stack direction='column' gap={2}>
          <TextField
            variant='outlined'
            label='Heslo'
            type='password'
            error={Boolean(errors.password)}
            helperText={errors.password?.message?.toString() ?? ''}
            required
            {...register('password', {
              required: { value: true, message: 'Zadejte heslo' },
              minLength: { value: 4, message: 'Heslo musí mít alespoň 4 znaky' }
            })}
          />
          <TextField variant='outlined' label='Potvrzení hesla' type='password'
            error={Boolean(errors.repeatPassword)}
            helperText={errors.repeatPassword?.message?.toString() ?? ''}
            required {...register('repeatPassword', {
              validate: (val: string) => {
                if (watch('password') !== val) {
                  return 'Hesla se musí shodovat'
                }
              }
            })}
          />
          <LoadingButton sx={{ width: '100%', py: 2, mx: 'auto' }} loading={isSubmitLoading} variant='contained' type="submit">Potvrdit nové heslo</LoadingButton>
        </Stack>
      </form>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<{query: ParsedUrlQuery}> = async (context) => {
  // The query params are set on `context.query`
  const { query } = context
  return {
    props: { query }
  }
}

export default forgotPassword
