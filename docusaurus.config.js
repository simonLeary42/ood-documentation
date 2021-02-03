/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'Open OnDemand',
  tagline: 'Supercomputing. Seamlessly. Open, Interactive HPC Via the Web',
  url: 'https://open-ondemand-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Open OnDemand', // Usually your GitHub org/user name.
  projectName: 'openOnDemandTemplate', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Open OnDemand',
      logo: {
        alt: 'My Project Logo',
        src: 'img/ood_sign.jpg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docusaurus',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/OSC/Open-OnDemand',
          label: 'GitHub',
          position: 'left',
        },
        {
          href: 'https://osc.github.io/ood-documentation/latest/',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://discourse.osc.edu/c/open-ondemand',
          label: 'Discourse',
          position: 'left',
        },
        {
          href: 'https://figshare.com/authors/OH-TECH_Consortium/5131358',
          label: 'Figshares',
          position: 'left',
        },
        {
          href: 'https://twitter.com/open_ondemand',
          label: 'Twitter',
          position: 'left',
        },
        {
          href: 'https://lists.osu.edu/mailman/listinfo/ood-users',
          label: 'Join The News List',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
        {
          title: 'Legal',
          // Please do not remove the privacy and terms, it's a legal requirement.
          items: [
            {
              label: 'Privacy',
              href: 'https://opensource.facebook.com/legal/privacy/',
            },
            {
              label: 'Terms',
              href: 'https://opensource.facebook.com/legal/terms/',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
        href: 'https://opensource.facebook.com',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} OOD Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
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
