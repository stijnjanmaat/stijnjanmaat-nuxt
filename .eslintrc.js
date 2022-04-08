module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'indent': ['error', 2],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline',
    }],
    'eol-last': ['error', 'always'],
    'quotes': ['error', 'single'],
    'semi': 'error',
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 1,
      },
      'multiline': {
        'max': 1,
      },
    }],
    'vue/multi-word-component-names': [0],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/singleline-html-element-content-newline': ['error', {
      'ignores': ['pre', 'textarea', 'a', 'strong', 'span', 'nuxt-link', 's-link', 's-button'],
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      'ignores': ['pre', 'textarea', 'a', 'span', 'nuxt-link', 's-link', 's-button'],
    }],
  },
};
