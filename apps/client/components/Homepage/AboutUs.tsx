import React from 'react'
import { Box, Divider, Stack, Typography, useTheme } from '@mui/material'

interface AboutUsProps {
text: string
}

export const AboutUs: React.FC<AboutUsProps> = ({ text }) => {
  const theme = useTheme()

  return (
    <Box sx={{
      width: '100vw',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      padding: '60px',
    }}>
      <Stack m={'auto'} width={'clamp(200px, 60%, 800px)'} flexDirection={'row'} gap={'40px'}>
        <Stack justifyContent="center">
          <Typography variant={'h2'}>
            O&#160;nás
          </Typography>
        </Stack>
        <Divider
          sx={{
            bgcolor: 'white',
          }}
          flexItem orientation='vertical'
        />
        <div>{text}</div>
      </Stack>
    </Box>
  )
}
