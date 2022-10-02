import React from 'react'
import { Typography, useTheme } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { Stack, styled } from '@mui/system'
import { MenuItem } from './Navbar.interface'
import Link from 'next/link'

interface MobileMenuModalProps {
    isOpen: boolean
    items: MenuItem[]
}

const MenuLink = styled(Typography)(({ theme })=>({
  color: theme.palette.grey['900'],
  fontFamily: 'skautbold',
  padding: '25px 10px',
  '&:hover': {
    cursor: 'pointer'
  },
}))

export const MobileMenuModal: React.FC<MobileMenuModalProps> = (props) => {
  const theme = useTheme()

  return <AnimatePresence>
    {props.isOpen && (
      <Stack
        component={motion.div}
        initial={{ scale: 1, opacity: 0, backgroundColor: 'transparent' }}
        animate={{ scale: 1, opacity: 1, backgroundColor: theme.palette.grey['300'] }}
        transition={{ ease: 'easeOut', duration: 0.4 }}
        exit={{ opacity: 0 }}
        alignItems={'center'}
        justifyContent={'center'}
        sx={{
          position: 'absolute',
          height: '100vh',
          width: '100vw',
          inset: 0,
        }}>
        {props.items.map(item => (<Link href={'a'} key={item.label} >
          <MenuLink>
            {item.label}
          </MenuLink>
        </Link>))}
      </Stack>
    )}
  </AnimatePresence>

}