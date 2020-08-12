export default {
  "title": "Mística Design System",
  "tagline": "Telefónica CX design system",
  "url": "https://telefonica.github.io/",
  "baseUrl": "/mistica/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "Telefonica",
  "projectName": "mistica",
  "themes": [
    "@docusaurus/theme-live-codeblock"
  ],
  "themeConfig": {
    "navbar": {
      "title": "",
      "logo": {
        "alt": "Mística Design System",
        "src": "img/misticaLogo.svg"
      },
      "items": [
        {
          "to": "docs/design/introduction",
          "activeBasePath": "docs/design",
          "label": "Design",
          "position": "right"
        },
        {
          "to": "docs/components/buttons",
          "activeBasePath": "docs/components",
          "label": "Components",
          "position": "right"
        },
        {
          "to": "docs/develop/introduction",
          "activeBasePath": "docs/develop",
          "label": "Develop",
          "position": "right"
        },
        {
          "href": "http://www.google.es",
          "label": "Resources",
          "position": "right"
        },
        {
          "href": "https://mistica-web.now.sh/playroom",
          "label": "Playroom →",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "light",
      "links": [
        {
          "title": "Design",
          "items": [
            {
              "label": "Start using",
              "to": "docs/design/introduction"
            },
            {
              "label": "Foundamentals",
              "to": "docs/design/introduction"
            },
            {
              "label": "Components",
              "to": "docs/design/introduction"
            }
          ]
        },
        {
          "title": "Develop",
          "items": [
            {
              "label": "Android",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "iOS",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Web",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": " ",
          "items": [
            {
              "label": " ",
              "to": "blog"
            },
            {
              "label": " ",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        },
        {
          "title": " ",
          "items": [
            {
              "label": " ",
              "to": "blog"
            },
            {
              "label": " ",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        }
      ]
    },
    "googleAnalytics": {
      "trackingID": "UA-136245358-7",
      "anonymizeIP": false
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "doc1",
          "sidebarPath": "/Users/yayo/GitHub/mistica/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/yayo/GitHub/mistica/src/css/custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": []
};