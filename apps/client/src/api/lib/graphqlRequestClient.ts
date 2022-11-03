import { GraphQLClient } from 'graphql-request'
import { JwtCookieStorage } from '~/src/api/auth/context/JwtCookieStorage'

const requestHeaders: HeadersInit = {}

export const useGraphqlRequestClient = () => {
  return new GraphQLClient(process.env.GRAPHQL_API_URL as string, {
    headers: () => {
      const jwtStorage = new JwtCookieStorage()
      const jwt = jwtStorage.get()

      if (jwt) {
        requestHeaders.Authorization = `Bearer ${jwt}`
      }
      return requestHeaders
    },
  })
}
