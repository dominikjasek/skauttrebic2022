import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Container, Divider, Stack, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { useQueryParam } from '~/src/utility/use-query-param'
import { usePostsRepository } from '~/src/api/posts/PostsRepository'
import { Loading } from '~/components/Loading/Loading'
import { AuthorLabel } from '~/components/Posts/Chips/AuthorLabel'
import { DateLabel } from '~/components/Posts/Chips/DateLabel'
import { Comments } from '~/components/Posts/Comments/Comments'
import { Attachments } from '~/components/Posts/Attachments'

export const PostIdPage: NextPage = () => {
  const router = useRouter()
  const postsRepository = usePostsRepository()

  const postId = useQueryParam('postId') as string | null
  const { data: post, isLoading, isFetched } = useQuery(['post', postId], () => postsRepository.getPost(Number(postId)), { enabled: router.isReady })
  const { data: comments, isLoading: isCommentsLoading } = useQuery(['comments', postId], () => postsRepository.getCommentsForPost(Number(postId)), { enabled: router.isReady })

  if (!isFetched || isLoading || isCommentsLoading) return <Loading />

  if (!post) {
    throw new Error('Post was not fetched successfully')
  }

  return (
    <Container maxWidth={'lg'} sx={{ pt: '30px' }}>
      <Typography variant={'h3'} fontSize={'2.7rem'}>{post.data.attributes.title}</Typography>
      <Stack mt={1} spacing={0.5} direction={'row'}>
        <AuthorLabel {...post.data.attributes.createdBy.data.attributes}></AuthorLabel>
        <DateLabel date={post.data.attributes.createdAt}></DateLabel>
      </Stack>
      <Divider sx={{ my: 2 }}></Divider>
      <Typography dangerouslySetInnerHTML={{ __html: post.data.attributes.content }}></Typography>
      <Divider sx={{ my: 2 }}></Divider>
      { post.data.attributes.files?.data?.length &&
        <Attachments files={post.data.attributes.files.data} />
      }
      <Divider sx={{ my: 2 }}></Divider>
      {
        comments &&
        <Comments comments={comments.findAllFlat} />
      }
    </Container>
  )
}

export default PostIdPage
