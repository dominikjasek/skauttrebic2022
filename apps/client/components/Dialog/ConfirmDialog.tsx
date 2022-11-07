import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'
import { FC } from 'react'
import create from 'zustand'

const useConfirmDialogStore = create<{message: string, onSubmit?: () => void, close: () => void}>((set) => ({
  message: '',
  onSubmit: undefined,
  close: () => set({ onSubmit: undefined }),
}))

export const confirmDialog = (message: string, onSubmit?: () => void) => {
  useConfirmDialogStore.setState({
    message,
    onSubmit,
  })
}

const ConfirmDialog: FC = () => {
  const { message, onSubmit, close } = useConfirmDialogStore()

  return (
    <Dialog open={Boolean(onSubmit)} onClose={close} maxWidth="sm" fullWidth>
      <DialogTitle>Potvrzení</DialogTitle>
      <Box position="absolute" top={0} right={0}>
        <IconButton onClick={close}>
          <Close />
        </IconButton>
      </Box>
      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="outlined" onClick={close}>
          Zrušit
        </Button>
        <Button
          color="warning"
          variant="contained"
          onClick={() => {
            onSubmit?.()
            close()
          }}
        >
          Potvrdit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog
