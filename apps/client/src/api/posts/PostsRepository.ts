import { useApiCall, IApiCall } from '~/src/api/lib/apiCall'
import {
  CreateCommentDocument,
  DeleteCommentDocument,
  GetCommentsDocument,
  TroopEntity,
  UploadFileEntity
} from '~/src/api/gql/graphql'
import { GraphQLClient } from 'graphql-request'
import { useGraphqlRequestClient } from '~/src/api/lib/graphqlRequestClient'

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
    files: { data: UploadFileEntity[] | null }
    troops: { data: TroopEntity[] | null }
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

interface PostResponse {
  data: Post
  meta: Metadata
}

class PostsRepository {
  constructor(
      private readonly fetch: IApiCall,
      private readonly graphqlRequestClient: GraphQLClient
  ) {}

  getPosts = async ( { troopIds, pagination }: PostsRequest): Promise<PostsResponse> => {
    let filterString = ''

    if (troopIds?.length) {
      filterString = troopIds?.reduce((prev, curr, i) => `${prev}&filters[troops][id][$in][${i}]=${curr}`, '')
    }

    let paginationString = ''
    if (pagination) {
      paginationString = `&pagination[page]=${pagination.page}&pagination[pageSize]=${pagination.pageSize}`
    }

    return (await this.fetch(`/posts?sort[0]=createdAt:desc&populate=*${filterString}${paginationString}`)).data as PostsResponse
  }

  getPost = async (postId: number) => {
    return (await this.fetch(`/posts/${postId}?populate=*`)).data as PostResponse
  }

  getComments = async (postId: number) => {
    return await this.graphqlRequestClient.request(GetCommentsDocument, { relation: `api::post.post:${postId}` })
  }

  createComment = async (postId: number, commentContent: string) => {
    return await this.graphqlRequestClient.request(CreateCommentDocument, { relation: `api::post.post:${postId}`, content: commentContent })
  }

  deleteComment = async (postId: number, commentId: number) => {
    return await this.graphqlRequestClient.request(DeleteCommentDocument, { relation: `api::post.post:${postId}`, id: commentId })
  }

}

export const usePostsRepository = () => {
  const apiCall = useApiCall()
  const graphqlClient = useGraphqlRequestClient()

  return new PostsRepository(apiCall, graphqlClient)
}
