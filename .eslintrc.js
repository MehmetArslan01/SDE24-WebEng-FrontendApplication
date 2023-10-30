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
        indent: ['error', 8], 
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-undef': 'off', 
    },
    globals: {
        module: 'readonly',
    },
};
