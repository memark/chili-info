module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // Should always be last
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'warn',
  },
};
