import React, { useEffect, useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { usePostsRepository } from '~/src/api/posts/PostsRepository'
import { Loading } from '~/components/Loading/Loading'
import { Box, Container, Pagination } from '@mui/material'
import { PostBox } from '~/components/Posts/PostBox'
import { NextPage } from 'next'
import { useTroopsRepository } from '~/src/api/troops/TroopsReposiotry'
import { useRouter } from 'next/router'

const POSTS_PER_PAGE = 8

export const Posts: NextPage = () => {
  const postsRepository = usePostsRepository()
  const troopsRepository = useTroopsRepository()
  const router = useRouter()
  const { query } = router
  const troopId = query.troopId ? Number(query.troopId) : undefined
  const pageFromQuery = query.page ? Number(query.page) : null

  const [page, setPage] = useState<number | null>(null)
  useEffect(() => {
    setPage(pageFromQuery)
  }, [pageFromQuery])

  const { data: postsData, isLoading: isPostsLoading, isFetched } = useQuery(['posts', page], () => postsRepository.getPosts({ troopId, pagination: { page: page as number, pageSize: POSTS_PER_PAGE } }), { enabled: router.isReady && page !== null })
  const { data: troopsDaata, isLoading: isTroopsLoading } = useQuery('troops', troopsRepository.getTroops)
  const posts = useMemo(() => postsData?.data, [postsData])

  if (!router.isReady || page === null || isPostsLoading || isTroopsLoading) {
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
      <Pagination page={page} onChange={(_e, newPage) => setPage(newPage)} count={10} color="primary" />
    </Container>
  )
}

// export const getStaticProps = async () => {
//   const postsRepository = usePostsRepository()
//   const troopsRepository = useTroopsRepository()
//
//   const queryClient = new QueryClient()
//
//   await Promise.all([queryClient.prefetchQuery('posts', postsRepository.getPosts), queryClient.prefetchQuery('troops', troopsRepository.getTroops) ])
//
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//     revalidate: 30,
//   }
// }

export default Posts
