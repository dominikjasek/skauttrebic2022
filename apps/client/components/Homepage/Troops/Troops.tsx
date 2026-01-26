import React from 'react'
import { Troop, TroopProps } from '~/components/Homepage/Troops/Troop'
import { Typography } from '@mui/material'

interface TroopsProps {
    troops: TroopProps[]
}

export const Troops: React.FC<TroopsProps> = ({ troops }) => {
  return (
    <>
      <Typography variant={'h1'} mt={4}>Oddíly</Typography>
      {troops.map(troop => {
        return (
          <Troop key={troop.id} id={troop.id} title={troop.title} ageInfo={troop.ageInfo} description={troop.description} logo={troop.logo} />
        )
      })}
    </>
  )
}
