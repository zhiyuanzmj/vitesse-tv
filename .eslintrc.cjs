module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  root: true,
  'extends': [
    'eslint:recommended',
    'plugin:vue/strongly-recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 13
  },
  plugins: [
    'vue'
  ],
  rules: {
    'space-before-function-paren': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-parsing-error': 0,
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 80
      },
      multiline: {
        max: 10
      }
    }]
  }
}
