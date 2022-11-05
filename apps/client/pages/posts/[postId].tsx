import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { useQueryParam } from '~/src/utility/use-query-param'
import { usePostsRepository } from '~/src/api/posts/PostsRepository'
import { Loading } from '~/components/Loading/Loading'
import { AuthorLabel } from '~/components/Posts/Chips/AuthorLabel'
import { DateLabel } from '~/components/Posts/Chips/DateLabel'
import { DownloadButton } from '~/components/Button/DownloadButton/DownloadButton'

export const PostIdPage: NextPage = () => {
  const router = useRouter()
  const postsRepository = usePostsRepository()

  const postId = useQueryParam('postId') as string | null
  const { data: post, isLoading, isFetched } = useQuery(['post', postId], () => postsRepository.getPost(Number(postId)), { enabled: router.isReady })

  if (!isFetched || isLoading) return <Loading />

  if (!post) {
    throw new Error('Post was not fetched successfully')
  }
  return (
    <Container maxWidth={'lg'} sx={{ pt: '30px' }}>
      <Typography variant={'h3'} fontSize={'2.7rem'}>{post.data.attributes.title}</Typography>
      <Stack mt={1} spacing={0.5} direction={'row'}>
        <AuthorLabel author={post.data.attributes.createdBy.data}></AuthorLabel>
        <DateLabel date={post.data.attributes.createdAt}></DateLabel>
      </Stack>
      <Divider sx={{ my: 1 }}></Divider>
      <Typography dangerouslySetInnerHTML={{ __html: post.data.attributes.content }}></Typography>
      <Divider sx={{ my: 1 }}></Divider>
      { post.data.attributes.files.data?.length &&
        <Box>
          <Typography sx={{ mb: 1 }} variant={'h4'} fontSize={'1.8rem'}>Soubory ke stažení</Typography>
          {
            post.data.attributes.files.data.map((file, i) => {
              if (file.attributes?.url) {
                return (
                  <Stack key={i} direction={'row'} justifyContent={'flexstart'} alignItems='center' spacing={1}>
                    <Typography>{file.attributes?.caption}</Typography>
                    <DownloadButton url={file.attributes?.url} name={file.attributes?.caption ?? 'soubor'} />
                  </Stack>
                )
              }
            })
          }
        </Box>
      }
    </Container>
  )
}

export default PostIdPage
