import React from 'react'
import IconButton from '@mui/material/IconButton'
import { ExpandMore } from '@mui/icons-material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'
import { useAuth, useUser } from '~/src/api/auth/context/AuthContext'
import { PersonAvatar } from '~/components/Avatar/PersonAvatar'

interface UserProfileMenuProps {
  onLogout?: () => void
}

export const UserProfileMenu: React.FC<UserProfileMenuProps> = ({ onLogout }) => {
  const theme = useTheme()
  const user = useUser()
  const auth = useAuth()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  if (user === null) {
    return (
      <span>prihlas se</span>
    )
  }

  const logout = () => {
    auth!.setAuth(null)
    onLogout?.()
  }

  return (
    <>
      <IconButton
        disableRipple
        sx={{ p: 0 }}
        aria-controls={open ? 'basic-appbar' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <PersonAvatar fullName={`${user.firstName} ${user.lastName}`} />
        <ExpandMore fontSize={'small'} />
      </IconButton>
      <Menu
        sx={{ mt: theme.spacing(1) }}
        id="menu-appbar"
        keepMounted
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={logout}>
          <Typography textAlign="center">Odhlásit se</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}
