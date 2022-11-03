import React, { useMemo } from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { usePostsRepository } from '~/src/api/posts/PostsRepository'
import { Loading } from '~/components/Loading/Loading'
import { Box, Container } from '@mui/material'
import { PostBox } from '~/components/Posts/PostBox'
import { NextPage } from 'next'
import { useTroopsRepository } from '~/src/api/troops/TroopsReposiotry'

export const Posts: NextPage = () => {
  const postsRepository = usePostsRepository()
  const troopsRepository = useTroopsRepository()

  const { data: postsData, isLoading: isPostsLoading } = useQuery('posts', postsRepository.getPosts)
  const { data: troopsDaata, isLoading: isTroopsLoading } = useQuery('troops', troopsRepository.getTroops)
  const posts = useMemo(() => postsData?.data, [postsData])
  console.log('troopsDaata', troopsDaata)

  if (isPostsLoading || isTroopsLoading) {
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
  const troopsRepository = useTroopsRepository()

  const queryClient = new QueryClient()

  await Promise.all([queryClient.prefetchQuery('posts', postsRepository.getPosts), queryClient.prefetchQuery('troops', troopsRepository.getTroops) ])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 30,
  }
}

export default Posts
