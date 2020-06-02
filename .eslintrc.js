module.exports = {
  env: {
    node: true,
    es2020: true
  },
  parserOptions: {
    ecmaVersion: 11
  },
  extends: 'eslint:recommended',
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    indent: ['error', 2]
  }
}

