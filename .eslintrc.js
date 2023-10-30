module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2017,
    },
    rules: {
        'quotes': ['error', 'single'], // Ignore the "Strings must use singlequote" error
        'no-async-promise-executor': 'off', // Ignore the "Promise executor functions should not be async" error
    },
    globals: {
        module: 'readonly',
    },
};