import { GraphQLClient } from 'graphql-request'
import { useGraphqlRequestClient } from '~/src/api/lib/graphqlRequestClient'
import { GetMemberRegistrationDataDocument } from '~/src/api/gql/graphql'

class MemberRegistrationRepository {
  constructor(private readonly graphqlRequestClient: GraphQLClient) {}

  fetchMemberRegistrationData = async () => {
    return await this.graphqlRequestClient.request(GetMemberRegistrationDataDocument)

  }
}

export const useMemberRegistrationRepository = () => {
  const graphqlClient = useGraphqlRequestClient()
  return new MemberRegistrationRepository(graphqlClient)
}
