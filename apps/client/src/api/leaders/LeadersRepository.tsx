import { GraphQLClient } from 'graphql-request'
import { useGraphqlRequestClient } from '~/src/api/lib/graphqlRequestClient'
import { GetLeadersDataDocument } from '~/src/api/gql/graphql'

class LeadersRepository {
  constructor(private readonly graphqlRequestClient: GraphQLClient) {}

  fetchLeadersData = async () => {
    return await this.graphqlRequestClient.request(GetLeadersDataDocument)

  }
}

export const useLeadersRepository = () => {
  const graphqlClient = useGraphqlRequestClient()
  return new LeadersRepository(graphqlClient)
}
