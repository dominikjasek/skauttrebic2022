import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http:/localhost:1337/graphql',
  documents: 'src/**/*.graphql',
  generates: {
    'src/api/gql': {
      preset: 'client',
      plugins: []
    },
    './graphql.schema.json': {
      plugins: ['introspection']
    }
  },
}

export default config
