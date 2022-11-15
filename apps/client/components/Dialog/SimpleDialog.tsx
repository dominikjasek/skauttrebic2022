import * as React from 'react'
import List from '@mui/material/List'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'

export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
    title: string
    children: React.ReactNode
}

export function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open, title, children } = props

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <List sx={{ pt: 0 }}>
        {children}
      </List>
    </Dialog>
  )
}
