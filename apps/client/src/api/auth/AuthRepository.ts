import { IFetch, useFetch } from '~/src/api/lib/fetch'

interface ConfirmRegistrationRequest {
  password: string
  passwordConfirmation: string
  code: string
}

interface ValidateConfirmRegistrationResponse {
  isAllowedToSetPassword: boolean
}

interface ConfirmRegistrationResponse {
  success: boolean
}

class AuthRepository {
  constructor(private readonly fetch: IFetch) {}

  validateConfirmRegistration = async (id: string): Promise<ValidateConfirmRegistrationResponse> => {
    return await this.fetch(`/validate-confirm-registration/${id}`)
  }

  confirmRegistration = async (data: ConfirmRegistrationRequest): Promise<ConfirmRegistrationResponse> => {
    return await this.fetch('/auth/reset-password', { method: 'POST', body: data })
  }
}

export const useAuthRepository = () => {
  const fetch = useFetch()
  return new AuthRepository(fetch)
}
