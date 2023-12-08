// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PrimisAI",
  tagline: "RapidGPT: Your Ultimate HDL Pair-Designer",
  favicon: "/img/favicon.png",

  url: "https://Azam-RS.github.io/",
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "Azam-RS", // Usually your GitHub org/user name.
  projectName: "RGPT", // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
          editUrl:
            "https://github.com/Azam-RS/RGPT/edit/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-FJJBYYXDV6",
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "/img/social-card-primis-ai.jpg",
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: "PrimisAI",
          src: "/img/RS-green-logo.svg",
        },

        items: [
          {
            to: "/aboutPrimis/aboutPrimis",
            label: "About Us",
            position: "right",
            items: [
              {
                to: "/aboutPrimis/aboutPrimis",
                label: "About PrimisAI",
              },
              {
                to: "/Team/team",
                label: "Team",
              },
              {
                to: "/RegisterdUser/registerdUser",
                label: "Registerd User",
              },
            ],
          },

          {
            to: "/News/news",
            label: "News",
            position: "right",
          },
          {
            to: "/docs/getting-started",
            label: "Documents",
            position: "right",
          },
          {
            href: "https://rgptstaging.rapidsilicon.com/",
            label: "Try Free",
            position: "right",
            className: "btn-try",
          },
        ],
      },
      prism: {
        additionalLanguages: ["verilog"],
        theme: require("prism-react-renderer/themes/nightOwl"),
      },
    }),
  scripts: [
    {
      tagName: "script",
      src: "/js/custom.js",
      async: true,
    },
  ],
};

module.exports = config;
