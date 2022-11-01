import React from 'react'
import { Chip } from '@mui/material'

interface DateChipProps {
    date: string
}

export const DateChip: React.FC<DateChipProps> = ({ date }) => {
  const formattedDate = (new Date(date)).toLocaleDateString('cs-CZ', { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }).split(' ').splice(1).join(' ')

  return (
    <Chip label={formattedDate} />
  )
}
