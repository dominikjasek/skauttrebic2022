import React from 'react'
import { StrapiUser } from '~/src/api/posts/PostsRepository'
import { Chip } from '@mui/material'

interface AuthorChipProps {
    author: StrapiUser
}

export const AuthorChip: React.FC<AuthorChipProps> = ({ author }) => {
  return (
    <Chip
      label={`${author.attributes.firstname} ${author.attributes.lastname}` + (author.attributes.username ? ` (${author.attributes.username})` : '')}
    />
  )
}
