// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Your Ultimate HDL",
  tagline: "Pair-Designer",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://github.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/RGPT/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Azam-RS", // Usually your GitHub org/user name.
  projectName: "RGPT", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/RS-Logo.png",
      navbar: {
        //title: 'RapidGPT',
        hideOnScroll: true,
        logo: {
          alt: "rapidsilicon",
          src: "img/RS-white-logo.png",
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Home',
          // },

          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            to: "#home",
            label: "Home",
            position: "right",
          },
          {
            to: "#about",
            label: "About",
            position: "right",
          },
          {
            to: "#features",
            label: "Features",
            position: "right",
          },
          {
            to: "#pricing",
            label: "Pricing",
            position: "right",
          },
          {
            to: "#faq",
            label: "FAQ",
            position: "right",
          },

          // {to: '/home/index', label: 'Home', position: 'left'},
          // {to: '/home/price&plan', label: 'Price and Plan', position: 'left'},
          {
            href: "https://customerportal.rapidsilicon.com/hubfs/RapidGPT/RSAPP_VSCode/Latest/RSAPP-Using_RapidGPT_with_VSCode.pdf",
            label: "Get RapidGPT",
            position: "right",
          },
        ],
      },

      // scripts: [
      //   {
      //     src: "../../static/js/custom", // Update with the correct path to your custom JavaScript file
      //     async: true, // You can use `async` attribute if needed
      //   },
      // ],

      // routes: [
      //   {
      //     path: "src/WhatisRGPT",
      //     component: "src/WhatisRGPT/whatisrgpt.js", // Adjust the path to your Price component
      //     exact: true,
      //   },
      // ],
      // footer: {
      //   style: "dark",
      //   links: [
      //     {
      //       title: "Home",
      //       items: [
      //         {
      //           label: "lorem ipsum",
      //           to: "#home",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Feature",
      //       items: [
      //         {
      //           label: "Lorem Ipsum",
      //           href: "#home",
      //         },
      //         {
      //           label: "Lorem Ipsum",
      //           href: "#home",
      //         },
      //         {
      //           label: "Lorem Ipsum",
      //           href: "#home",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Pricing",
      //       items: [
      //         {
      //           label: "lorem Ipsum",
      //           to: "#home",
      //         },
      //         {
      //           label: "lorem Ipsum",
      //           href: "#home",
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Rapid Silicon – All Rights Reserved..`,
      // },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
};

module.exports = config;
