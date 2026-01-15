import React from 'react'
import { MenuItem } from '~/components/Navbar/Navbar.interface'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'
import { UserProfileMenu } from '~/components/Navbar/UserProfileMenu'
import { useUser } from '~/src/api/auth/context/AuthContext'
import { DesktopMenuItem } from '~/components/Navbar/Desktop/DesktopMenuItem'

interface DesktopMenuNavigationProps {
  items: MenuItem[]
}

export const DesktopMenuNavigation: React.FC<DesktopMenuNavigationProps> = (props) => {
  const theme = useTheme()
  const user = useUser()

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, pr: theme.spacing(1), justifyContent: 'flex-end' }}>
      {props.items.map((item, i) => (
        <DesktopMenuItem item={item} key={i} />
      ))}
      {user && <UserProfileMenu />}
    </Box>
  )
}
