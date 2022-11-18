import { GraphQLClient } from 'graphql-request'
import { useGraphqlRequestClient } from '~/src/api/lib/graphqlRequestClient'
import {
  GetContactCardsDocument,
  GetTroopContactCardsDocument,
  GetTroopContactNamesDocument
} from '~/src/api/gql/graphql'

class ContactsRepository {
  constructor(private readonly graphqlRequestClient: GraphQLClient) {}

  fetchContactsData = async () => {
    return await this.graphqlRequestClient.request(GetContactCardsDocument)
  }

  fetchTroopContactNames = async () => {
    return await this.graphqlRequestClient.request(GetTroopContactNamesDocument)
  }
  fetchTroopContactCards = async () => {
    return await this.graphqlRequestClient.request(GetTroopContactCardsDocument)
  }
}

export const useContactsRepository = () => {
  const graphqlClient = useGraphqlRequestClient()
  return new ContactsRepository(graphqlClient)
}
