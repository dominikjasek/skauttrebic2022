import { apiCall, IApiCall } from '~/src/api/lib/apiCall'
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

class PostsRepository {
  constructor(private readonly fetch: IApiCall) {}

  getPosts = async (): Promise<PostsResponse> => {
    return (await this.fetch('/posts?populate=*')).data as PostsResponse
  }

}

export const usePostsRepository = () => {
  return new PostsRepository(apiCall)
}
