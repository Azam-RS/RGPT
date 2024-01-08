// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */

import { themes as prismThemes } from "prism-react-renderer";

const config = {
    tagline: "RapidGPT: Your Ultimate HDL Pair-Designer",
    favicon: "/img/favicon.png",

    url: "https://primis.ai/",
    baseUrl: "/",

    // GitHub pages deployment config.
    organizationName: "PrimisAI", // Usually your GitHub org/user name.
    projectName: "rapidgpt-webapp-frontend", // Usually your repo name.

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
                        "https://github.com/PrimisAI/rapidgpt-webapp-frontend/edit/main",
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
                        to: "/",
                        label: "Home",
                        position: "right",
                        items: [
                            {
                                to: "/#ai-driven-eda",
                                label: "AI-Driven EDA",
                            },
                            {
                                to: "/#features",
                                label: "Features",
                            },
                            {
                                to: "/#pricing",
                                label: "Plan & Pricing",
                            },
                        ],
                    },
                    {
                        label: "About Us",
                        position: "right",
                        to: "about-us",
                        items: [
                            {
                                to: "about-us",
                                label: "About PrimisAI",
                            },
                            {
                                to: "about-us/team",
                                label: "Team",
                            },
                            {
                                to: "about-us/our-userbase",
                                label: "Our Userbase",
                            },
                        ],
                    },
                    // {
                    //     to: "blog",
                    //     label: "Blog",
                    //     position: "right",
                    // },
                    {
                        to: "/docs/getting-started",
                        label: "Docs",
                        position: "right",
                    },
                    {
                        href: "https://getrapidgpt.primis.ai",
                        label: "Join for Free",
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
                      <a href="/" rel="noreferrer noopener" aria-label="Logo-Footer">
                        <img src="/img/RS-white-logo.svg" alt="Logo-Footer" width="178" height="45" />
                      </a>
                      </div>
                 </div>
                    `,
                    },
                    {
                        label: "Privacy Policy",
                        to: "/docs/legal/privacy-policy",
                        title: "Privacy Policy",
                    },
                    {
                        label: "Cookie Policy",
                        to: "/docs/legal/cookie-policy",
                        title: "Cookie Policy",
                    },
                    {
                        label: "Terms and Conditions",
                        to: "/docs/legal/terms-and-conditions",
                        title: "Terms and Conditions",
                    },
                    {
                        label: "User Agreement",
                        to: "/docs/legal/user-agreement",
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
