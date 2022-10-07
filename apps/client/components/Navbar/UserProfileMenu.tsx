import React from 'react'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import { ExpandMore } from '@mui/icons-material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'

const settings = ['Profil', 'Nastavení', 'Odhlásit se']

export const UserProfileMenu: React.FC = () => {
  const theme = useTheme()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
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
        <Avatar alt="You" />
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