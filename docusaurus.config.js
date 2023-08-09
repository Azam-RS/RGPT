// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion



/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Your Ultimate HDL",
    tagline: "Pair-Designer",
    favicon: "/img/favicon.png",

    // Set the production url of your site here
    url: "https://Azam-RS.github.io/",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "RGPT/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Azam-RS', // Usually your GitHub org/user name.
    projectName: 'RGPT', // Usually your repo name.

    trailingSlash: false,

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
                    editUrl: "https://github.com/RapidSilicon/RGPT/edit/main",
                },
                blog: {
                    showReadingTime: true,
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
            image: "/img/RS-Logo.png",
            navbar: {
                //title: 'RapidGPT',
                hideOnScroll: true,
                logo: {
                    alt: "rapidsilicon",
                    src: "/img/RS-white-logo.png",
                },
                items: [
                    {
                        to: "/#about",
                        label: "About",
                        position: "right",
                    },
                    {
                        to: "/#features",
                        label: "Features",
                        position: "right",
                    },
                    {
                        to: "/#pricing",
                        label: "Pricing",
                        position: "right",
                    },
                    {
                        to: "/#faq",
                        label: "FAQ",
                        position: "right",
                    },
                    {
                        to: "/#resources",
                        label: "Resources",
                        position: "right",
                    },
                ],
            },
            prism: {
                additionalLanguages: ['verilog'],
            },
        }),
};

module.exports = config;
