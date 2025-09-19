import React, { createContext, useContext, ReactNode } from 'react'
import { useTopBarNotification } from './useTopBarNotification'
import { TopBarNotification } from '~/components/TopBar/useTopBarNotification'

interface TopBarContext {
  topBarNotification: TopBarNotification | null
  dismissNotification: () => void
  resetNotification: () => void
}

const TopBarContext = createContext<TopBarContext | undefined>(undefined)

interface TopBarProviderProps {
  children: ReactNode
}

export const TopBarProvider: React.FC<TopBarProviderProps> = ({ children }) => {
  const topBarNotification = useTopBarNotification()

  return (
    <TopBarContext.Provider value={topBarNotification}>
      {children}
    </TopBarContext.Provider>
  )
}

export const useTopBarContext = (): TopBarContext => {
  const context = useContext(TopBarContext)
  if (context === undefined) {
    throw new Error('useTopBarContext must be used within a TopBarProvider')
  }
  return context
}
