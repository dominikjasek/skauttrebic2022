import React from 'react'
import { Button, useTheme } from '@mui/material'

const Dot = () => {
  return <span style={{ padding: '0px 10px' }}>•</span>
}

export const Footer: React.FC = () => {
  const theme = useTheme()

  return (
    <footer style={{
      color: theme.palette.grey[800],
      width: '100%',
      height: '60px',
      marginTop: '10px',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: theme.palette.grey[300],
    }}>
      <a href="https://api.skauttrebic.cz/admin" target={'_blank'} rel="noreferrer" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" size="small">Administrace webu</Button>
      </a>
      <Dot />
      <span>Administrátor webu: <a href="mailto:sisa@skauttrebic.cz" target={'_blank'} style={{ textDecoration: 'none', color: theme.palette.grey[800] }} rel="noreferrer">
        Dominik Jašek
      </a></span>
      <Dot />
      <span>{new Date().getFullYear()}</span>
    </footer>
  )
}
