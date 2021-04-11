module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['eslint-plugin-no-inline-styles', 'react', 'prettier'],
  rules: {
    'react-native/no-inline-styles': 2,
  },
  // eslint-disable-line react-native/no-inline-styles
};
