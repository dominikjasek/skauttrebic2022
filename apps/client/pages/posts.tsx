import React, { useMemo } from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { usePostsRepository } from '~/src/api/posts/PostsRepository'
import { Loading } from '~/components/Loading/Loading'
import { Box, Container } from '@mui/material'
import { PostBox } from '~/components/Posts/PostBox'
import { NextPage } from 'next'

export const Posts: NextPage = () => {
  const postsRepository = usePostsRepository()
  const { data, isLoading } = useQuery('posts', postsRepository.getPosts)
  const posts = useMemo(() => data?.data, [data])

  if (isLoading) {
    return <Loading />
  }

  if (!posts) {
    throw new Error('Posts were not loaded successfully')
  }

  return (
    <Container >

      <Box>
        {posts.map(post => (
          <PostBox key={post.id} post={post} />
        ))}
      </Box>
    </Container>
  )
}

export const getStaticProps = async () => {
  const postsRepository = usePostsRepository()
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('posts', postsRepository.getPosts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 30,
  }
}

export default Posts
