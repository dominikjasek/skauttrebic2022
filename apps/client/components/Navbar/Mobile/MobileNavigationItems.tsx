import React from 'react'
import { MenuItem } from '~/components/Navbar/Navbar.interface'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { UserProfileMenu } from '~/components/Navbar/UserProfileMenu'

interface MobileNavigationItemsProps {
    items: MenuItem[]
}

const staggerVariants = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0.1 }
  },
  closed: {
    transition: { staggerChildren: 0, staggerDirection: -1 }
  }
}

const AnimationRoot = (props: React.PropsWithChildren) => (
  <motion.ul
    variants={staggerVariants}
  >
    {props.children}
  </motion.ul>
)

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: 600 }
    }
  }
}

const AnimationUl = (props: React.PropsWithChildren) => (
  <motion.ul
    variants={variants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {props.children}
  </motion.ul>
)

const MenuLink = styled(Typography)(({ theme })=>({
  color: theme.palette.grey['900'],
  fontFamily: 'skautbold',
  padding: '25px 0px',
  '&:hover': {
    cursor: 'pointer'
  },
  textAlign: 'center'
}))

export const MobileNavigationItems: React.FC<MobileNavigationItemsProps> = ({ items }) => {
  return (
    <AnimationRoot>
      {items.map(item => (
        <div key={item.label}>
          <AnimationUl
          >
            <Link  href={'todo'} key={item.label}>
              <MenuLink>
                {item.label}
              </MenuLink>
            </Link>
          </AnimationUl>
        </div>)
      )}
      <AnimationUl>
        <MenuLink>
          <UserProfileMenu />
        </MenuLink>
      </AnimationUl>
    </AnimationRoot>

  )
}