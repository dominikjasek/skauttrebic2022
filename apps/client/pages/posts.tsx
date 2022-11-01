import React from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { usePostsRepository } from '~/src/api/posts/PostsRepository'
import { Loading } from '~/components/Loading/Loading'

export const posts: React.FC = () => {
  const postsRepository = usePostsRepository()
  const { data, isLoading } = useQuery('posts', postsRepository.getPosts)

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      {data && <pre>{JSON.stringify(data,null, 2)}</pre>}
    </>
  )
}

export const getServerSideProps = async () => {
  const postsRepository = usePostsRepository()
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('posts', postsRepository.getPosts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}

export default posts
