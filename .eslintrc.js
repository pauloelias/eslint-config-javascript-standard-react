module.exports = {
  extends: [
    '@pauloelias/eslint-config-javascript-standard-core',
    'standard-jsx',
    'prettier/react',
    'plugin:jsx-a11y/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    browser: true,
    jest: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        semi: false,
        singleQuote: true,
        trailingComma: 'none'
      }
    ]
  },
  plugins: ['jsx-a11y', 'react', 'react-hooks']
}
