module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  extends: [
    '@antfu',
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  plugins: [
    'vue',
  ],

  // add your custom rules here
  // it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    'no-sequences': 'off',
    'vue/no-mutating-props': 'off',
    'object-property-newline': 'off',
    'object-curly-newline': 'off',
    '@typescript-eslint/brace-style': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
  },
}
