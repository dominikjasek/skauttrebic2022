import { useState, useEffect } from 'react'

export interface TopBarNotification {
  id: string
  message: string
  type: 'info' | 'warning' | 'error'
}

// Predefined notification baked into the code
const PREDEFINED_NOTIFICATION: TopBarNotification = {
  id: 'rikitan-announcement',
  message: 'Od nového roku máme nové středisko <strong>RIKITAN</strong>.',
  type: 'error',
}

const TOPBAR_NOTIFICATION_STORAGE_KEY = 'rikitan-announcement'

// Helper function to check if notification is dismissed
const isNotificationDismissed = (): boolean => {
  try {
    const stored = localStorage.getItem(TOPBAR_NOTIFICATION_STORAGE_KEY)
    return stored === 'true'
  } catch (error) {
    console.error('Failed to load notification state from localStorage:', error)
    return false
  }
}

// Helper function to get active notification
const getActiveNotification = (): TopBarNotification | null => {
  if (isNotificationDismissed()) {
    return null
  }
  return PREDEFINED_NOTIFICATION
}

export const useTopBarNotification = () => {
  const [topBarNotification, setTopBarNotification] = useState<TopBarNotification | null>(null)

  // Initialize notification on client side only
  useEffect(() => {
    setTopBarNotification(getActiveNotification())
  }, [])

  const dismissNotification = () => {
    try {
      localStorage.setItem(TOPBAR_NOTIFICATION_STORAGE_KEY, 'true')
      setTopBarNotification(null)
    } catch (error) {
      console.error('Failed to save notification dismissal to localStorage:', error)
    }
  }

  const resetNotification = () => {
    try {
      localStorage.removeItem(TOPBAR_NOTIFICATION_STORAGE_KEY)
      setTopBarNotification(getActiveNotification())
    } catch (error) {
      console.error('Failed to reset notification:', error)
    }
  }

  return {
    topBarNotification,
    dismissNotification,
    resetNotification
  }
}
