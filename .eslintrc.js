module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['simple-import-sort'],
  rules: {
    'react-hooks/exhaustive-deps': [1],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
