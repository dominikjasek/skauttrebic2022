import React, { useMemo } from 'react'
import { GetCommentsQuery } from '~/src/api/gql/graphql'
import { Box, Card, CardHeader, Divider, Grid, IconButton, Typography } from '@mui/material'
import { DateLabel } from '~/components/Posts/Chips/DateLabel'
import { PersonAvatar } from '~/components/Avatar/PersonAvatar'
import DeleteIcon from '@mui/icons-material/Delete'
import ConfirmDialog, { confirmDialog } from '~/components/Dialog/ConfirmDialog'
import { useUser } from '~/src/api/auth/context/AuthContext'

interface CommentsProps {
    comments: GetCommentsQuery['findAllFlat']
    onDeleteClick: (commentId: number) => void
}

export const Comments: React.FC<CommentsProps> = ({ comments, onDeleteClick }) => {
  const user = useUser()

  const nonBlockedComments = useMemo(() => comments?.data?.filter(comment => comment?.blocked === false), [comments])

  if (nonBlockedComments?.length === 0) {
    return <></>
  }

  return (
    <Box mb={2}>
      <Divider sx={{ mt: 2, mb: 6 }}></Divider>
      <Typography sx={{ mb: 1 }} variant={'h4'} fontSize={'1.8rem'}>Komentáře</Typography>
      {
        comments?.data?.filter(comment => comment?.blocked === false).map((comment) => {
          if (comment) {
            return (
              <Card key={comment.id} sx={{ px: 2, my: 2, py: 2 }}>
                <CardHeader
                  avatar={
                    <PersonAvatar fullName={comment.author?.name ?? 'Anonym'} />
                  }
                  action={
                    comment.author?.id === user?.id ?
                      <IconButton onClick={() => {
                        confirmDialog('Opravdu chcete smazat tento kometář?', () => {
                          onDeleteClick(comment.id)
                        })
                      }
                      } aria-label="settings">
                        <DeleteIcon />
                      </IconButton>
                      : null
                  }
                  title={comment.author?.name}
                  subheader={
                    <DateLabel date={comment.createdAt!} />
                  }
                />
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid justifyContent="left" item xs zeroMinWidth>
                    <Typography mx={3}>
                      {comment.content}
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            )
          }
        })
      }
      <ConfirmDialog />
    </Box>
  )
}
