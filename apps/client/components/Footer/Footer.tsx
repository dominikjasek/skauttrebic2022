import React from 'react'
import { Button, useTheme } from '@mui/material'

const Dot = () => {
  return <span style={{ padding: '0px 10px' }}>•</span>
}

export const FOOTER_HEIGHT = '60px'

export const Footer: React.FC = () => {
  const theme = useTheme()

  return (
    <footer style={{
      color: theme.palette.grey[800],
      width: '100%',
      height: FOOTER_HEIGHT,
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
      background: theme.palette.grey[300],
    }}>
      <a href="https://api.skauttrebic.cz/admin" target={'_blank'} rel="noreferrer" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" size="small">Administrace</Button>
      </a>
      <Dot />
      <span><a href="mailto:sisa@skauttrebic.cz" target={'_blank'} style={{ display: 'flex', textAlign: 'center', textDecoration: 'none', color: theme.palette.grey[800] }} rel="noreferrer">
        Dominik Jašek
      </a></span>
      <Dot />
      <span>{new Date().getFullYear()}</span>
    </footer>
  )
}
