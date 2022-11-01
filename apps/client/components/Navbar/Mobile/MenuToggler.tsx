import * as React from 'react'
import Hamburger from 'hamburger-react'
import { useTheme } from '@mui/material'

interface MenuToggleProps {
    toggled: boolean
    toggle: () => void
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, toggled }) => {
  const theme = useTheme()

  return (
    <Hamburger toggled={toggled} size={25} color={theme.palette.grey['900']} onToggle={toggle} />
  )

}

