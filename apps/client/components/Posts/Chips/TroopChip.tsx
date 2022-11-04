import React from 'react'
import { TroopEntity } from '~/src/api/gql/graphql'
import { Chip } from '@mui/material'

interface TroopChipProps {
    troop: TroopEntity
}

export const TroopChip: React.FC<TroopChipProps> = ({ troop }) => {
  return (
    <Chip sx={{ backgroundColor: troop.attributes?.color ?? 'primary', color: 'white' }} label={troop.attributes?.name.toLowerCase()} />
  )
}
