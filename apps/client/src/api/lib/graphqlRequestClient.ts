import { GraphQLClient } from 'graphql-request'

const requestHeaders = {
  // authorization: 'Bearer MY_TOKEN',
}

export const graphqlRequestClient = new GraphQLClient(process.env.GRAPHQL_API_URL as string, {
  headers: requestHeaders,
})
