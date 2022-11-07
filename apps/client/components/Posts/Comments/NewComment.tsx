import React, { useState } from 'react'
import { Divider, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { LoadingButton } from '@mui/lab'
import { useUser } from '~/src/api/auth/context/AuthContext'

interface NewCommentProps {
    isCommentSubmitLoading: boolean
    onSubmit: (content: string) => void
}

export const NewComment: React.FC<NewCommentProps> = ({ onSubmit, isCommentSubmitLoading }) => {
  const user = useUser()
  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <>
      { user &&
        <Stack sx={{ mt: 6, mb: 2 }}>
          <Divider sx={{ my: 2 }}></Divider>
          <Typography variant={'h5'} fontSize={'1.5rem'}>Nový komentář</Typography>
          <form noValidate onSubmit={handleSubmit((data) => onSubmit(data.content))}>

            <TextField
              sx={{
                pt: 2,
                mb: 1
              }}
              error={Boolean(errors.content)}
              helperText={errors.content?.message?.toString() ?? ''}
              fullWidth
              multiline
              {...register('content', { required: { value: true, message: 'Komentář nemůže být prázdný' }, })}
            />
            <LoadingButton sx={{ py: 1, display: 'flex', justifyContent: 'flex-end', ml: 'auto' }} variant='contained'
              loading={isCommentSubmitLoading} type="submit">Odeslat</LoadingButton>
          </form>
        </Stack>
      }
    </>
  )
}
