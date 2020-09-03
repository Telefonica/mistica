module.exports = {
  design: [
    "design/introduction",
    "design/manager",
    {
      'Foundamentals': ['design/colors', 'design/texts', 'design/layouts'],
    },
  ],
  develop: {
    'Getting Started': ['develop/introduction', 'develop/android', 'develop/ios', 'develop/web']
  },
  components:  [
    {
      'Badge': ['components/badge/badge', 'components/badge/non-numeric-badge', 'components/badge/numeric-badge'],
    },
    "components/buttons",
    "components/forms",
    "components/feedbacks",
    "components/headers",
    "components/badges",
    {
      'Webviews': ['components/webviews/webviews', 'components/webviews/webview-ios', 'components/webviews/webview-android'],
    },
  ],
};
