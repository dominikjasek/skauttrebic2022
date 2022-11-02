import React, { useMemo } from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { usePostsRepository } from '~/src/api/posts/PostsRepository'
import { Loading } from '~/components/Loading/Loading'
import { Box } from '@mui/material'
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
    <Box>
      {posts.map(post => (
        <PostBox key={post.id} post={post} />
      ))}
    </Box>
  )
}

export const getServerSideProps = async () => {
  const postsRepository = usePostsRepository()
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('posts', postsRepository.getPosts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Posts
