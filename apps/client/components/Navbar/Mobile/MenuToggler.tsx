import * as React from 'react'
import Hamburger from 'hamburger-react'
import { useTheme } from '@mui/material'

interface MenuToggleProps {
    toggle: () => void
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => {
  const theme = useTheme()

  return (
    <Hamburger  size={25} color={theme.palette.grey['900']} onToggle={toggle} />
  )

}

