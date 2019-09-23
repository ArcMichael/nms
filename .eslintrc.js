module.exports = {
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
  env: {
    es6: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint'],
  rules: {}
}
