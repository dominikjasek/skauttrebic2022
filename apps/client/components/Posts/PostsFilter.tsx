import React from 'react'
import { TroopEntity } from '~/src/api/gql/graphql'
import { Box, Card, Checkbox, Typography } from '@mui/material'

interface PostsFilterProps {
    troops: TroopEntity[]
    selectedTroopIds: number[]
    onTroopsChanged: (selectedTroopIds: number[]) => void
}

export const PostsFilter: React.FC<PostsFilterProps> = ({ troops, selectedTroopIds, onTroopsChanged }) => {
  return (
    <Card sx={{ p: 2, mr: 2 }}>
      <Typography ml={1} mr={2} variant={'h5'}>Filtr</Typography>
      {troops.map(troop => {
        const color = troop.attributes?.color ?? 'primary'
        return(
          <Box key={troop.id}>
            <Typography>
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
              <Typography component={'span'} sx={{ verticalAlign: 'middle' }}>{troop.attributes?.name}</Typography>
            </Typography>
          </Box>
        )}
      )}
    </Card>
  )
}
