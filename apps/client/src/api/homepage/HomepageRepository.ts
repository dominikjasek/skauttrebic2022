import { useGraphqlRequestClient } from '~/src/api/lib/graphqlRequestClient'
import { HomepageDocument } from '../gql/graphql'
import { GraphQLClient } from 'graphql-request'

class HomepageRepository {
  constructor(private readonly graphqlRequestClient: GraphQLClient) {}

  fetchHomePageData = async () => {
    return await this.graphqlRequestClient.request(HomepageDocument)
  }
}

export const useHomePageRepository = () => {
  const graphqlClient = useGraphqlRequestClient()
  return new HomepageRepository(graphqlClient)
}
