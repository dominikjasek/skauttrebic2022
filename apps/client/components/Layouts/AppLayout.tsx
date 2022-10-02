import React, { PropsWithChildren } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Typography } from '@mui/material'

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
      <Typography fontFamily={'skautbold'}>footer</Typography>
    </>
  )
}