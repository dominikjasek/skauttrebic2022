import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { SkautLogo } from '../Logo/SkautLogo'
import { Box, Stack, useTheme } from '@mui/material'
import { MobileMenuModal } from './Mobile/MobileMenuModal'
import { MenuItem as MenuItemType } from './Navbar.interface'
import Link from 'next/link'
import { DesktopMenuNavigation } from '~/components/Navbar/Desktop/DesktopMenuNavigation'
import Routes from '~/config/routes'
import { useScreen } from '~/src/utility/use-screen'
import { navbarHeight } from '~/components/Navbar/NavbarHeight'
import { useMemo } from 'react'
import { useUser } from '~/src/api/auth/context/AuthContext'

const ITEMS: MenuItemType[] = [
  {
    label: 'Aktuality',
    link: Routes.posts
  },
  {
    label: 'Fotogalerie',
    link: Routes.photos
  },
  {
    label: 'Klubovna',
    link: Routes.clubRoom
  },
  {
    label: 'Kontakt',
    link: Routes.contact
  }
]

export const Navbar: React.FC = () => {
  const theme = useTheme()
  const user = useUser()

  const menuItems = useMemo(() => {
    const itemsCpy = [...ITEMS]
    if (user === null) {
      itemsCpy.push({ label: 'Přihlásit se', link: Routes.login })
    }
    return itemsCpy
  }, [user])

  const { onlyMediumScreen, onlySmallScreen } = useScreen()
  return (
    <AppBar position="fixed" sx={{ backgroundColor: theme.palette.grey['300'], height: { xs: `${navbarHeight.xs}px`, sm: `${navbarHeight.md}px` } }}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar disableGutters>
          <Link href={Routes.home}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
              <Box sx={{ color: theme.palette.grey['900'], p: 0, pl: 2, zIndex: 1000, display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
                <SkautLogo size={onlySmallScreen ? 0.5 : onlyMediumScreen ? 0.57 : 0.65} />
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="a"
                fontFamily="skautbold"
                mr={2}
                ml={2}
                color={theme.palette.grey['900']}
                sx={{
                  display: 'flex',
                  textDecoration: 'none',
                  lineHeight: 1.4,
                  cursor: 'pointer'
                }}
              >
                {onlySmallScreen ? 'Skaut Třebíč' : '2. Skautské oddíly Třebíč'}
              </Typography>
            </Stack>
          </Link>
          <MobileMenuModal items={menuItems} />
          <DesktopMenuNavigation items={menuItems} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
