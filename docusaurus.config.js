// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */

import { themes as prismThemes } from "prism-react-renderer";

const config = {
    title: "PrimisAI",
    tagline: "Welcome to the Future of Hardware Design",
    favicon: "/img/favicon.png",

    url: "https://live-test.primis.ai/",
    baseUrl: "/",

    // GitHub pages deployment config.
    organizationName: "azam-ai", // Usually your GitHub org/user name.
    projectName: "TestPrimis", // Usually your repo name.

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
                        "https://github.com/azam-ai/TestPrimis/edit/main",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                gtag: {
                    trackingID: "G-FJJBYYXDV6",
                    anonymizeIP: false,
                },
                blog: {
                    showReadingTime: true,
                    blogTitle: "Blog",
                    blogDescription: "The Latest and Greatest About PrimisAI and RapidGPT: Pioneering the Future of AI-Driven Hardware Design",
                    readingTime: ({ content, frontMatter, defaultReadingTime }) => defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
                    blogSidebarTitle: 'All posts', // Title of the sidebar
                    blogSidebarCount: 'ALL', // Display all blog posts in the sidebar
                    feedOptions: {
                        type: 'all',
                        description: "The Latest and Greatest About PrimisAI and RapidGPT: Pioneering the Future of AI-Driven Hardware Design",
                        copyright: `Copyright © ${new Date().getFullYear()} PrimisAI.`,
                        createFeedItems: async (params) => {
                            const { blogPosts, defaultCreateFeedItems, ...rest } = params;
                            return defaultCreateFeedItems({
                                // keep only the 10 most recent blog posts in the feed
                                blogPosts: blogPosts.filter((item, index) => index < 10),
                                ...rest,
                            });
                        },
                    },
                }
            }),
        ],
    ],

    themeConfig:
    
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
       
        ({
            metadata: [
                {name: 'keywords', content: 'Hardware Design, Compute Hardware, EDA, Tools, Hardware Design Services, Compute System, System Design, FPGA, Generative AI Chip Design, Verilog'}
              ],
            image: "/img/social-card-primis-ai.jpg",
            navbar: {
                hideOnScroll: true,
                logo: {
                    alt: "PrimisAI",
                    src: "/img/rs-logo-white.svg",
                },
                items: [
                    {
                        to: "/",
                        label: "Home",
                        position: "right",
                        items: [
                            {
                                to: "/#features",
                                label: "Features",
                            },
                            {
                                to: "/#ai-driven-eda",
                                label: "AI-Driven EDA",
                            },
                            {
                                to: "/#pricing",
                                label: "Plans & Pricing",
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
                            {
                                to: "/latest-jobs",
                                label: "Careers",
                            }
                        ],
                    },
                    {
                        to: "/latest-news",
                        label: "Newsroom",
                        position: "right",
                        items: [
                            {
                                to: "/latest-news",
                                label: "News",
                            },
                            {
                                to: "/latest-blog",
                                label: "Blog",
                            },
                            {
                                to: "/events",
                                label: "Events",
                            },
                            {
                                to: "/papers",
                                label: "Papers",
                            },
                            {
                                to: "/articles",
                                label: "Articles",
                            },
                        ],
                    },
                    {
                        to: "https://docs.primis.ai",
                        label: "Docs",
                        position: "right",
                    },
                    {
                        to: "/#contact-us",
                        label: "Contact Us",
                        position: "right",
                    },
                    {
                        href: "https://getrapidgpt.primis.ai",
                        label: "Login",
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
                                            <img src="/img/rs-logo-white.svg" alt="Logo-Footer" width="178" height="45" />
                                        </a>
                                        <p class="info-txt">16185 Los Gatos Blvd, STE 205, Unit 65, <br/> Los Gatos, CA 95032</p>
                                    </div>
                                    <div class="social-media">
                                    <div class="s-holder">
                                        <a href="https://www.facebook.com/profile.php?id=61555923568956" class="fb" rel="noreferrer noopener" aria-label="socail media" target="_blank"></a>
                                        <a href="https://twitter.com/PrimisAI" class="tw" rel="noreferrer noopener" aria-label="socail media" target="_blank"></a>
                                        <a href="https://www.linkedin.com/company/primis-ai" class="lnkd" rel="noreferrer noopener" aria-label="socail media" target="_blank"></a>
                                        <a href="https://discord.com/channels/1202784987074535474/1202784987515068458" class="discord" rel="noreferrer noopener" aria-label="socail media" target="_blank"></a>
                                        <span  class="s-lbl text--right">
                                        <span class="txtlink">Contact Us At: </span>
                                            <a href="mailto:info@primis.ai"> info@primis.ai</a></span>
                                        </div>
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
    plugins: [
        [
            '@docusaurus/plugin-content-blog',
            {
                id: 'newsroom',
                routeBasePath: 'newsroom',
                path: 'newsroom',
                showReadingTime: false,
                blogSidebarCount: 0,
                blogTitle: "Newsroom",
                blogDescription: "Stay informed about our latest AI technologies, breakthroughs, and corporate announcements."
            },
        ],
        [
            '@docusaurus/plugin-content-blog',
            {
                id: 'careers',
                routeBasePath: 'careers',
                path: 'careers',
                showReadingTime: false,
                blogSidebarCount: 0,
                blogTitle: "Careers",
                blogDescription: "Where Innovation Meets Your Career path.",
                feedOptions: {
                    type: 'rss',
                    title: 'Careers RSS Feed',
                    description: 'Stay updated with our latest job postings.',
                    copyright: `Copyright © ${new Date().getFullYear()} PrimisAI`,
                  },
            },
        ],
    ],
};

module.exports = config;
