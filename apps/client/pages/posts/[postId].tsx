import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Container } from '@mui/material'
import { useQuery } from 'react-query'
import { useQueryParam } from '~/src/utility/use-query-param'
import { usePostsRepository } from '~/src/api/posts/PostsRepository'
import { Loading } from '~/components/Loading/Loading'

export const PostIdPage: NextPage = () => {
  const router = useRouter()
  const postsRepository = usePostsRepository()

  // const { postId } = router.query
  const postId = useQueryParam('postId') as string | null
  const { data: post, isLoading, isFetched } = useQuery(['post', postId], () => postsRepository.getPost(Number(postId)), { enabled: router.isReady })

  if (!isFetched || isLoading) return <Loading />

  if (!post) {
    throw new Error('Post was not fetched successfully')
  }
  return (
    <Container maxWidth={'lg'} sx={{ pt: '30px' }}>
      {post.data.attributes.title}
    </Container>
  )
}

export default PostIdPage
