import React, { useEffect, useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { usePostsRepository } from '~/src/api/posts/PostsRepository'
import { Loading } from '~/components/Loading/Loading'
import { Box, Container, Pagination, Stack, useTheme } from '@mui/material'
import { PostBox } from '~/components/Posts/PostBox'
import { NextPage } from 'next'
import { useTroopsRepository } from '~/src/api/troops/TroopsReposiotry'
import { useRouter } from 'next/router'
import { PostsFilter } from '~/components/Posts/PostsFilter'

const POSTS_PER_PAGE = 8

export const Posts: NextPage = () => {
  const theme = useTheme()
  const postsRepository = usePostsRepository()
  const troopsRepository = useTroopsRepository()
  const router = useRouter()
  const { query } = router
  const troopId = query.troopId ? Number(query.troopId) : undefined
  const pageFromQuery = query.page ? Number(query.page) : 1

  const [page, setPage] = useState(pageFromQuery)
  useEffect(() => {
    setPage(pageFromQuery)
  }, [pageFromQuery])

  const [selectedTroopIds, setSelectedTroopIds] = useState<number[]>([])

  const { data: postsData, isLoading: isPostsLoading } = useQuery(['posts', { selectedTroopIds, page }], () => postsRepository.getPosts({ troopIds: selectedTroopIds, pagination: { page: page, pageSize: POSTS_PER_PAGE } }), { enabled: router.isReady })
  const { data: troopsData, isLoading: isTroopsLoading } = useQuery('troops', troopsRepository.getTroops)
  const posts = useMemo(() => postsData?.data, [postsData])
  const troops = useMemo(() => troopsData?.troops?.data, [postsData])

  if (!router.isReady || isPostsLoading || isTroopsLoading) {
    return <Loading />
  }

  if (!posts) {
    throw new Error('Posts were not loaded successfully')
  }
  if (!troops) {
    throw new Error('Troops were not loaded successfully')
  }

  return (
    <Container sx={{ pt: '30px' }}>
      <Stack direction={'row'}>
        <Box flex={1}>
          <PostsFilter troops={troops} selectedTroopIds={selectedTroopIds} onTroopsChanged={(newTroopIds: number[]) => setSelectedTroopIds(newTroopIds)} />
        </Box>
        <Box flex={3}>
          {posts.map(post => (
            <PostBox key={post.id} post={post} />
          ))}
          <Pagination page={page} onChange={(_e, newPage) => setPage(newPage)} count={10} color="primary" />
        </Box>
      </Stack>
    </Container>
  )
}

export default Posts
