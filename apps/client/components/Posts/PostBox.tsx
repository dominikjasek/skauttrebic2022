import React, { useMemo } from 'react'
import { Post } from '~/src/api/posts/PostsRepository'
import { Box, BoxProps, Card, CardContent, Stack, Typography, useTheme } from '@mui/material'
import { TroopChip } from '~/components/Posts/Chips/TroopChip'
import { AuthorLabel } from '~/components/Posts/Chips/AuthorLabel'
import { DateLabel } from '~/components/Posts/Chips/DateLabel'
import LockPersonIcon from '@mui/icons-material/LockPerson'
import { motion, MotionProps } from 'framer-motion'
import Link from 'next/link'
import Routes from '~/config/routes'

interface PostBoxProps {
    post: Post
}

const generateRandomString = () => (Math.random() + 1).toString(36).substring(Math.floor(Math.random() * 10))

const generateRandomTitle = () => {
  let wordsCount = Math.floor(Math.random() * 10 - 5)
  wordsCount = wordsCount > 2 ? wordsCount : 2
  let title = ''
  for(let i = 0; i < wordsCount; i++){
    title += generateRandomString() + ' '
  }
  return title
}

export const PostBox: React.FC<PostBoxProps> = ({ post }) => {
  const theme = useTheme()

  const data = post.attributes

  const isRestrictedPost = useMemo(() => data.title === null, [data.title])
  const title = isRestrictedPost ? useMemo(() => generateRandomTitle(), []) : data.title

  const authorizedCardProps: any = {
    whileHover: { scale: 1.005 },
    whileTap: { scale: 0.99 },
    sx: {
      '&:hover': {
        boxShadow: 5
      }
    }
  } as MotionProps & BoxProps

  return (
    <Link href={isRestrictedPost ? Routes.login : `${Routes.posts}/${post.id}`}>
      <Card
        component={motion.div}
        {...(isRestrictedPost ? {} : authorizedCardProps)}
        sx={{
          cursor: 'pointer'
        }}
      >
        <CardContent>
          <Box position={'relative'}>
            <Stack sx={{
              flexDirection: { xs: 'column', sm: 'row' },
              filter: isRestrictedPost ? 'blur(5px)' : 'none'
            }}
            alignItems={'center'}
            justifyContent={'space-between'}
            spacing={1}
            >
              <Stack sx={{ }} alignItems={'flex-start'} justifyContent={'center'} flex={3}>
                <Typography sx={{
                  mb: 1,
                  textShadow: isRestrictedPost ? '0 0 15px black' : 'none',
                  color: isRestrictedPost ? 'transparent' : 'initial'
                }}
                variant="h3"
                >
                  {title}
                </Typography>
                <Stack direction={'row'} spacing={0.5}>
                  <AuthorLabel author={data.createdBy.data} />
                  <DateLabel date={data.createdAt} />
                </Stack>
              </Stack>
              <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} flex={2} flexWrap={'wrap'}>
                {data.troops.data.map(troop => (
                  <Box key={troop.id} pr={0.5} pt={0.5} display={'inline'}>
                    <TroopChip troop={troop} />
                  </Box>
                ))}
              </Stack>
            </Stack>
            {
              isRestrictedPost &&
              <Stack
                sx={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -40%)',
                  color: theme.palette.grey[600]
                }}
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                spacing={1}
                position={'absolute'}
              >
                <LockPersonIcon />
                <Typography color={theme.palette.grey[800]}>Obsah se zobrazí po přihlášení</Typography>
              </Stack>
            }
          </Box>

        </CardContent>
      </Card>
    </Link>

  )
}
