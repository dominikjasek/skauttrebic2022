import React, { useState, useMemo } from 'react'
import { MenuItem } from '~/components/Navbar/Navbar.interface'
import { styled, Box, Button } from '@mui/material'
import { Typography } from '@mui/material'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { UserProfileMenu } from '~/components/Navbar/UserProfileMenu'
import { useUser } from '~/src/api/auth/context/AuthContext'

interface MobileNavigationItemsProps {
  items: MenuItem[]
  onLogout: () => void
  onRedirectButtonClick: () => void
}

// Animation for the sliding transition between levels
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0
  })
}

const MenuLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey['900'],
  fontFamily: 'skautbold',
  padding: '20px 0px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  cursor: 'pointer',
  textAlign: 'center'
}))

export const MobileNavigationItems: React.FC<MobileNavigationItemsProps> = ({ items, onRedirectButtonClick, onLogout }) => {
  const user = useUser()
  // The stack stores the 'items' array of the current level.
  // Initial state is the root items.
  const [stack, setStack] = useState<MenuItem[][]>([items])
  const [direction, setDirection] = useState(1)

  const currentLevelItems = useMemo(() => stack[stack.length - 1], [stack])
  const isSubLevel = stack.length > 1

  const handleForward = (subItems: MenuItem[]) => {
    setDirection(1)
    setStack((prev) => [...prev, subItems])
  }

  const handleBack = () => {
    setDirection(-1)
    setStack((prev) => prev.slice(0, -1))
  }

  return (
    <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={stack.length} // Key change triggers animation
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {/* Back Button */}
          {isSubLevel && (
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={handleBack}
              sx={{ color: 'grey.700', mb: 2, textTransform: 'none', fontFamily: 'skautbold', mx: 3 }}
            >
              Back
            </Button>
          )}
          { currentLevelItems.map((item) => (
            <div key={item.label}>
              {item.items ? (
                // If it has children, click to go deeper
                <MenuLink onClick={() => handleForward(item.items!)}>
                  {item.label}
                  <ChevronRightIcon
                    fontSize="small"
                    sx={{ position: 'absolute', right: '20%' }} // Keeps text centered
                  />                </MenuLink>
              ) : (
                // If it's a leaf node, it's a link
                <Link
                  href={item.link ?? ''}
                  passHref // Required to pass the href to the child
                >
                  <a
                    target={item.newTab ? '_blank' : undefined}
                    rel={item.newTab ? 'noopener noreferrer' : undefined}
                    style={{ textDecoration: 'none' }} // Remove default underline
                    onClick={onRedirectButtonClick}
                  >
                    <MenuLink>{item.label}</MenuLink>
                  </a>
                </Link>
              )}
            </div>
          ))}
          { !isSubLevel && user && (
            <MenuLink>
              <UserProfileMenu onLogout={onLogout} />
            </MenuLink>
          )}
        </motion.div>
      </AnimatePresence>
    </Box>
  )
}