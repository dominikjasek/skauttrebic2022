import React from 'react'
import { StrapiUser } from '~/src/api/posts/PostsRepository'
import { Chip, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

interface AuthorProps {
    author: StrapiUser
    size?: 'small' | 'medium'
}

export const AuthorLabel: React.FC<AuthorProps> = ({ author, size = 'small' }) => {
  return (
    <Chip size={size} icon={<AccountCircleIcon />} label={<Typography>{`${author.attributes.firstname} ${author.attributes.lastname}` + (author.attributes.username ? ` (${author.attributes.username})` : '')}</Typography>} />
  )
}
