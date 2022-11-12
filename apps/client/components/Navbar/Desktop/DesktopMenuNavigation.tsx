import React from 'react'
import { MenuItem } from '~/components/Navbar/Navbar.interface'
import Box from '@mui/material/Box'
import { Typography, useTheme } from '@mui/material'
import { UserProfileMenu } from '~/components/Navbar/UserProfileMenu'
import { useUser } from '~/src/api/auth/context/AuthContext'
import Link from 'next/link'

interface DesktopMenuNavigationProps {
    items: MenuItem[]
}

export const DesktopMenuNavigation: React.FC<DesktopMenuNavigationProps> = (props) => {
  const theme = useTheme()
  const user = useUser()

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, pr: theme.spacing(1), justifyContent: 'flex-end' }}>
      {props.items.map((item) => (
        <Link
          href={item.link}
          key={item.label}
        >
          <Typography
            sx={{
              my: 2,
              px: theme.spacing(1),
              color: theme.palette.grey['900'],
              display: 'block',
              cursor: 'pointer'
            }}
          >
            {item.label.toUpperCase()}
          </Typography>
        </Link>
      ))}
      {user && <UserProfileMenu />}
    </Box>
  )
}
