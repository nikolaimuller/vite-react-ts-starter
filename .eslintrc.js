// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@mullerstd/eslint-config', '@mullerstd/eslint-config/react'],
  overrides: [
    {
      files: [
        './src/**/*.test.js',
        './src/**/*.test.jsx',
        './src/**/*.test.tsx',
        './src/**/*.spec.js',
        './src/**/*.spec.jsx',
        './src/**/*.spec.tsx',
      ],
      env: {
        jest: true,
      },
      settings: {
        jest: {
          version: 26,
        },
      },
      extends: ['plugin:jest/recommended', 'plugin:testing-library/react'],
      plugins: ['jest', 'testing-library'],
    },
    {
      files: [
        './cypress/*.test.js',
        './cypress/*.test.jsx',
        './cypress/*.test.tsx',
        './cypress/*.spec.js',
        './cypress/*.spec.jsx',
        './cypress/*.spec.tsx',
      ],
      env: {
        'cypress/globals': true,
      },
      extends: ['plugin:cypress/recommended'],
      plugins: ['cypress'],
    },
  ],
}
