
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/mistica/',
  component: ComponentCreator('/mistica/','d78'),
  exact: true,
},
{
  path: '/mistica/__docusaurus/debug',
  component: ComponentCreator('/mistica/__docusaurus/debug','ed8'),
  exact: true,
},
{
  path: '/mistica/blog',
  component: ComponentCreator('/mistica/blog','9c7'),
  exact: true,
},
{
  path: '/mistica/blog/hello-world',
  component: ComponentCreator('/mistica/blog/hello-world','8bc'),
  exact: true,
},
{
  path: '/mistica/blog/hola',
  component: ComponentCreator('/mistica/blog/hola','4f3'),
  exact: true,
},
{
  path: '/mistica/blog/tags',
  component: ComponentCreator('/mistica/blog/tags','50e'),
  exact: true,
},
{
  path: '/mistica/blog/tags/docusaurus',
  component: ComponentCreator('/mistica/blog/tags/docusaurus','ffc'),
  exact: true,
},
{
  path: '/mistica/blog/tags/facebook',
  component: ComponentCreator('/mistica/blog/tags/facebook','8b2'),
  exact: true,
},
{
  path: '/mistica/blog/tags/hello',
  component: ComponentCreator('/mistica/blog/tags/hello','5ae'),
  exact: true,
},
{
  path: '/mistica/blog/tags/hola',
  component: ComponentCreator('/mistica/blog/tags/hola','948'),
  exact: true,
},
{
  path: '/mistica/blog/welcome',
  component: ComponentCreator('/mistica/blog/welcome','935'),
  exact: true,
},
{
  path: '/mistica/docs',
  component: ComponentCreator('/mistica/docs','53a'),
  
  routes: [
{
  path: '/mistica/docs/components/buttons',
  component: ComponentCreator('/mistica/docs/components/buttons','5a5'),
  exact: true,
},
{
  path: '/mistica/docs/components/forms',
  component: ComponentCreator('/mistica/docs/components/forms','870'),
  exact: true,
},
{
  path: '/mistica/docs/design/colors',
  component: ComponentCreator('/mistica/docs/design/colors','781'),
  exact: true,
},
{
  path: '/mistica/docs/design/introduction',
  component: ComponentCreator('/mistica/docs/design/introduction','74e'),
  exact: true,
},
{
  path: '/mistica/docs/design/layouts',
  component: ComponentCreator('/mistica/docs/design/layouts','1de'),
  exact: true,
},
{
  path: '/mistica/docs/design/manager',
  component: ComponentCreator('/mistica/docs/design/manager','eff'),
  exact: true,
},
{
  path: '/mistica/docs/design/texts',
  component: ComponentCreator('/mistica/docs/design/texts','940'),
  exact: true,
},
{
  path: '/mistica/docs/develop/android',
  component: ComponentCreator('/mistica/docs/develop/android','570'),
  exact: true,
},
{
  path: '/mistica/docs/develop/introduction',
  component: ComponentCreator('/mistica/docs/develop/introduction','bca'),
  exact: true,
},
{
  path: '/mistica/docs/develop/ios',
  component: ComponentCreator('/mistica/docs/develop/ios','9a6'),
  exact: true,
},
{
  path: '/mistica/docs/develop/mdx',
  component: ComponentCreator('/mistica/docs/develop/mdx','ca0'),
  exact: true,
},
{
  path: '/mistica/docs/develop/web',
  component: ComponentCreator('/mistica/docs/develop/web','4d2'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
