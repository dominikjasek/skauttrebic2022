import React from 'react'
import { useAuthRepository } from '~/src/api/auth/AuthRepository'
import { Container, Stack, TextField, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { Loading } from '~/components/Loading/Loading'
import Link from 'next/link'
import Routes from '~/config/routes'
import { useJwtCookieStorage } from '~/src/api/auth/context/JwtCookieStorage'
import { useRouter } from 'next/router'

const confirmRegistration: React.FC = () => {
  const { query } = useRouter()

  const { confirmRegistration, validateConfirmRegistration } = useAuthRepository()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()

  const { hash, email, firstName, lastName, id } = query

  const jwtCookieStorage = useJwtCookieStorage()
  jwtCookieStorage.delete()

  const { isLoading, data: validationData } = useQuery('allowed-to-register', () => validateConfirmRegistration(id as string), { enabled: typeof id === 'string' })

  const { isSuccess: isSubmitted, isLoading: isSubmitLoading, mutate: submitConfirmRegistration } = useMutation(async (password: string) => {
    await confirmRegistration({ hash: hash as string, id: id as string, password })
  })

  if (!id || !hash || isLoading) {
    return <Loading />
  }
  if (validationData === undefined) {
    throw new Error('Data was not loaded properly. Probably API is not responding. See network tab.')
  }

  if (isSubmitted) {
    return (
      <Container sx={{ p: 6 }} maxWidth={'sm'}>
        <Typography variant={'h3'} align={'center'} mb={2}>Registrace</Typography>
        <Typography>
          Tvoje heslo bylo úspěšně nastaveno, pro přihlášení pokračuj <Link href={Routes.login}>zde</Link>.
        </Typography>
      </Container>
    )
  }

  if (!validationData.isAllowedToSetPassword) {
    return (
      <Container sx={{ p: 6 }} maxWidth={'sm'}>
        <Typography align={'center'}>
          Už jsi zaregistrovaný! Můžeš se <Link href={Routes.login}>přihlásit</Link> pomocí hesla, které jsi si zvolil.
        </Typography>
      </Container>
    )
  }

  return (
    <Container sx={{ p: 6 }} maxWidth={'sm'}>
      <Typography variant={'h3'} align={'center'} mb={2}>Registrace</Typography>
      <Typography align={'center'} sx={{ mb: 1 }}>Zadáním hesla dokončíte svou registraci.</Typography>
      <form noValidate onSubmit={handleSubmit((data) => submitConfirmRegistration(data.password))}>
        <Stack direction='column' gap={2}>
          <TextField variant='outlined' label='Jméno a příjmení'
            disabled {...register('name', { value: `${firstName} ${lastName}` })} />
          <TextField variant='outlined' label='Email' disabled {...register('email', { value: email })} />
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
          <LoadingButton sx={{ width: '100%', py: 2, mx: 'auto' }} loading={isSubmitLoading} variant='contained' type="submit">Vytvořit účet</LoadingButton>
        </Stack>
      </form>
    </Container>
  )
}

export default confirmRegistration
