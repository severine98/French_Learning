module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['eslint-plugin-no-inline-styles', 'react', 'prettier'],
  rules: {
    'no-inline-styles/no-inline-styles': 1,
  },
};
