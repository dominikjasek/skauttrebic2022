import { IApiCall, useApiCall } from '~/src/api/lib/apiCall'

interface ConfirmRegistrationRequest {
  password: string
  id: string
  hash: string
}

interface ValidateConfirmRegistrationResponse {
  isAllowedToSetPassword: boolean
}

interface ConfirmRegistrationResponse {
  success: boolean
}

export interface LoginRequest {
  identifier: string
  password: string
}

interface LoginResponse {
  jwt: string
  user: {
  id: number
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
    firstName: string
    lastName: string
  }
}

interface UserInfo {
  blocked: boolean
  confirmed: boolean
  createdAt: string
  email: string
  firstName: string
  id: number
  lastName: string
  provider: string
  updatedAt: string
}

export class AuthRepository {
  constructor(private readonly fetch: IApiCall) {}

  validateConfirmRegistration = async (id: string): Promise<ValidateConfirmRegistrationResponse> => {
    return (await this.fetch(`/validate-confirm-registration/${id}`)).data
  }

  confirmRegistration = async (data: ConfirmRegistrationRequest): Promise<ConfirmRegistrationResponse> => {
    return (await this.fetch('/confirm-registration', { method: 'POST', data })).data
  }

  login = async (data: LoginRequest): Promise<LoginResponse> => {
    return (await this.fetch('/auth/local', { method: 'POST', data })).data
  }

  getUserInfo = async (): Promise<UserInfo> => {
    return (await this.fetch('/users/me')).data
  }

  forgotPassword = async (email: string): Promise<{ok: boolean}> => {
    return (await this.fetch('/auth/forgot-password', { method: 'POST', data: { email } })).data
  }

  resetPassword = async (password: string, code: string): Promise<LoginResponse> => {
    return (await this.fetch('/auth/reset-password', { method: 'POST', data: { password, passwordConfirmation: password, code } })).data
  }
}

export const useAuthRepository = () => {
  const apiCall = useApiCall()
  return new AuthRepository(apiCall)
}
