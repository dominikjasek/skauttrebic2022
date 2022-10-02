// eslint-disable-next-line no-undef
module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'overrides': [
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    '@typescript-eslint/semi': ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
    'react/jsx-space-before-closing': ['error', 'always'],
    'indent': ['error', 2],
    'react/jsx-indent': ['error', 2],
    'quotes': ['error', 'single'],
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-trailing-spaces': 'error',
    'react/jsx-newline': ['error', { 'prevent': true }],
    '@typescript-eslint/no-empty-interface': 'off',
    'key-spacing': ['error', { 'afterColon': true }]
  }
}
