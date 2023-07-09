import React, { PropsWithChildren, useEffect, useState } from 'react'
import { useJwtCookieStorage } from '~/src/api/auth/context/JwtCookieStorage'
import { AuthContext, IAuth } from '~/src/api/auth/context/AuthContext'
import { useAuthRepository } from '~/src/api/auth/AuthRepository'
import { useQuery, useQueryClient } from 'react-query'

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const jwtCookieStorage = useJwtCookieStorage()
  const authRepository = useAuthRepository()
  const queryclient = useQueryClient()

  const [auth, setAuth] = useState<IAuth | null>({ jwt: jwtCookieStorage.get() })
  const { refetch: reloadUserInfo } = useQuery('user', async () => {
    const jwt = jwtCookieStorage.get()
    if (jwt) {
      const response = await authRepository.getUserInfo()
      setAuth({
        user: {
          firstName: response.firstName,
          lastName: response.lastName,
          email: response.email,
          id: response.id
        },
        jwt
      })
    }
  }, { enabled: !!jwtCookieStorage.get() })

  const clearUserInfo = () => {
    setAuth(null)
    jwtCookieStorage.delete()
  }

  useEffect(() => {
    if (auth?.jwt) {
      jwtCookieStorage.set(auth.jwt)
      reloadUserInfo()
    } else {
      clearUserInfo()
    }
    queryclient.invalidateQueries()
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

