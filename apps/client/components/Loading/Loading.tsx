import React from 'react'
import { CircularProgress, Stack } from '@mui/material'

export const Loading: React.FC = () => {
  return (
    <Stack sx={{ justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <CircularProgress />
    </Stack>
  )
}
