import React from 'react'
import { useAuthRepository } from '~/src/api/auth/AuthRepository'
import { Box, Button, FormControlLabel, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'

const confirmRegistration: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ query }) => {
  const { confirmRegistration } = useAuthRepository()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()

  const { hash, email, firstName, lastName } = query as Record<string,string | undefined>

  if (!hash) {
    throw new Error('Registration hash is missing')
  }

  return (
    <Box sx={{
      p: 3
    }}>
      <Typography variant={'h3'} mb={2}>Registrace</Typography>
      <Typography sx={{ mb: 1 }}>Zadáním hesla dokončíte svou registraci.</Typography>
      <form noValidate onSubmit={handleSubmit((data) => confirmRegistration({ hash, password: data.password }))}>
        <Stack direction='column' gap={2}>
          <TextField variant='filled' label='Jméno' disabled {...register('name', { value: `${firstName} ${lastName}` })} />
          <TextField variant='filled' label='Email' disabled {...register('email', { value: email })} />
          <TextField
            variant='outlined'
            label='Heslo'
            type='password'
            error={Boolean(errors.password)}
            helperText={errors.password?.message?.toString() ?? ''}
            required {...register('password', { required: { value: true, message: 'Zadejte heslo' }, minLength: { value: 4, message: 'Heslo musí mít alespoň 4 znaky' } })}
          />
          <TextField variant='outlined' label='Potvrzení hesla' type='password' error={Boolean(errors.repeatPassword)} helperText={errors.repeatPassword ? 'Hesla se musí shodovat' : ''}
            required {...register('repeatPassword', {
              validate: (val: string) => {
                if (watch('password') != val) {
                  return 'Hesla se musí shodovat'
                }
              }
            })}
          />
          <Button sx={{ width: '200px', mx: 'auto' }} variant='contained' type="submit">Vytvořit účet</Button>
        </Stack>
      </form>
    </Box>
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
