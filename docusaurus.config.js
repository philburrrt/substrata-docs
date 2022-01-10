// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Substrata',
  tagline: 'Open Metaverse Protocol',
  url: 'https://substrata-docs.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/substrata.png',
  organizationName: 'substrata', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/philburrrt/substrata-docs/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/philburrrt/substrata-docs/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Substrata',
        logo: {
          alt: 'My Site Logo',
          src: 'img/substrata.png',
        },
        items: [
          {
            to: 'docs/user/intro',
            label: 'User'
          },
          {
            to: 'docs/developer/intro',
            label: 'Developer'
          },
          {
            to: 'https://substrata.info/about_substrata',
            label: 'Vision'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/hzyYZEcU',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/substratavr',
              },
            ],
          },
        ],
      },
      colorMode: {
        // "light" | "dark"
        defaultMode: "dark",
  
        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: true,},

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
