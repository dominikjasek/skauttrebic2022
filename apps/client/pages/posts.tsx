import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { usePostsRepository } from '~/src/api/posts/PostsRepository'
import { Loading } from '~/components/Loading/Loading'
import { Box } from '@mui/material'
import { PostBox } from '~/components/Posts/PostBox'

export const posts: React.FC = () => {
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

export default posts
