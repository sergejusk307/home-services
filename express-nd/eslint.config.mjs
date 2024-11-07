import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  {
    ignores: ['node_modules', 'dist', 'public'],
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'error',
      'no-unreachable': 'error',
      'eol-last': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'react/react-in-jsx-scope': 'off',
    },
  },
  eslintConfigPrettier,
];
