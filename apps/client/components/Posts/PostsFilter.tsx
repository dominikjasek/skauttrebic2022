import React from 'react'
import { TroopEntity } from '~/src/api/gql/graphql'
import { Box, Checkbox, Typography } from '@mui/material'

interface PostsFilterProps {
    troops: TroopEntity[]
    selectedTroopIds: number[]
    onTroopsChanged: (selectedTroopIds: number[]) => void
}

export const PostsFilter: React.FC<PostsFilterProps> = ({ troops, selectedTroopIds, onTroopsChanged }) => {
  return (
    <Box>
      <Typography mb={2} variant={'h5'}>Filtr</Typography>
      {troops.map(troop => {
        const color = troop.attributes?.color ?? 'primary'
        return(
          <Box key={troop.id}>
            <Typography>
              {troop.attributes?.name}
              <Checkbox onChange={(_e, newValue) => {
                if (newValue) {
                  onTroopsChanged([...selectedTroopIds, troop.id])
                } else (
                  onTroopsChanged([...selectedTroopIds].filter(v => v !== troop.id))
                )
              }}
              checked={selectedTroopIds.includes(troop.id)}
              sx={{ color, '&.Mui-checked': { color } }}
              />
            </Typography>
          </Box>
        )}
      )}
    </Box>
  )
}
