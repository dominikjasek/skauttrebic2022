import React, { useState } from 'react'
import { dehydrate, QueryClient, useMutation, useQuery } from 'react-query'
import { useTotemRepository } from '~/src/api/totem/TotemRepository'
import { Loading } from '~/components/Loading/Loading'
import styles from '~/components/Totem/totem.module.css'
import { Box, Button, Card, CardContent, CardMedia, Stack, TextField, Typography } from '@mui/material'
import { DateLabel } from '~/components/Posts/Chips/DateLabel'

export const TotemPage: React.FC = () => {
  const totemRepository = useTotemRepository()
  const { data: totemData, isLoading } = useQuery('totem',totemRepository.fetchTotemData)
  const { data: comments, isLoading: isCommentsLoading, refetch: refetchTotemComments } = useQuery('totem-comments', totemRepository.getComments)
  const { mutateAsync: insertComment } = useMutation(totemRepository.createComment)

  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  if (isLoading || isCommentsLoading) {
    return <Loading />
  }

  const legends = totemData?.totem?.data?.attributes?.legend ?? null

  if (legends === null) {
    return <div>Něco se pokazilo, zkuste to prosím za chvíli</div>
  }

  return (
    <Box>
      <div className={styles.photoOverlay}>
        <h1>
          Totem Třebíčských pověstí
        </h1>
      </div>
      <Typography variant={'h1'}>
        Pověsti na totemu
      </Typography>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} gap={2} flexWrap={'wrap'}>
        {
          legends.map(legend => (
            <Card key={legend?.id} sx={{ my: 2, width: { xs: '100%', md: '390px' } }}>
              <CardMedia
                component="img"
                image={legend?.photo.data?.attributes?.url}
                alt={legend?.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {legend?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <audio style={{ width: '100%' }} controls>
                    <source src={legend?.audio.data?.attributes?.url} type="audio/wav" />
                    Your browser does not support the audio element.
                  </audio>
                </Typography>
              </CardContent>
            </Card>

          ))
        }
      </Stack>
      <Box my={4}>
        <Typography variant={'h1'}>
          Vzkazy
        </Typography>
        <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} gap={2}>
          {
            comments?.findAllFlat?.data?.map(comment => {
              if (comment?.blocked) {
                return null
              }

              return (
                <Card key={comment!.id} sx={{ my: 0.5, width: '100%', maxWidth: '700px' }}>
                  <CardContent>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <Typography gutterBottom variant="h5" component="div">
                        {comment!.author?.name}
                      </Typography>
                      <Typography gutterBottom variant="subtitle1">
                        {comment?.createdAt &&
                          <DateLabel date={comment.createdAt!} />
                        }
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {comment?.content}
                    </Typography>
                  </CardContent>
                </Card>
              )
            })
          }
        </Stack>
        <Stack my={4} mx={'auto'} maxWidth={700} direction={'column'} gap={1} alignItems={'center'} justifyContent={'center'}>
          <Typography variant={'h6'}>Napište vzkaz</Typography>
          <TextField
            type="text"
            variant='outlined'
            color='secondary'
            label="Jméno"
            onChange={e => setName(e.target.value)}
            value={name}
            fullWidth
            required
          />
          <TextField
            type="text"
            variant='outlined'
            color='secondary'
            label="Komentář"
            onChange={e => setContent(e.target.value)}
            value={content}
            fullWidth
            required
          />
          <Button sx={{ my: 2, width: 100 }} variant={'contained'} onClick={async () => {
            if (name === '' || content === '') {
              alert('Vyplňte prosím všechny údaje')
              return
            }
            await insertComment({ authorName: name, commentContent: content })
            setName('')
            setContent('')
            await refetchTotemComments()
          }}>
            Odeslat
          </Button>
        </Stack>

      </Box>
      <div className={styles.totemFooter}>
        <p>Tento totem byl z většiny financován v rámci projektu <a target="_blank" href="https://www.mladezkraji.cz" rel="noreferrer">Mládež
          kraji</a>.</p>
        <img className={styles.mladezKraji} src="https://vysocina.mladezkraji.cz/sites/all/themes/custom/mlak/logo.png"
          alt=""></img>
      </div>
    </Box>
  )
}

export const getStaticProps = async () => {
  const totemRepository = useTotemRepository()
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('clubroom', totemRepository.fetchTotemData)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 120, // In seconds
  }
}

export default TotemPage
