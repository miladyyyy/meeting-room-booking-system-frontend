module.exports = {
  extends: require.resolve('@umijs/max/eslint'),

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': [
      'warn',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
}
