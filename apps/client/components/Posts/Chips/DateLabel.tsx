import React, { useMemo } from 'react'
import { Chip } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

interface DateProps {
    date: string
}

export const DateLabel: React.FC<DateProps> = ({ date }) => {
  const formattedDate = useMemo(() => {
    const dateObj = new Date(date)
    const formattedDate = dateObj.toLocaleDateString('cs-CZ', { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' }).split(' ').splice(1).join(' ')
    return formattedDate
  }
  , [date])

  return (
    <Chip size={'small'} icon={<CalendarMonthIcon />} label={formattedDate} />
  )
}
