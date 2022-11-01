import React from 'react'
import { Container, Stack, TextField, Typography } from '@mui/material'
import { useMutation } from 'react-query'
import { LoginRequest, useAuthRepository } from '~/src/api/auth/AuthRepository'
import { useForm } from 'react-hook-form'
import { isValidEmail } from '~/src/utility/is-email'
import { LoadingButton } from '@mui/lab'
import { useRouter } from 'next/router'
import { useAuth } from '~/src/api/auth/context/AuthContext'

const login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const router = useRouter()

  const auth = useAuth()
  const { login } = useAuthRepository()

  const { mutateAsync: execLogin, isLoading: isLoginLoading } = useMutation(async (data: LoginRequest) => {
    const response = await login(data)
    auth?.setAuth({
      jwt: response.jwt,
      user: {
        firstName: response.user.firstName,
        lastName: response.user.lastName,
        id: response.user.id,
        email: response.user.email
      }
    })
    await router.replace({
      pathname: '/',
    })
  })

  return (
    <Container sx={{ p: 6 }} maxWidth={'sm'}>
      <Typography variant={'h3'} align={'center'} mb={2}>Přihlášení</Typography>
      <Typography align={'center'} sx={{ mb: 2 }}>Vyplňte své údaje.</Typography>
      <form noValidate onSubmit={handleSubmit(data=> execLogin({ identifier: data.email, password: data.password }))} >
        <Stack direction='column' gap={2}>
          <TextField
            variant={'outlined'}
            label={'Email'}
            type={'text'}
            error={Boolean(errors.email)}
            helperText={errors.email?.message?.toString() ?? ''}
            required
            {...register('email', {
              validate: (val: string) => {
                return isValidEmail(val) ? true : 'Zadejte platný email'
              }
            })}
          />
          <TextField
            variant='outlined'
            label='Heslo'
            type='password'
            error={Boolean(errors.password)}
            helperText={errors.password?.message?.toString() ?? ''}
            required
            {...register('password', {
              required: { value: true, message: 'Zadejte heslo' },
            })}
          />
          <LoadingButton
            sx={{ width: '100%', py: 2, mx: 'auto' }}
            loading={isLoginLoading}
            variant='contained'
            type="submit"
          >
            Přihlásit se
          </LoadingButton>

        </Stack>
      </form>
    </Container>
  )
}

export default login
