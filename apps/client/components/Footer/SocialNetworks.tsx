import React from 'react'
import { Box, Divider, Stack, Typography, useTheme } from '@mui/material'
import { useScreen } from '~/src/utility/use-screen'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import Link from 'next/link'

export const SocialNetworks: React.FC = () => {
  const theme = useTheme()
  const { onlySmallScreen, onlyMediumScreen } = useScreen()

  return (
    <Box sx={{
      width: '100vw',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      backgroundColor: theme.palette.primary.light,
      color: 'white',
      py: '30px',
      px: '60px'
    }}>
      <Stack m={'auto'} maxWidth={onlyMediumScreen ? 'auto' : '60%'} flexDirection={onlyMediumScreen ? 'column' : 'row'} gap={'40px'} justifyContent={'center'}>
        {!onlySmallScreen && <>
          <Stack justifyContent="center">
            <Typography variant={'h4'}>
              Sledujte&#160;nás
            </Typography>
          </Stack>
          <Divider
            sx={{
              bgcolor: 'white',
            }}
            flexItem orientation={onlyMediumScreen ? 'horizontal' : 'vertical'}
          />
        </>}
        <Stack direction={'column'} alignItems={onlyMediumScreen ? 'center' : 'left'} justifyContent={'center'} >
          <Link href={'https://www.instagram.com/rikitan_trebic'} passHref >
            <a target={'_blank'} rel={'noopener noreferrer'} style={{ textDecoration: 'none', color: 'white' }}>
              <Stack direction={'row'} gap={2} alignItems={'center'} sx={{
                py: 1,
                my: 1,
                px: 3,
                borderRadius: 4,
                '&:hover': {
                  marginTop: 0.5,
                  marginBottom: 1.5,
                  boxShadow: 5
                }
              }}>
                <InstagramIcon fontSize={'large'} />
                <Typography variant={'h3'}> Instagram </Typography>
              </Stack>
            </a>
          </Link>
          <Link href={'https://www.facebook.com/profile.php?id=61587110006495'} passHref >
            <a target={'_blank'} rel={'noopener noreferrer'} style={{ textDecoration: 'none', color: 'white' }}>
              <Stack direction={'row'} gap={2} alignItems={'center'} sx={{
                py: 1,
                my: 1,
                px: 3,
                borderRadius: 4,
                '&:hover': {
                  marginTop: 0.5,
                  marginBottom: 1.5,
                  boxShadow: 5
                }
              }}>
                <FacebookIcon fontSize={'large'} />
                <Typography variant={'h3'}> Facebook </Typography>
              </Stack>
            </a>
          </Link>

        </Stack>
      </Stack>
    </Box>
  )
}
