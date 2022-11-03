import { createContext, useContext } from 'react'

interface IUser {
    firstName: string
    lastName: string
    id: number
    email: string
    image?: string
}

export interface IAuth {
    user?: IUser
    jwt?: string,
}

type IAuthContext = { auth: IAuth | null, setAuth: (val: IAuth | null) => void } | null

export const AuthContext = createContext<IAuthContext>(null)

export const useAuth = () => {
  return useContext(AuthContext)
}

export const useUser = () => {
  const auth = useAuth()
  return auth?.auth?.user ?? null
}
