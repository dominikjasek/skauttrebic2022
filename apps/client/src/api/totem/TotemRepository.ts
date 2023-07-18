import { GraphQLClient } from 'graphql-request'
import { useGraphqlRequestClient } from '~/src/api/lib/graphqlRequestClient'
import { CreateTotemCommentDocument, GetCommentsDocument, GetTotemDataDocument } from '~/src/api/gql/graphql'

class TotemRepository {
  private readonly commentsRelation = 'api::totem.totem:1'
  constructor(private readonly graphqlRequestClient: GraphQLClient) {}

  fetchTotemData = async () => {
    return await this.graphqlRequestClient.request(GetTotemDataDocument)
  }

  getComments = async () => this.graphqlRequestClient.request(GetCommentsDocument, { relation: this.commentsRelation })

  createComment = async (params: {commentContent: string, authorName: string}) =>
    this.graphqlRequestClient.request(CreateTotemCommentDocument, { relation: this.commentsRelation, content: params.commentContent, authorId: Math.floor(Math.random() * 1000000), authorName: params.authorName }, {
      // strapi comments plugin has weird behaviour, authorization token has higher priority even if parameter name is passed. This ensures that we don't send authorization token to comments so that name can be taken
      Authorization: ''
    })

}

export const useTotemRepository = () => {
  const graphqlClient = useGraphqlRequestClient()
  return new TotemRepository(graphqlClient)
}
