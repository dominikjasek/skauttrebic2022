import { graphqlRequestClient } from '~/src/lib/graphqlRequestClient'
import { HomepageDocument, HomepageEntity } from './../gql/graphql'

class HomepageRepository {
  async fetchHomePageData() {
    const response = await graphqlRequestClient.request(HomepageDocument)
    return response.homepage?.data as HomepageEntity
  }
}

export const useHomePageRepository = () => {
  return new HomepageRepository()
}
