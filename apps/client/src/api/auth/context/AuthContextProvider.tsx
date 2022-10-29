import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { useJwtCookieStorage } from '~/src/api/auth/context/JwtCookieStorage'

export interface IAuth {
    user?: {
        firstName: string
        lastName: string
        id: number
        email: string
        image?: string
    }
    jwt?: string,
}

export const AuthContext = createContext<{ auth: IAuth | null, setAuth: (val: IAuth)=>void } | null>(null)

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const jwtCookieStorage = useJwtCookieStorage()
  const [auth, setAuth] = useState<IAuth | null>({ jwt: jwtCookieStorage.get() })

  useEffect(() => {
    if (auth?.jwt) {
      jwtCookieStorage.set(auth.jwt)
    }
  }, [auth?.jwt])

  return (
    <AuthContext.Provider
      value={{
        auth, setAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
