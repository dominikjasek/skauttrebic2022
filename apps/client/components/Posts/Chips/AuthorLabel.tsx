import React from 'react'
import { Chip, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

interface AuthorProps {
    fullname?: string
    firstname?: string
    lastname?: string
    size?: 'small' | 'medium'
}

export const AuthorLabel: React.FC<AuthorProps> = ({ firstname, lastname, fullname, size = 'small' }) => {
  const fullName = fullname ? fullname : `${firstname} ${lastname}`

  return (
    <Chip size={size} icon={<AccountCircleIcon />} label={<Typography>{fullName}</Typography>} />
  )
}
