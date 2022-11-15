import React from 'react'
import { Alert, Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import { useMutation } from 'react-query'
import { LoginRequest, useAuthRepository } from '~/src/api/auth/AuthRepository'
import { useForm } from 'react-hook-form'
import { isValidEmail } from '~/src/utility/is-email'
import { LoadingButton } from '@mui/lab'
import { useRouter } from 'next/router'
import { useAuth } from '~/src/api/auth/context/AuthContext'
import { SimpleDialog } from '~/components/Dialog/SimpleDialog'
import Link from 'next/link'
import Routes from '~/config/routes'

const login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm()
  const router = useRouter()

  const [registerDialogOpen, setRegisterDialogOpen] = React.useState(false)

  const handleClickOpen = () => {
    setRegisterDialogOpen(true)
  }

  const handleClose = () => {
    setRegisterDialogOpen(false)
  }

  const auth = useAuth()
  const { login } = useAuthRepository()
  register('form')

  const { mutateAsync: execLogin, isLoading: isLoginLoading } = useMutation(async (data: LoginRequest) => {
    try {
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
    }
    catch (err) {
      setError('form', { type: 'custom', message: 'Neplatné přihlašovací údaje.' })
    }
  })

  const isUsernameValid = (val:string) => {
    const isEmail = isValidEmail(val)
    const isDefaultUsername = ['člen', 'clen'].includes(val)
    return Boolean(isEmail || isDefaultUsername)
  }

  return (
    <Container sx={{ p: 6 }} maxWidth={'sm'}>
      <Typography variant={'h3'} align={'center'} mb={2}>Přihlášení</Typography>
      <Typography align={'center'} sx={{ mb: 2 }}>Vyplňte své údaje.</Typography>
      <form noValidate onSubmit={handleSubmit(data=> execLogin({ identifier: data.email, password: data.password }))} >
        <Stack direction='column' gap={2}>
          {Boolean(errors.form) && <Alert severity="error">{errors.form?.message as string}</Alert>}
          <TextField
            variant={'outlined'}
            label={'Email nebo přihlašovací jméno'}
            type={'text'}
            error={Boolean(errors.email)}
            helperText={errors.email?.message?.toString() ?? ''}
            required
            {...register('email', {
              validate: (val: string) => {
                return isUsernameValid(val) ? true : 'Zadejte platný email'
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
      <Button
        sx={{ width: '100%', py: 1, mt: 1, mx: 'auto' }}
        variant="outlined" onClick={() => setRegisterDialogOpen(true)}
      >
        Registrace
      </Button>
      <SimpleDialog
        open={registerDialogOpen}
        onClose={() => setRegisterDialogOpen(false)}
        title={'Registrace'}
      >
        <Box m={3}>
          Abychom zabránili registraci lidí, kteří nejsou v našich oddílech, může registraci udělat pouze vedoucí. Prosím, kontaktujte <Link href={Routes.contacts}>některého z vedoucích</Link>  a požádejte ho o vytvoření účtu.
        </Box>
      </SimpleDialog>
    </Container>
  )
}

export default login
