import React from 'react'
import { Box, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useAuthRepository } from '~/src/api/auth/AuthRepository'
import { useMutation } from 'react-query'
import { isValidEmail } from '~/src/utility/is-email'
import { LoadingButton } from '@mui/lab'

export const ForgetPassword: React.FC = () => {
  const { handleSubmit, register, getValues, formState: { errors } } = useForm()
  const { forgotPassword } = useAuthRepository()
  const { mutateAsync: execForgotPassword, isLoading, isSuccess: isForgotPasswordExecuted } = useMutation('forgotPassword', (email: string) => forgotPassword(email))

  if (isForgotPasswordExecuted) {
    return <Box>
      <Typography>{`Na váš email ${getValues().email} byl odeslán email s odkazem na nastavení nového hesla.`}</Typography>
    </Box>
  }

  return (
    <Box>
      <Typography mb={1}>Zadejte email, pod kterým jste byli zaregistrováni. Na email vám přijde odkaz s odkazem na nastavení nového hesla.</Typography>
      <form noValidate onSubmit={handleSubmit(data => execForgotPassword(data.email))}>
        <Stack direction={'column'} gap={2}></Stack>
        <TextField
          sx={{ width: '100%' }}
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
        <LoadingButton
          sx={{ width: '100%', py: 2, mt: 4, mx: 'auto' }}
          loading={isLoading}
          variant='contained'
          type="submit"
        >
          Přihlásit se
        </LoadingButton>

      </form>
    </Box>
  )
}
