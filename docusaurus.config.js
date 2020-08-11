module.exports = {
  title: 'Mística Design System',
  tagline: 'Telefónica CX design system',
  url: 'https://Telefonica.github.io/',
  baseUrl: '/mistica/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Telefonica', // Usually your GitHub org/user name.
  projectName: 'mistica', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'], // https://v2.docusaurus.io/docs/markdown-features/#interactive-code-editor
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Mística Design System',
        src: 'img/misticaLogo.svg',
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Design',
        //   position: 'right',
        // },
        {
          to: 'docs/design/introduction',
          activeBasePath: 'docs/design',
          label: 'Design',
          position: 'right',
        },
        {
          to: 'docs/components/buttons',
          activeBasePath: 'docs/components',
          label: 'Components',
          position: 'right',
        },
        {
          to: 'docs/develop/introduction',
          activeBasePath: 'docs/develop',
          label: 'Develop',
          position: 'right',
        },
        {
          href: 'http://www.google.es',  
          label: 'Resources',
          position: 'right',
        },
        {
          href: 'https://mistica-web.now.sh/playroom',  
          label: 'Playroom →',
          position: 'right',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'light',
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
              href: 'https://github.com/facebook/docusaurus',
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
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
    },
  },
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
