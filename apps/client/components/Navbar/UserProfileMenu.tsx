import React, { useContext } from 'react'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import { ExpandMore } from '@mui/icons-material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'
import { useUser } from '~/src/api/auth/context/AuthContext'

const settings = ['Profil', 'Nastavení', 'Odhlásit se']

function stringToColor(string: string) {
  let hash = 0
  let i

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }
  /* eslint-enable no-bitwise */

  return color
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    alt: name
  }
}

export const UserProfileMenu: React.FC = () => {
  const theme = useTheme()
  const user = useUser()
  console.log('user', user)

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
        <Avatar {...stringAvatar(`${user.firstName} ${user.lastName}`)} />
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
        {settings.map((setting) => (
          <MenuItem key={setting} >
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
