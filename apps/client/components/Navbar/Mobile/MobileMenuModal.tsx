import React, { useEffect, useRef } from 'react'
import { Box, useTheme } from '@mui/material'
import { motion, useCycle } from 'framer-motion'
import { Stack } from '@mui/system'
import { MenuItem } from '../Navbar.interface'
import { MenuToggle } from '~/components/Navbar/Mobile/MenuToggler'
import { MobileNavigationItems } from '~/components/Navbar/Mobile/MobileNavigationItems'
import { useLocation } from 'react-use'
import { useScreen } from '~/src/utility/use-screen'

interface MobileMenuModalProps {
    items: MenuItem[]
    onModalToggle: () => void
}

export const MobileMenuModal: React.FC<MobileMenuModalProps> = (props) => {
  const theme = useTheme()

  const sidebar = {
    open: {
      clipPath: 'circle(1500px at calc(100% - 35px) 28px)',
      transition: {
        type: 'spring',
        stiffness: 70,
        restDelta: 0.5
      }
    },
    closed: {
      clipPath: 'circle(22px at calc(100% - 35px) 28px)',
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 500,
        damping: 40
      }
    }
  }

  const { pathname } = useLocation()
  useEffect(() => {
    if (isOpen) {
      toggleOpen()
    }
  }, [pathname])

  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        ref={containerRef}
      >
        <Stack
          component={motion.div}
          sx={{
            position: 'absolute',
            height: '100vh',
            width: '100vw',
            inset: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.palette.grey['300'],
            touchAction: isOpen ? 'none' : 'initial'
          }}
          variants={sidebar}
        >
          <MobileNavigationItems onRedirectButtonClick={toggleOpen} onLogout={toggleOpen} items={props.items} />
        </Stack>
        <Box pr={1.4}>
          <MenuToggle toggled={isOpen} toggle={() => {
            toggleOpen()
            props.onModalToggle()
          }} />
        </Box>
      </motion.nav>
    </Box>
  )

}
