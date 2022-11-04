import React from 'react'
import { Post } from '~/src/api/posts/PostsRepository'
import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import { TroopChip } from '~/components/Posts/Chips/TroopChip'
import { AuthorLabel } from '~/components/Posts/Chips/AuthorLabel'
import { DateLabel } from '~/components/Posts/Chips/DateLabel'
import { motion } from 'framer-motion'

interface PostBoxProps {
    post: Post
}

export const PostBox: React.FC<PostBoxProps> = ({ post }) => {
  const data = post.attributes

  return (
    <Card
      component={motion.div}
      whileHover={{ scale: 1.005 }}
      whileTap={{ scale: 0.99 }}
      sx={{
        boxShadow: 2,
        '&:hover': {
          boxShadow: 5,
          cursor: 'pointer'
        }
      }}
    >
      <CardContent>
        <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' } }} alignItems={'center'} justifyContent={'space-between'} spacing={1}>
          <Stack alignItems={'flex-start'} justifyContent={'center'} flex={3}>
            <Typography sx={{ mb: 1 }} variant="h3" >
              {data.title}
            </Typography>
            <Stack direction={'row'} spacing={0.5}>
              <AuthorLabel author={data.createdBy.data} />
              <DateLabel date={data.createdAt} />
            </Stack>
          </Stack>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} flex={2} flexWrap={'wrap'}>
            {data.troops.data.map(troop => (
              <Box key={troop.id} pr={0.5} pt={0.5} display={'inline'}>
                <TroopChip troop={troop} />
              </Box>
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}
