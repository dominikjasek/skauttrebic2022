import React from 'react'
import { UploadFileEntity } from '~/src/api/gql/graphql'
import { Box, Stack, Typography } from '@mui/material'
import { DownloadButton } from '~/components/Button/DownloadButton/DownloadButton'

interface AttachmentsProps {
    files: UploadFileEntity[]
}

export const Attachments: React.FC<AttachmentsProps> = ({ files }) => {
  return (
    <Box>
      <Typography sx={{ mb: 1 }} variant={'h4'} fontSize={'1.8rem'}>Soubory ke stažení</Typography>
      {
        files.map((file, i) => {
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
  )
}
