module.exports = {
  design: [
    "design/introduction",
    "design/start-using",
    "design/icons",
    {
      'Foundamentals': [
        {
          type: 'category',
          label: 'Color',
          items: [
            'design/color/movistar-palette',
            'design/color/vivo-palette',
            'design/color/o2-palette',
            'design/color/classic-o2-palette',
            'design/color/constants',
          ],
      }, 
        'design/typography',
        'design/layout'
      ],
    },
    {
    'Navigation': [
      {
        type: 'category',
        label: 'Webviews',
        items: [
          'design/webviews/introduction',
            {
              type: 'category',
              label: 'Android',
              items: [
              {
                type: 'category',
                label: 'Internal',
                items: [
                  'design/webviews/android/internal/flow',
                  'design/webviews/android/internal/modal',
                ],
            },
            'design/webviews/android/browser',
            'design/webviews/android/configuration-by-default',
          ],
          },
          {
            type: 'category',
            label: 'iOS',
            items: [
            {
              type: 'category',
              label: 'Internal',
              items: [
                'design/webviews/ios/internal/flow',
                'design/webviews/ios/internal/modal',
            ],
            },
              'design/webviews/ios/browser',
              'design/webviews/ios/configuration-by-default',
            ],
            },
          ],
          
      },
    ],
    },
  ],
  components:  [
    "components/introduction",
    {
      'Badge': [
              'components/badge/usage',
              'components/badge/non-numeric-badge',
              'components/badge/numeric-badge'
              ],
    },
    {
      'Buttons': ['components/buttons/usage',
                  'components/buttons/anatomy',
                  'components/buttons/hierarchy',
                  'components/buttons/positioning',
                  {
                    type: 'category',
                    label: 'Typology',
                    items: [
                      'components/buttons/tipology/primary-button',
                      'components/buttons/tipology/secondary-button',
                      'components/buttons/tipology/link-button',
                      'components/buttons/tipology/icon-button',
                      'components/buttons/tipology/contextual-button',
                      'components/buttons/tipology/danger-button',
                      'components/buttons/tipology/variations',
                    ],
                  },
                  'components/buttons/interaction',
                  'components/buttons/accessibility'
                ],
    },
    "components/controls/controls",
    {
    'Feedbacks': [
      'components/feedbacks/usage',
      {
        type: 'category',
        label: 'Feedbacks scenarios',
        items: [
          'components/feedbacks/feedback-scenarios/success-scenario',
          'components/feedbacks/feedback-scenarios/error-scenario',
          'components/feedbacks/feedback-scenarios/system-message',
          'components/feedbacks/feedback-scenarios/informative-message',
          'components/feedbacks/feedback-scenarios/contextual-guide',
          'components/feedbacks/feedback-scenarios/action-requirement',
          'components/feedbacks/feedback-scenarios/action-confirmation',
          'components/feedbacks/feedback-scenarios/loading-indicator',
          'components/feedbacks/feedback-scenarios/form-validation',
        ],
      },
      {
        type: 'category',
        label: 'Android',
        items: [
          'components/feedbacks/android/dialog',
          'components/feedbacks/android/snackbar',
          'components/feedbacks/android/banner',
          'components/feedbacks/android/tooltip',
          'components/feedbacks/android/spinner',
          'components/feedbacks/android/skeleton',
          'components/feedbacks/android/progress-bar',
          'components/feedbacks/android/success-screen',
          'components/feedbacks/android/error-screen',
          'components/feedbacks/android/info-screen',
          'components/feedbacks/android/load-error',
          'components/feedbacks/android/form',
        ],
      },
      {
        type: 'category',
        label: 'iOS',
        items: [
          'components/feedbacks/ios/alert',
          'components/feedbacks/ios/crouton',
          'components/feedbacks/ios/action-sheet',
          'components/feedbacks/ios/banner',
          'components/feedbacks/ios/tooltip',
          'components/feedbacks/ios/spinner',
          'components/feedbacks/ios/skeleton',
          'components/feedbacks/ios/progress-bar',
          'components/feedbacks/ios/success-screen',
          'components/feedbacks/ios/error-screen',
          'components/feedbacks/ios/info-screen',
          'components/feedbacks/ios/load-error',
          'components/feedbacks/ios/form',
        ],
      },
      {
        type: 'category',
        label: 'Web',
        items: [
          'components/feedbacks/web/dialog',
          'components/feedbacks/web/snackbar',
          'components/feedbacks/web/banner',
          'components/feedbacks/web/tooltip',
          'components/feedbacks/web/spinner',
          'components/feedbacks/web/skeleton',
          'components/feedbacks/web/success-screen',
          'components/feedbacks/web/error-screen',
          'components/feedbacks/web/info-screen',
          'components/feedbacks/web/load-error',
          'components/feedbacks/web/form',
        ],
      },
      ],
    },
    {
      'Forms':   ['components/forms/usage',
                  'components/forms/structure',
                  'components/forms/behavior',
                  {
                    type: 'category',
                    label: 'Basic components',
                    items: [
                      'components/forms/basic-components/fields',
                      'components/forms/basic-components/progress-indicators',
                      'components/forms/basic-components/controls',
                      'components/forms/basic-components/actions',
                    ],
                  },
                ],
    },
    {
      'Headers': [
                'components/headers/usage',
                'components/headers/structure',
              ],
    },
    {
      'Notifications': [
        'components/notifications/introduction',        
        'components/notifications/in-app-messages',
              ],
    },
    {
      'Texts': [
                'components/texts/section-title',
              ],
    },
  ],
  contribute: [
    'contribute/design', 
    'contribute/develop',
  ],
};
