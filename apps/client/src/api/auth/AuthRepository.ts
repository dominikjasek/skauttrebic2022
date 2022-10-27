import { Axios } from 'axios'
import { useApiAxios } from '~/src/api/lib/axios'

interface ConfirmRegistrationRequest {
  password: string
  hash: string
}

class AuthRepository {
  constructor(private readonly axios: Axios) {}

  confirmRegistration = async (data: ConfirmRegistrationRequest) => {
    return await this.axios.post('/confirm-registration', data)
  }
}

export const useAuthRepository = () => {
  const axios = useApiAxios()
  const authRepository = new AuthRepository(axios)

  return authRepository
}
