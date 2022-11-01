import React from 'react'
import { TroopEntity } from '~/src/api/gql/graphql'
import { Chip } from '@mui/material'

interface TroopChipProps {
    troop: TroopEntity
}

export const TroopChip: React.FC<TroopChipProps> = ({ troop }) => {
  return (
    <Chip label={troop.attributes?.name} />
  )
}
