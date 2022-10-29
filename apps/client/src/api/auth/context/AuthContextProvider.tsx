import React, { PropsWithChildren, useEffect, useState } from 'react'
import { useJwtCookieStorage } from '~/src/api/auth/context/JwtCookieStorage'
import { AuthContext, IAuth } from '~/src/api/auth/context/AuthContext'
import { useAuthRepository } from '~/src/api/auth/AuthRepository'

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const jwtCookieStorage = useJwtCookieStorage()
  const authRepository = useAuthRepository()

  const [auth, setAuth] = useState<IAuth | null>({ jwt: jwtCookieStorage.get() })

  const reloadUserInfo = async (jwt: string) => {
    jwtCookieStorage.set(jwt)
    const response = await authRepository.getUserInfo()
    setAuth({
      user: {
        firstName: response.firstName,
        lastName: response.lastName,
        email: response.email,
        id: response.id
      },
      jwt: jwt
    })
  }

  const clearUserInfo = () => {
    setAuth(null)
  }

  useEffect(() => {
    if (auth?.jwt) {
      reloadUserInfo(auth.jwt)
    } else {
      clearUserInfo()
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

