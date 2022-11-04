import React from 'react'
import { StrapiUser } from '~/src/api/posts/PostsRepository'
import { Chip, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

interface AuthorProps {
    author: StrapiUser
}

export const AuthorLabel: React.FC<AuthorProps> = ({ author }) => {
  return (
    <Chip size={'small'} icon={<AccountCircleIcon />} label={<Typography>{`${author.attributes.firstname} ${author.attributes.lastname}` + (author.attributes.username ? ` (${author.attributes.username})` : '')}</Typography>} />
  )
}
