import { useApiCall, IApiCall } from '~/src/api/lib/apiCall'
import { TroopEntity, UploadFileEntity } from '~/src/api/gql/graphql'

export interface StrapiUser {
  attributes: {
    createdAt: string
    firstname: string
    lastname: string
    preferedLanguage: string
    updatedAt: string
    username: string
  }
  id: number
}

export interface Post {
  id: number
  attributes: {
    title: string
    content: string
    files: { data: UploadFileEntity[] }
    troops: { data: TroopEntity[] }
    schedule_publish_at: string | null
    createdAt: string
    updatedAt: string
    publishedAt: string
    public: boolean
    createdBy: { data: StrapiUser }
    updatedBy: { data: StrapiUser }
  }
}

interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

interface Metadata {
  pagination: Pagination}

interface PostsResponse {
  data: Post[]
  meta: Metadata
}

interface PostsRequest {
  troopIds?: number[]
  pagination: {
    page: number
    pageSize: number
  }
}

class PostsRepository {
  constructor(private readonly fetch: IApiCall) {}

  getPosts = async ( { troopIds, pagination }: PostsRequest): Promise<PostsResponse> => {
    let filterString = ''

    // Empty troopIds returns empty response
    // if (!troopIds?.length) {
    //   return {
    //     data: [],
    //     meta: {
    //       pagination: {
    //         page: pagination.page,
    //         pageSize: pagination.pageSize,
    //         pageCount: 0,
    //         total: 0
    //       }
    //     }
    //   }
    // }

    if (troopIds?.length) {
      filterString = troopIds?.reduce((prev, curr, i) => `${prev}&filters[troops][id][$in][${i}]=${curr}`, '')
    }

    let paginationString = ''
    if (pagination) {
      paginationString = `&pagination[page]=${pagination.page}&pagination[pageSize]=${pagination.pageSize}`
    }

    return (await this.fetch(`/posts?populate=*${filterString}${paginationString}`)).data as PostsResponse
  }

}

export const usePostsRepository = () => {
  const apiCall = useApiCall()
  return new PostsRepository(apiCall)
}
