import * as React from 'react'
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
import { useRouter } from 'next/router'
import { usePhotoGalleryRepository } from '~/src/api/navbar/photoGallery/PhotoGalleryRepository'
import { useLeaderMenuRepository } from '~/src/api/navbar/leaderMenu/LeaderMenuRepository'
import { useQuery } from 'react-query'
import { Loading } from '~/components/Loading/Loading'

const ItemsUnauthenticated: MenuItemType[] = [
  {
    label: 'Aktuality',
    link: Routes.posts
  },
  {
    label: 'Kontakty',
    link: Routes.contacts
  }
]

const ItemsAuthenticated: MenuItemType[] = [
  {
    label: 'Aktuality',
    link: Routes.posts
  },
  {
    label: 'Fotogalerie',
    query: 'PhotoGallery'
  },
  {
    label: 'Kontakty',
    link: Routes.contacts
  }
]

const ItemsLeader: MenuItemType[] = [
  {
    label: 'Vedoucí',
    query: 'LeaderMenu'
  }
]

export const Navbar: React.FC = () => {
  const router = useRouter()
  const theme = useTheme()
  const user = useUser()
  const photoGalleryRepository = usePhotoGalleryRepository()
  const leaderMenuRepository = useLeaderMenuRepository()
  const [isLogoColorful, toggleLogoColorful] = useCycle(false, true)

  const { data: photoGalleryData, isLoading: isPhotoGalleryLoading } = useQuery('photo-gallery', photoGalleryRepository.fetchPhotoGallery, {
    enabled: !!user
  })
  const photoGallery = useMemo(() => photoGalleryData?.data?.attributes?.troops, [photoGalleryData])
  const { data: leaderMenuData, isLoading: isLeaderMenuLoading } = useQuery('leader-menu', leaderMenuRepository.fetchLeaderMenu, {
    enabled: !!user && user.role?.type === 'vedouci'
  })
  const leaderMenu = useMemo(() => leaderMenuData?.data?.attributes?.items, [leaderMenuData])

  const menuItems = useMemo(() => {
    if (!user) {
      const itemsCpy = [...ItemsUnauthenticated]
      // router.isReady is true on client but not on server => mismatch of first render doesn't happen
      const redirect = router.isReady && !router.asPath.includes('?redirect=')
        ? `?redirect=${router.asPath}`
        : ''
      itemsCpy.push({ label: 'Přihlásit se', link: Routes.login + redirect })
      return itemsCpy
    }

    const itemsAuthenticatedCpy = ItemsAuthenticated.map((item) => {
      if (item.query === 'PhotoGallery') {
        return { ...item, items: photoGallery }
      }
      return item
    })
    if (user.role?.type !== 'vedouci') return itemsAuthenticatedCpy

    const itemsLeaderCpy = ItemsLeader.map((item) => {
      if (item.query === 'LeaderMenu') {
        return { ...item, items: leaderMenu }
      }
      return item
    })
    return [...itemsLeaderCpy, ...itemsAuthenticatedCpy]
  }, [user, photoGallery, leaderMenu, router.isReady])

  if (isPhotoGalleryLoading || isLeaderMenuLoading) {
    return <Loading />
  }

  return (
    <Box sx={{ backgroundColor: theme.palette.secondary.main, height: navbarHeightPx }}>
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
    </Box>
  )
}
