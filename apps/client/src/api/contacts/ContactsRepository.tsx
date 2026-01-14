import { GraphQLClient } from 'graphql-request'
import { useGraphqlRequestClient } from '~/src/api/lib/graphqlRequestClient'
import {
  GetContactCardsDocument
} from '~/src/api/gql/graphql'
import { IApiCall, useApiCall } from '~/src/api/lib/apiCall'

export interface ContactCard {
  id: number
  name: string
  nickname: string
  role: string
  phone: string
  email: string
  about: string
  photo: {
    data: {
      attributes: {
        url: string
      }
    }
  }
}

export interface Troop {
  id: number
  name: string
  contactCards: ContactCard[]
}

export interface TroopContactCards {
  data: {
    attributes: {
      troop: Troop[]
    }
  }
}

class ContactsRepository {
  constructor(
    private readonly fetch: IApiCall,
    private readonly graphqlRequestClient: GraphQLClient
  ) {}

  fetchContactsData = async () => {
    return await this.graphqlRequestClient.request(GetContactCardsDocument)
  }

  fetchTroopContactCards = async () => {
    return (await this.fetch('/troop-contact/?populate=deep')).data as TroopContactCards
  }
}

export const useContactsRepository = () => {
  const apiCall = useApiCall()
  const graphqlClient = useGraphqlRequestClient()

  return new ContactsRepository(apiCall, graphqlClient)
}
