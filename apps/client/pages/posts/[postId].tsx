import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useQueryParam } from '~/src/utility/use-query-param'
import { usePostsRepository } from '~/src/api/posts/PostsRepository'
import { Loading } from '~/components/Loading/Loading'
import { AuthorLabel } from '~/components/Posts/Chips/AuthorLabel'
import { DateLabel } from '~/components/Posts/Chips/DateLabel'
import { Comments } from '~/components/Posts/Comments/Comments'
import { Attachments } from '~/components/Posts/Attachments'
import { NewComment } from '~/components/Posts/Comments/NewComment'
import { Html } from '~/components/Html/Html'
import { useUser } from '~/src/api/auth/context/AuthContext'
import Routes from '~/config/routes'
import { TroopChip } from '~/components/Posts/Chips/TroopChip'

export const PostIdPage: NextPage = () => {
  const router = useRouter()
  const user = useUser()
  const { getPost, getComments, createComment, deleteComment } = usePostsRepository()
  const queryClient = useQueryClient()

  const postId = useQueryParam('postId') as string | null

  const invalidateData = async () => {
    await Promise.all([
      queryClient.invalidateQueries(['post', postId]),
      queryClient.invalidateQueries(['comments', postId])
    ])
  }

  const { data: post, isLoading, isFetched } = useQuery(['post', postId], async () => {
    const postData = await getPost(Number(postId))
    const isPostPrivate = postData.data.attributes.title === null
    if (isPostPrivate){
      if (user === null) await router.replace(Routes.login + `?redirect=${router.asPath}`)
      else await router.replace(Routes.error403)
    }

    return postData
  }, { enabled: router.isReady })
  const { data: comments, isLoading: isCommentsLoading } = useQuery(['comments', postId], () => getComments(Number(postId)), { enabled: router.isReady })
  const { mutateAsync: submitCreateComment, isLoading: isCommentSubmitLoading } = useMutation(['create-comment', postId], async (content: string) => {
    await createComment(Number(postId), content)
    await invalidateData()
  })
  const { mutateAsync: submitDeleteComment } = useMutation(['create-comment', postId], async (commentId: number) => {
    await deleteComment(Number(postId), commentId)
    await invalidateData()
  })

  if (!isFetched || isLoading || isCommentsLoading) return <Loading />

  if (!post) {
    throw new Error('Post was not fetched successfully')
  }

  return (
    <Container maxWidth={'lg'} sx={{ pt: '30px' }}>
      <Typography variant={'h3'} fontSize={{ xs: '2rem', md: '2.7rem' }}>{post.data.attributes.title}</Typography>
      <Stack mt={1} spacing={0.5} direction={'row'}>
        <AuthorLabel {...post.data.attributes.createdBy.data.attributes}></AuthorLabel>
        <DateLabel date={post.data.attributes.publishedAt}></DateLabel>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-start'} flex={2} flexWrap={'wrap'}>
        {post.data.attributes.troops.data?.map(troop => (
          <Box key={troop.id} pr={0.5} pt={1} display={'inline'}>
            <TroopChip troop={troop} />
          </Box>
        ))}
      </Stack>
      <Divider sx={{ my: 2 }}></Divider>
      <Html html={ post.data.attributes.content } />
      {
        post.data.attributes.files?.data?.length &&
          <Attachments files={post.data.attributes.files.data} />
      }
      {
        comments &&
          <Comments onDeleteClick={submitDeleteComment} comments={comments.findAllFlat} />
      }
      <NewComment isCommentSubmitLoading={isCommentSubmitLoading} onSubmit={submitCreateComment} />
    </Container>
  )
}

export default PostIdPage
