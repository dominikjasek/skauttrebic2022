import { graphqlRequestClient } from '~/src/api/lib/graphqlRequestClient'
import { HomepageDocument } from '../gql/graphql'

class HomepageRepository {
  async fetchHomePageData() {
    return await graphqlRequestClient.request(HomepageDocument)
  }
}

export const useHomePageRepository = () => {
  return new HomepageRepository()
}