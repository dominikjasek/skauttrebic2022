import React from 'react'
import { Button } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'

interface DownloadButtonProps {
    name: string
    url: string
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ url, name }) => {
  const onDownload = async () => {
    const response = await fetch(url)
    const blob = await response.blob()

    // Create blob link to download
    const blobUrl = window.URL.createObjectURL(
      new Blob([blob]),
    )
    const link = document.createElement('a')
    link.href = blobUrl
    link.setAttribute(
      'download',
      name,
    )

    // Append to html link element page
    document.body.appendChild(link)

    // Start download
    link.click()

    // Clean up and remove the link
    link.parentNode?.removeChild(link)

  }

  return (
    <Button onClick={onDownload} variant="contained" color="primary">
      <DownloadIcon sx={{ mr: 1 }} /> Stáhnout
    </Button>
  )
}
