import React from 'react'
import { Post } from '~/src/api/posts/PostsRepository'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { TroopChip } from '~/components/Posts/Chips/TroopChip'
import { AuthorChip } from '~/components/Posts/Chips/AuthorChip'
import { DateChip } from '~/components/Posts/Chips/DateChip'

interface PostBoxProps {
    post: Post
}

export const PostBox: React.FC<PostBoxProps> = ({ post }) => {
  const data = post.attributes

  return (
    <Card>
      <CardContent>
        <Typography variant="h3">
          {data.title}
        </Typography>
        <Box>
          <AuthorChip author={data.createdBy.data} />
          <DateChip date={data.createdAt} />
          {data.troops.data.map(troop => (
            <TroopChip key={troop.id} troop={troop} />
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}