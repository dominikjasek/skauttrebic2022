import { createContext, useContext, useMemo } from 'react'

interface IUser {
    firstName: string
    lastName: string
    id: number
    email: string
    image?: string
    role: {
      type: string
    }
}

export interface IAuth {
    user?: IUser
    isLoading?: boolean
    jwt?: string,
}

type IAuthContext = { auth: IAuth | null, setAuth: (val: IAuth | null) => void } | null

export const AuthContext = createContext<IAuthContext>(null)

export const useAuth = () => {
  return useContext(AuthContext)
}

export const useUser = () => {
  const auth = useAuth()
  return useMemo(() => auth?.auth?.user ?? null, [auth])
}
