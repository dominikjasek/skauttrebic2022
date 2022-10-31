import React from 'react'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { useScreen } from '~/src/utility/use-screen'
import { motion } from 'framer-motion'

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
    <motion.div
      style={{
        padding: '30px 10px',
        margin: 'auto',
        maxWidth: 'clamp(600px, 60%, 1000px)',
        textAlign: 'center'
      }}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Stack flexDirection={onlyMediumScreen ? 'column' : 'row'} >
        <motion.div
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.5 }
          }}
          transition={{ duration: 0.5 }}
        >
          <Box display="flex" alignItems="center" justifyContent="center" width='150px' margin={onlyMediumScreen ? '15px auto' : '0 30px 0 0'}>
            <img style={{ zIndex: 1, width: '150px', position: 'relative' }} src="https://skauttrebic2022.s3.eu-central-1.amazonaws.com/potato_10a64b61b7.svg?updated_at=2022-10-16T20:04:34.401Z" alt="brambora" />
            <img style={{ zIndex: 2, width: '100px', position: 'absolute' }} src={props.logo.url} alt={props.title + ' logo'} />
          </Box>
        </motion.div>
        <motion.div
          variants={{
            visible: { opacity: 1, scale: 1, y: 0 },
            hidden: { opacity: 0, scale: 0.9, y: 40 }
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Stack textAlign={ onlyMediumScreen ? 'center' : 'left'}>
            <Typography variant="h3" >{props.title}</Typography>
            <div>{props.ageInfo}</div>
            <Divider style={{ margin: '10px 0px' }} />
            <div>{props.description}</div>
          </Stack>
        </motion.div>
      </Stack>

    </motion.div>
  )
}
