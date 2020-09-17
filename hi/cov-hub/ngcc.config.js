module.exports = {
  packages: {
    'amazing-time-picker': {
      ignorableDeepImportMatchers: [
        /amazing-time-picker\//,
      ]
    },
    '@ajsf': {
      ignorableDeepImportMatchers: [
        /core\//,
        /material\//,
      ]
    },
    'lodash': {
      ignorableDeepImportMatchers: [
        /lodash\//,
      ]
    }
  },
};
