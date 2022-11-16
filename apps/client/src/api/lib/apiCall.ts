import axios from 'axios'
import { JwtCookieStorage } from '~/src/api/auth/context/JwtCookieStorage'

interface ApiCallOptions {
  useJwt: boolean
}

const defaultApiCallOptions: ApiCallOptions = {
  useJwt: true
}

export const useApiCall = (options = defaultApiCallOptions) => {
  const apiCall = axios.create({
    baseURL: process.env.API_URL,
    headers: {},
  })

  if (options.useJwt) {
    apiCall.interceptors.request.use((config) => {
      const jwtStorage = new JwtCookieStorage()
      const jwt = jwtStorage.get()

      if (jwt) {
      config.headers!.Authorization = `Bearer ${jwt}`
      }

      return config
    })
  }

  return apiCall
}

export type IApiCall = ReturnType<typeof useApiCall>
