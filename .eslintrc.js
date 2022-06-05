module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: [2, 'never'],
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 2,
    'linebreak-style': 0,
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
    }],
    'prefer-template': 0,
    'arrow-parens': [0, 'as-needed'],
    'no-console': [1, {
      allow: ['warn', 'error'],
    }],
    'consistent-return': 0,
    'comma-dangle': 0,
    'react/prop-types': 0
  },
}
