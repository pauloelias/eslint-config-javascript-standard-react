module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    commonjs: true
  },
  extends: [
    'standard',
    'prettier',
    'standard-jsx',
    'prettier/react',
    'plugin:jsx-a11y/recommended'
  ],
  rules: {
    'arrow-parens': [2, 'as-needed'],
    camelcase: 2,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        semi: false,
        singleQuote: true,
        trailingComma: 'none'
      }
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref']
      }
    ],
    'react/prop-types': 0,
    'react/jsx-uses-vars': [2],
    'react/jsx-no-undef': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  plugins: ['html', 'prettier', 'standard', 'jsx-a11y', 'react', 'react-hooks']
}
