import { GraphQLClient } from 'graphql-request'
import { useGraphqlRequestClient } from '~/src/api/lib/graphqlRequestClient'
import { GetLeaderDataDocument } from '~/src/api/gql/graphql'

class LeaderRepository {
  constructor(private readonly graphqlRequestClient: GraphQLClient) {}

  fetchLeaderData = async () => {
    return await this.graphqlRequestClient.request(GetLeaderDataDocument)

  }
}

export const useLeaderRepository = () => {
  const graphqlClient = useGraphqlRequestClient()
  return new LeaderRepository(graphqlClient)
}
