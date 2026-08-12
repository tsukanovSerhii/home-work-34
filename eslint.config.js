const eslintJs = require('@eslint/js');

module.exports = [
  eslintJs.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly',
        setTimeout: 'readonly',
        console: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'off'
    },
  },
];
