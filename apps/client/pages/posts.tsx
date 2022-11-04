import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { usePostsRepository } from '~/src/api/posts/PostsRepository'
import { Loading } from '~/components/Loading/Loading'
import { Box, Container, Pagination, Stack } from '@mui/material'
import { PostBox } from '~/components/Posts/PostBox'
import { NextPage } from 'next'
import { useTroopsRepository } from '~/src/api/troops/TroopsReposiotry'
import { useRouter } from 'next/router'
import { PostsFilter } from '~/components/Posts/PostsFilter'
import { useQueryParam } from '~/src/utility/use-query-param'

const POSTS_PER_PAGE = 6

export const Posts: NextPage = () => {
  const router = useRouter()
  const postsRepository = usePostsRepository()
  const troopsRepository = useTroopsRepository()

  const troopsFromQuery = useQueryParam('troops') as string | null
  const selectedTroopIds = troopsFromQuery ? troopsFromQuery.split(',').map(Number) : []

  const pageFromQuery = useQueryParam('page')
  const page = pageFromQuery ? Number(pageFromQuery) : 1

  const setQueryParameters = useCallback(({ newTroopIds = selectedTroopIds, newPage = page }: { newTroopIds?: number[], newPage?: number }) => {
    let queryString = ''
    if (newTroopIds.length) {
      queryString += `troops=${newTroopIds.join()}`
    }
    if (newPage > 1) {
      queryString += `&page=${newPage}`
    }
    router.push(`${location.pathname}?${queryString}`)
  }, [selectedTroopIds, page])

  const { data: postsData } = useQuery(['posts', { selectedTroopIds, page }], () => postsRepository.getPosts({
    troopIds: selectedTroopIds,
    pagination: {
      page,
      pageSize: POSTS_PER_PAGE
    }
  })
  )
  const { data: troopsData, isLoading: isTroopsLoading } = useQuery('troops', troopsRepository.getTroops)
  const posts = useMemo(() => postsData?.data, [postsData])
  const troops = useMemo(() => troopsData?.troops?.data, [troopsData])

  if (isTroopsLoading) {
    return <Loading />
  }
  if (!troops) {
    throw new Error('Troops were not loaded successfully')
  }

  return (
    <Container sx={{ pt: '30px' }}>
      <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }} >
        <Box flex={1}>
          <PostsFilter troops={troops} selectedTroopIds={selectedTroopIds} onTroopsChanged={(newTroopIds: number[]) => setQueryParameters({ newTroopIds })} />
        </Box>
        <Box flex={3}>
          {posts && posts.map(post => (
            <Box key={post.id} mb={2}>
              <PostBox post={post} />
            </Box>
          ))}
          <Stack sx={{ mt: 2 }} alignItems={'center'}>
            <Pagination sx={{ mb: 3 }} page={page} onChange={(_e, newPage) => {
              if (newPage === page) return
              setQueryParameters({ newPage })
            }} count={10} color="primary" />
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

export default Posts
