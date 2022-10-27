const path = require('path');

const tsConfig = path.resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  parserOptions: {
    project: tsConfig,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: tsConfig,
      },
    },
    'jsx-a11y': {
      components: {
        Button: 'button',
        Image: 'img',
        InputBase: 'input',
        Link: 'a',
      },
    },
  },
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/no-unescaped-entities': 'off',
    'prettier/prettier': 'error',
    'import/no-named-as-default-member': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: false,
          },
        ],
      },
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        'import/no-default-export': 'off',
        'jsx-a11y/anchor-is-valid': 'off'
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['src/**/{app,pages}/**/*.{ts,tsx}'],
      rules: {
        'react/function-component-definition': 'off'
      }
    },
    {
      files: ['src/app/**/layout.{ts,tsx}'],
      rules: {
        '@next/next/no-head-element': 'off'
      }
    }
  ],
};
