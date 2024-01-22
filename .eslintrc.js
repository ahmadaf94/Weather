module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  plugins: ['detox', '@tanstack/query'],
  overrides: [
    {
      files: ['e2e/*.test.js'],
      env: {
        'detox/detox': true,
      },
    },
  ],
};
