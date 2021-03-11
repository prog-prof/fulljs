module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': [
      'warn',
      {
        allow: ['clear', 'info', 'error', 'dir', 'trace']
      }
    ],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'array-bracket-newline': ['error', { multiline: true, minItems: 6 }],
    'function-paren-newline': ['error', 'consistent'],
    'jsx-quotes': ['error', 'prefer-single'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'lines-between-class-members': ['error', 'always'],
    'prefer-const': ['warn']
  }
};
