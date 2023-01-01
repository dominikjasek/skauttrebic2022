import { GraphQLClient } from 'graphql-request'
import { useGraphqlRequestClient } from '~/src/api/lib/graphqlRequestClient'
import { GetTotemDataDocument } from '~/src/api/gql/graphql'

class TotemRepository {
  constructor(private readonly graphqlRequestClient: GraphQLClient) {}

  fetchTotemData = async () => {
    return await this.graphqlRequestClient.request(GetTotemDataDocument)
  }
}

export const useTotemRepository = () => {
  const graphqlClient = useGraphqlRequestClient()
  return new TotemRepository(graphqlClient)
}
