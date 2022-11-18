import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { SkautLogo } from '../Logo/SkautLogo'
import { Box, Stack, useTheme } from '@mui/material'
import { MobileMenuNavigation } from './Mobile/MobileMenuNavigation'
import { MenuItem as MenuItemType } from './Navbar.interface'
import Link from 'next/link'
import { DesktopMenuNavigation } from '~/components/Navbar/Desktop/DesktopMenuNavigation'
import Routes from '~/config/routes'
import { navbarHeightPx } from '~/components/Navbar/NavbarHeight'
import { useMemo } from 'react'
import { useUser } from '~/src/api/auth/context/AuthContext'
import { useCycle } from 'framer-motion'
import { useContactsRepository } from '~/src/api/contacts/ContactsRepository'
import { useQuery } from 'react-query'

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
    label: 'Kontakty',
    link: Routes.contacts
  }
]

export const Navbar: React.FC = () => {
  const theme = useTheme()
  const user = useUser()
  const contactsRepository = useContactsRepository()

  const { data: troopContactData } = useQuery('troop-contacts-names', () => contactsRepository.fetchTroopContactNames())
  // useEffect(() => {
  //   if (troopContactData?.troopContact?.data?.attributes?.troop) {
  //     console.log('troopContactData?.troopContact?.data?.attributes?.troop', troopContactData?.troopContact?.data?.attributes?.troop)
  //
  //   }
  // }, [troopContactData])

  const [isLogoColorful, toggleLogoColorful] = useCycle(false, true)

  const menuItems = useMemo(() => {
    const itemsCpy = [...ITEMS]

    if (troopContactData?.troopContact?.data?.attributes?.troop) {
      const contactsItem = itemsCpy.find(item => item.link === Routes.contacts)
      if (contactsItem) {
        contactsItem.children = troopContactData.troopContact.data.attributes.troop.filter(Boolean).map(troop => ({
          label: troop!.name,
          link: Routes.contacts + `/${troop!.id}`
        }))
      }
    }

    if (user === null) {
      itemsCpy.push({ label: 'Přihlásit se', link: Routes.login })
    }
    return itemsCpy
  }, [user, troopContactData])

  return (
    <AppBar position="fixed" sx={{ backgroundColor: theme.palette.secondary.main, height: navbarHeightPx }}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar disableGutters sx={{ height: '100%', maxHeight: '100%' }}>
          <Link href={Routes.home}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
              <Box sx={{ color: theme.palette.grey['900'], p: 0, pl: 2, zIndex: 1000, display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
                <SkautLogo black={!isLogoColorful} size={0.5} />
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
                  display: { xs: 'flex', md: 'none' },
                  textDecoration: 'none',
                  lineHeight: 1.4,
                  cursor: 'pointer'
                }}
              >
                Skaut Třebíč
              </Typography>
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
                  lineHeight: 1.4,
                  cursor: 'pointer'
                }}
              >
                2. Skautské oddíly Třebíč
              </Typography>
            </Stack>
          </Link>
          <DesktopMenuNavigation items={menuItems} />
          <MobileMenuNavigation onModalToggle={toggleLogoColorful} items={menuItems} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
