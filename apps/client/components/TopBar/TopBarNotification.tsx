import React from 'react'
import { Box, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { TopBarNotification as TopBarNotificationType } from '~/components/TopBar/useTopBarNotification'
import { topbarHeight } from '~/components/Navbar/NavbarHeight'
import { useTopBarContext } from '~/components/TopBar/TopBarProvider'

const TOPBAR_NOTIFICATION_COLORS: Record<TopBarNotificationType['type'], string> = {
  info: '#294885',
  warning: '#F9B200' ,
  error: '#b72b1a',
}

export const TopBarNotification: React.FC = () => {
  const { dismissNotification, topBarNotification } = useTopBarContext()

  if (!topBarNotification) {
    return null
  }

  return (
    <Box
      sx={{
        zIndex: 1300,
        backgroundColor: TOPBAR_NOTIFICATION_COLORS[topBarNotification.type], // Red background
        color: 'white',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: topbarHeight + 'px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <div
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
        onClick={() => dismissNotification()}
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
