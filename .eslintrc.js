module.exports = {
  plugins: ['simple-import-sort', 'react', 'react-hooks', 'jsx-a11y'],
  extends: [
    '@pauloelias/eslint-config-javascript-standard-core',
    'standard-jsx',
    'plugin:jsx-a11y/recommended',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  rules: {
    'jsx-a11y/anchor-is-valid': [
      2,
      {
        aspects: ['invalidHref']
      }
    ],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/jsx-uses-vars': 2,
    'react/jsx-no-undef': 2,
    'jsx-quotes': [2, 'prefer-double'],
    'react/prop-types': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true
  }
}
