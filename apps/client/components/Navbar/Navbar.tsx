import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { SkautLogo } from '../Logo/SkautLogo'
import { useTheme } from '@mui/material'
import { MobileMenuModal } from './Mobile/MobileMenuModal'
import { MenuItem as MenuItemType } from './Navbar.interface'
import Link from 'next/link'
import { DesktopMenuNavigation } from '~/components/Navbar/Desktop/DesktopMenuNavigation'
import Routes from '~/config/routes'
import { useScreen } from '~/utility/use-screen'
import { navbarHeight } from '~/components/Navbar/NavbarHeight'

export const Navbar: React.FC = () => {
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

  const { onlyMediumScreen, onlySmallScreen } = useScreen()
  return (
    <AppBar position="fixed" sx={{ backgroundColor: theme.palette.grey['300'], height: { xs: `${navbarHeight.xs}px`, sm: `${navbarHeight.md}px` } }}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar disableGutters>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            disableRipple
            sx={{ color: theme.palette.grey['900'], height: { xs: 40, sm: 45, md: 55 }, p: 0, pl: 2, zIndex: 1000 }}
          >
            <Link href={Routes.home} >
              <a style={{ width: 'auto', height: '100%' }}>
                <SkautLogo size={onlySmallScreen ? 0.5 : onlyMediumScreen ? 0.57 : 0.65} />
              </a>
            </Link>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            fontFamily="skautbold"
            mr={2}
            ml={2}
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
          <MobileMenuModal items={menuItems} />
          <DesktopMenuNavigation items={menuItems} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
