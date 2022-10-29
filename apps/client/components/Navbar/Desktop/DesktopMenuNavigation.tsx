import React from 'react'
import { MenuItem } from '~/components/Navbar/Navbar.interface'
import Box from '@mui/material/Box'
import { Typography, useTheme } from '@mui/material'
import { UserProfileMenu } from '~/components/Navbar/UserProfileMenu'

interface DesktopMenuNavigationProps {
    items: MenuItem[]
}

export const DesktopMenuNavigation: React.FC<DesktopMenuNavigationProps> = (props) => {
  const theme = useTheme()

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, pr: theme.spacing(1), justifyContent: 'flex-end' }}>
        {props.items.map((item) => (
          <Typography
            key={item.label}
            sx={{ my: 2, px: theme.spacing(1), color: theme.palette.grey['900'], display: 'block' }}
          >
            {item.label.toUpperCase()}
          </Typography>
        ))}
        <UserProfileMenu />
      </Box>
    </>
  )
}
