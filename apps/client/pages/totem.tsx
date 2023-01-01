import React from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { useTotemRepository } from '~/src/api/totem/TotemRepository'
import { Loading } from '~/components/Loading/Loading'
import styles from '~/components/Totem/totem.module.css'
import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'

export const TotemPage: React.FC = () => {
  const totemRepository = useTotemRepository()
  const { data: totemData, isLoading } = useQuery('totem',totemRepository.fetchTotemData)

  if (isLoading) {
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
