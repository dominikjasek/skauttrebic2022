import React from 'react'
import { CircularProgress, Box, Stack } from '@mui/material'

interface LoadingProps {
}

export const Loading: React.FC<LoadingProps> = () => {
  return (
    <Stack sx={{ justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <CircularProgress />
    </Stack>
  )
}
