import { IApiCall, apiCall } from '~/src/api/lib/apiCall'

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

export class AuthRepository {
  constructor(private readonly fetch: IApiCall) {}

  validateConfirmRegistration = async (id: string): Promise<ValidateConfirmRegistrationResponse> => {
    return await this.fetch(`/validate-confirm-registration/${id}`)
  }

  confirmRegistration = async (data: ConfirmRegistrationRequest): Promise<ConfirmRegistrationResponse> => {
    return await this.fetch('/confirm-registration', { method: 'POST', body: data })
  }

  login = async (data: LoginRequest): Promise<LoginResponse> => {
    return await this.fetch('/auth/local', { method: 'POST', body: data })
  }
}

export const useAuthRepository = () => {
  return new AuthRepository(apiCall)
}
