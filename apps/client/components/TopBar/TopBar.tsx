import React from 'react'
import { Box, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useTopBarContext } from './TopBarProvider'

export const TopBar: React.FC = () => {
  const { topBarNotification, dismissNotification } = useTopBarContext()

  if (!topBarNotification) {
    return null
  }

  return (
    <Box
      sx={{
        zIndex: 1300, // Higher than navbar (which is 1200)
        backgroundColor: '#d32f2f', // Red background
        color: 'white',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p
        style={{
          fontWeight: 500,
          textAlign: 'center',
          flex: 1,
          fontSize: '1rem',
          lineHeight: 1.5,
        }}
        dangerouslySetInnerHTML={{ __html: topBarNotification.message }}
      />
      <IconButton
        onClick={dismissNotification}
        sx={{
          color: 'white',
          padding: '4px',
          marginLeft: '16px',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
        aria-label="Zavřít oznámení"
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  )
}
