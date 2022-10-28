import React, { useState } from 'react'
import { useAuthRepository } from '~/src/api/auth/AuthRepository'
import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useQuery } from 'react-query'
import { Loading } from '~/components/Loading/Loading'
import Link from 'next/link'
import Routes from '~/config/routes'

const confirmRegistration: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ query }) => {
  const { confirmRegistration, validateConfirmRegistration } = useAuthRepository()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()

  const { hash, email, firstName, lastName, id } = query as Record<string,string | undefined>
  if (!hash) {
    throw new Error('Registration hash is missing in query parameters')
  }
  if (!id) {
    throw new Error('Id is missing in query parameters')
  }

  const { isLoading, data: validationData } = useQuery('allowed-to-register', () => validateConfirmRegistration(id))

  if (isLoading) {
    return <Loading />
  }

  if (validationData === undefined) {
    throw new Error('Data was not loaded properly. Probably API is not responding. See network tab.')
  }
  const submitConfirmRegistration = async (password: string) => {
    await confirmRegistration({ code: hash, passwordConfirmation: password, password })
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Container sx={{ p: 6 }} maxWidth={'sm'}>
        <Typography variant={'h1'} mb={2}>Registrace</Typography>
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
      <Typography variant={'h1'} mb={2}>Registrace</Typography>
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
            required {...register('password', {
              required: { value: true, message: 'Zadejte heslo' },
              minLength: { value: 4, message: 'Heslo musí mít alespoň 4 znaky' }
            })}
          />
          <TextField variant='outlined' label='Potvrzení hesla' type='password'
            error={Boolean(errors.repeatPassword)}
            helperText={errors.repeatPassword?.message?.toString() ?? ''}
            required {...register('repeatPassword', {
              validate: (val: string) => {
                if (watch('password') != val) {
                  return 'Hesla se musí shodovat'
                }
              }
            })}
          />
          <Button sx={{ width: '200px', mx: 'auto' }} variant='contained' type="submit">Potvrdit heslo</Button>
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

export default confirmRegistration
