module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    requireConfigFile: false,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['import', 'jsx-a11y'],
  rules: {
    'react/display-name': ['off', { ignoreTranspilerName: false }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-else-return': 0,
    'prefer-object-spread': 0,
    'react/destructuring-assignment': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'func-names': 0,
    'react/require-default-props': 0,
    'no-unused-vars': 1,
    'no-console': 0,
    'react/react-in-jsx-scope': 0,
    'react/forbid-prop-types': 0,
    'no-restricted-exports': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'no-shadow': 0,
    'react/no-array-index-key': 0,
    'no-debugger': 0,
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    'no-return-assign': 0,
    'arrow-body-style': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'import/no-named-as-default-member': 0,
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent', 'index'],
          'object',
        ],
        pathGroups: [
          {
            pattern: '@**/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'none',
            ignoreRestSiblings: true,
          },
        ],
        // ... will be included
      },
    },
  ],
};
