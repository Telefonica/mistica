module.exports = {
  title: 'Mística Design System',
  tagline: 'Telefónica CX design system',
  url: 'https://telefonica.github.io/',
  baseUrl: '/mistica/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Telefonica', // Usually your GitHub org/user name.
  projectName: 'mistica', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'], // https://v2.docusaurus.io/docs/markdown-features/#interactive-code-editor
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-136245358-7',
      // Optional fields.
      anonymizeIP: false, // Should IPs be anonymized?
    },
    algolia: {
      apiKey: 'e92dcfd99d0dd1cbacfcb33f95865578',
      indexName: 'telefonica_mistica',
    },
    navbar: {
      title: '',
      hideOnScroll: true,
      logo: {
        alt: 'Mística Design System',
        src: 'img/misticaLogo.svg',
        href: 'https://brandfactorytest.frontify.com/d/GLhY6viKNE69',
        target: '_self',
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Design',
        //   position: 'left',
        // },
        {
          to: 'docs/design/introduction',
          activeBasePath: 'docs/design',
          label: 'Design',
          position: 'left',
        },
        {
          to: 'docs/components/introduction',
          activeBasePath: 'docs/components',
          label: 'Components',
          position: 'left',
        },
        {
          to: 'develop',
          label: 'Develop',
          position: 'left',
        },
        // {
        //   href: 'http://www.google.es',  
        //   label: 'Resources',
        //   position: 'left',
        // },
        {
          to: 'docs/contribute/design',
          label: 'Contribute',
          activeBasePath: 'docs/contribute',
          position: 'left',
        },
        {
          href: 'https://mistica-web.now.sh/playroom',  
          label: 'Playroom →',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Design',
          items: [
            {
              label: 'Start using',
              to: 'docs/design/introduction',
            },
            {
              label: 'Foundamentals',
              to: 'docs/design/introduction',
            },
            {
              label: 'Components',
              to: 'docs/design/introduction',
            },
          ],
        },
        {
          title: 'Develop',
          items: [
            {
              label: 'Android',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'iOS',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Web',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: ' ',
          items: [
            {
              label: ' ',
              to: 'blog',
            },
            {
              label: ' ',
              href: 'https://github.com/Telefonica/mistica',
            },
          ],
        },
        {
          title: ' ',
          items: [
            {
              label: ' ',
              to: 'blog',
            },
            {
              label: ' ',
              href: 'https://github.com/Telefonica/mistica',
            },
          ],
        },
      ],
    },
  },
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,700;1,400&display=swap",
    "./src/css/custom.css"
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Telefonica/mistica/edit/master/mistica-site/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Telefonica/mistica/edit/master/mistica-site/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
