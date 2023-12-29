// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */

import { themes as prismThemes } from "prism-react-renderer";

const config = {
  title: "RGPT",
  tagline: "RapidGPT: Your Ultimate HDL Pair-Designer",
  favicon: "/img/favicon.png",

  url: "https://Azam-RS.github.io/",
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "azam-ai", // Usually your GitHub org/user name.
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
                label: "Our Userbase",
              },
            ],
          },
          {
            to: "/News/news",
            label: "News",
            position: "right",
          },
          {
            to: "blog",
            label: "Blog",
            position: "right",
          },
          {
            to: "/docs/getting-started",
            label: "Docs",
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
        theme: prismThemes.nightOwl,
      },
      footer: {
        links: [
          {
            html: `<div class="f-logo-holder">
            <div class="footer-logo">
                      <a href="/" target="_blank" rel="noreferrer noopener" aria-label="Logo-Footer">
                        <img src="/img/RS-white-logo.svg" alt="Logo-Footer" width="178" height="45" />
                      </a>
                      </div>
                 </div>
                    `,
          },
          {
            label: "Privacy Policy",
            to: "/docs/legal/privacy-policy",
            target: "_blank",
            title: "Privacy Policy",
          },
          {
            label: "Cookie Policy",
            to: "/docs/legal/cookie-policy",
            target: "_blank",
            title: "Cookie Policy",
          },
          {
            label: "Terms and Conditions",
            to: "/docs/legal/terms-and-conditions",
            target: "_blank",
            title: "Terms and Conditions",
          },
          {
            label: "User Agreement",
            to: "/docs/legal/user-agreement",
            target: "_blank",
            title: "User Agreement",
          },
        ],
        copyright: `© ${new Date().getFullYear()} PrimisAI – All Rights Reserved.`,
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
