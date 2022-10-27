import { useFetch } from '~/src/api/lib/fetch'
import { $Fetch } from 'ohmyfetch'

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

class AuthRepository {
  constructor(private readonly fetch: $Fetch) {}

  validateConfirmRegistration = async (id: string): Promise<ValidateConfirmRegistrationResponse> => {
    return await this.fetch(`/validate-confirm-registration/${id}`)
  }

  confirmRegistration = async (data: ConfirmRegistrationRequest): Promise<ConfirmRegistrationResponse> => {
    return await this.fetch('/confirm-registration', { method: 'POST', body: data })
  }
}

export const useAuthRepository = () => {
  const fetch = useFetch()
  return new AuthRepository(fetch)
}
