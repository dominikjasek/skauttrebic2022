import React, { useRef, useState } from 'react'
import { MenuItem as MenuItemType } from '~/components/Navbar/Navbar.interface'
import { Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

interface DesktopMenuItemProps {
  item: MenuItemType
  isSubmenu?: boolean
}

export const DesktopMenuItem: React.FC<DesktopMenuItemProps> = ({ item, isSubmenu = false }) => {
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const open = Boolean(anchorEl)

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    // Delay closing slightly so the user has time to move the mouse into the menu
    timeoutRef.current = setTimeout(() => {
      setAnchorEl(null)
    }, 150)
  }

  const handleMenuEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  if (item.items) {
    return (
      <Box
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        sx={{
          display: isSubmenu ? 'block' : 'inline-block'
        }}
      >
        <Box
          sx={{
            my: 2,
            px: theme.spacing(1.5),
            color: theme.palette.grey['900'],
            minWidth: isSubmenu ? '160px' : 'auto',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography>{item.label.toUpperCase()}</Typography>
          {isSubmenu && <ChevronRightIcon fontSize={'small'} />}
        </Box>
        <Menu
          sx={{
            mt: theme.spacing(1),
            pointerEvents: 'none'
          }}
          keepMounted
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            onMouseEnter: handleMenuEnter,
            onMouseLeave: handleClose,
            sx: {
              pointerEvents: 'auto',
              // Optional: adds a tiny bit of overlap to prevent flickering
              marginTop: isSubmenu ? 0 : '-2px',
              marginLeft: isSubmenu ? '-4px' : 0,
            }
          }}
          anchorOrigin={{
            vertical: isSubmenu ? 'top' : 'bottom',
            horizontal: isSubmenu ? 'right' : 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          autoFocus={false}
        >
          {item.items.map((subItem, i) => (
            <MenuItem key={i} onClick={handleClose} sx={{ p: 0 }}>
              <DesktopMenuItem item={subItem} isSubmenu={true} />
            </MenuItem>
          ))}
        </Menu>
      </Box>
    )
  }

  return (
    <Link
      href={item.link ?? ''}
      key={item.label}
    >
      <Box>
        <Typography
          sx={{
            my: 2,
            px: theme.spacing(1.5),
            color: theme.palette.grey['900'],
            display: 'block',
            minWidth: isSubmenu ? '160px' : 'auto',
            cursor: 'pointer'
          }}
        >
          {item.label.toUpperCase()}
        </Typography>
      </Box>
    </Link>
  )
}