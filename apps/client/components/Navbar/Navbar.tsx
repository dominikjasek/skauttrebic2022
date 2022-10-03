import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { SkautLogo } from '../Logo/SkautLogo'
import { Slide, useScrollTrigger, useTheme } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { MobileMenuModal } from './MobileMenuModal'
import { MenuItem as MenuItemType } from './Navbar.interface'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const HideOnScroll: React.FC<{children: React.ReactElement}> = ({ children }) => {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export const Navbar: React.FC = () => {
  const [isHamburgerOpen, setHamburger] = useState<boolean>(false)
  const theme = useTheme()

  const menuItems: MenuItemType[] = [
    {
      label: 'Aktuality'
    },
    {
      label: 'Fotogalerie'
    },
    {
      label: 'Klubovna'
    },
    {
      label: 'Kontakt'
    }
  ]

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setHamburger(true)
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    console.log('handleOpenUserMenu')
    // setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    // setHamburger(false)
    // setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    console.log('handleCloseUserMenu')
    setAnchorElUser(null)
  }

  const toggleHamburger = (newState: boolean) => {
    setHamburger(newState)
  }

  return (
    <HideOnScroll>
      <AppBar sx={{ backgroundColor: theme.palette.grey['300'] }}>
        <Container maxWidth="xl" disableGutters>
          <Toolbar disableGutters>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              disableRipple
              sx={{ color: theme.palette.grey['900'], height: { xs: 40, sm: 45, md: 55 }, p: 0, pl: 1, zIndex: 1000 }}
            >
              <SkautLogo width={'auto'} height={'100%'} />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="a"
              fontFamily="skautbold"
              mr={2}
              ml={1}
              color={theme.palette.grey['900']}
              sx={{
                display: { xs: 'none', md: 'flex' },
                textDecoration: 'none',
                lineHeight: 1.4
              }}
            >
              <Box>
                2. Skautské oddíly Třebíč
              </Box>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: theme.palette.grey['900'], display: 'block' }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
              <Box p={1} pr={2} zIndex={1000}>
                <Hamburger toggled={isHamburgerOpen} onToggle={toggleHamburger} color={theme.palette.grey['900']} />
              </Box>
              <MobileMenuModal items={menuItems} isOpen={isHamburgerOpen} />
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem key={item.label} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{item.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'block' } }}>
              <IconButton disableRipple onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="You" />
                <ExpandMore fontSize={'small'} />
              </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  )
}
