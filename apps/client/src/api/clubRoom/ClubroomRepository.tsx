import { GraphQLClient } from 'graphql-request'
import { useGraphqlRequestClient } from '~/src/api/lib/graphqlRequestClient'
import { GetClubroomDataDocument } from '~/src/api/gql/graphql'

class ClubroomRepository {
  constructor(private readonly graphqlRequestClient: GraphQLClient) {}

  fetchClubroomData = async () => {
    return await this.graphqlRequestClient.request(GetClubroomDataDocument)

  }
}

export const useClubRoomRepository = () => {
  const graphqlClient = useGraphqlRequestClient()
  return new ClubroomRepository(graphqlClient)
}
