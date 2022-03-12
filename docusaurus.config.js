// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Substrata',
  tagline: 'Community Resources and Documentation',
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
          sidebarPath: require.resolve('./sidebars/sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/philburrrt/substrata-docs/blob/main',
          routeBasePath: '/',
          disableVersioning: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "developer",
        path: "./docs/developer",
        routeBasePath: "developer/",
        sidebarPath: require.resolve("./sidebars/dev-sidebar.js"),
        disableVersioning: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "contributing",
        path: "./docs/contributing",
        routeBasePath: "contributing/",
        sidebarPath: require.resolve("./sidebars/contributing-sidebar.js"),
        disableVersioning: false,
      },
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
            to: '/user/intro',
            label: 'User'
          },
          {
            to: '/developer/intro',
            label: 'Developer'
          },
          {
            to: '/contributing/editing-documentation',
            label: 'Contributing'
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
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: '🌙',
          lightIcon: '☀️',
        },
      },


      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
