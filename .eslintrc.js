module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.json']
  },
  rules: {
    '@typescript-eslint/array-type': 'off',
    'prefer-const': 'off',
    'no-debugger': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/require-array-sort-compare': 'off',
    'eslint-no-arrow-condition': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off'
  }
}
