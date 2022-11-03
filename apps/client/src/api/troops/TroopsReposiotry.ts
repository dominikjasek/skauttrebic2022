import { useGraphqlRequestClient } from '~/src/api/lib/graphqlRequestClient'
import { GraphQLClient } from 'graphql-request'
import { ListTroopsDocument } from '~/src/api/gql/graphql'

export class TroopsReposiotry {
  constructor(private readonly graphqlRequestClient: GraphQLClient) {}

  getTroops = async () => {
    return await this.graphqlRequestClient.request(ListTroopsDocument)
  }
}

export const useTroopsRepository = () => {
  const graphqlClient = useGraphqlRequestClient()
  return new TroopsReposiotry(graphqlClient)
}
