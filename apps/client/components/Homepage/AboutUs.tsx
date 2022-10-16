import React from 'react'
import { Box, Divider, Stack, Typography, useTheme } from '@mui/material'
import { useScreen } from '~/utility/use-screen'

interface AboutUsProps {
text: string
}

export const AboutUs: React.FC<AboutUsProps> = ({ text }) => {
  const theme = useTheme()
  const { onlyMediumScreen } = useScreen()

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
      <Stack m={'auto'} maxWidth={onlyMediumScreen ? 'auto' : '60%'} flexDirection={onlyMediumScreen ? 'column' : 'row'} gap={'40px'}>
        <Stack justifyContent="center">
          <Typography variant={'h2'}>
            O&#160;nás
          </Typography>
        </Stack>
        <Divider
          sx={{
            bgcolor: 'white',
          }}
          flexItem orientation={onlyMediumScreen ? 'horizontal' : 'vertical'}
        />
        <div>{text}</div>
      </Stack>
    </Box>
  )
}
