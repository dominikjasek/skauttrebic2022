import React from 'react'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { useScreen } from '~/src/utility/use-screen'

export interface TroopProps {
    title: string,
    id: number,
    ageInfo: string,
    description: string,
    logo: {
        url: string
    }
}

export const Troop: React.FC<TroopProps> = (props ) => {
  const { onlyMediumScreen } = useScreen()

  return (
    <Box sx={{
      padding: '30px 10px',
      margin: 'auto',
      maxWidth: 'clamp(600px, 60%, 1000px)',
      textAlign: 'center'
    }}>
      <Stack flexDirection={onlyMediumScreen ? 'column' : 'row'} >
        <Box display="flex" alignItems="center" justifyContent="center" width='150px' margin={onlyMediumScreen ? '15px auto' : '0 30px 0 0'}>
          <img style={{ zIndex: 1, width: '150px', position: 'relative' }} src="https://skauttrebic2022.s3.eu-central-1.amazonaws.com/potato_10a64b61b7.svg?updated_at=2022-10-16T20:04:34.401Z" alt="brambora" />
          <img style={{ zIndex: 2, width: '100px', position: 'absolute' }} src={props.logo.url} alt={props.title + ' logo'} />
        </Box>
        <Box>
          <Stack textAlign={ onlyMediumScreen ? 'center' : 'left'}>
            <Typography variant="h3" >{props.title}</Typography>
            <div>{props.ageInfo}</div>
            <Divider style={{ margin: '10px 0px' }} />
            <div>{props.description}</div>
          </Stack>
        </Box>
      </Stack>

    </Box>
  )
}
