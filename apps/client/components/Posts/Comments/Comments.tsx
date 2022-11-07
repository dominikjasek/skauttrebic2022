import React from 'react'
import { GetCommentsQuery } from '~/src/api/gql/graphql'
import { Avatar, Box, Card, Grid, Paper, Stack, Typography } from '@mui/material'
import { AuthorLabel } from '~/components/Posts/Chips/AuthorLabel'
import { DateLabel } from '~/components/Posts/Chips/DateLabel'
import { PersonAvatar } from '~/components/Avatar/PersonAvatar'

interface CommentsProps {
    comments: GetCommentsQuery['findAllFlat']
}

export const Comments: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <Box mb={2}>
      <Typography sx={{ mb: 1 }} variant={'h4'} fontSize={'1.8rem'}>Komentáře</Typography>
      {
        comments?.data?.filter(comment => comment?.blocked === false).map((comment) => {
          if (comment) {
            return (
              <Card key={comment.id} sx={{ px: 2, my: 2, py: 2 }}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <PersonAvatar fullName={comment.author!.name} />
                  </Grid>
                  <Grid justifyContent="left" item xs zeroMinWidth>
                    <h4 style={{ margin: 0, textAlign: 'left' }}>{comment.author?.name}</h4>
                    <span style={{ textAlign: 'left', color: 'gray' }}>
                      <DateLabel date={comment.createdAt!} />
                    </span>
                    <p style={{ textAlign: 'left', marginBottom: 0 }}>
                      {comment.content}
                    </p>
                  </Grid>
                </Grid>
              </Card>
            )
          }
        })
      }
    </Box>
  )
}
