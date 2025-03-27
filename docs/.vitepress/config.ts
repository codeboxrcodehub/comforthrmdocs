import dotenv from 'dotenv';
//import { defineConfig, HeadConfig } from 'vitepress'

dotenv.config();

const base_url = process.env.VITEPRESS_BASE_URL || 'https://github.com/codeboxrcodehub/comforthrmdocs';

export default {
  sitemap: {
    hostname: base_url
  },
  /*transformHead: ({ pageData }) => {
    const head: HeadConfig[] = [];

    head.push(['meta', { property: 'keywords', content: pageData.frontmatter.keywords }]);


    head.push(['meta', { property: 'og:site_name', content: pageData.frontmatter.site_name }]);
    head.push(['meta', { property: 'og:title', content: pageData.frontmatter.title }]);
    head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }]);
    head.push(['meta', { property: 'og:keywords', content: pageData.frontmatter.keywords }]);
    head.push(['meta', { property: 'og:type', content: pageData.frontmatter.type }]);
    head.push(['meta', { property: 'og:url', content: base_url + pageData.frontmatter.url }]);
    head.push(['meta', { property: 'og:image', content: pageData.frontmatter.image }]);

    head.push(['meta', { property: 'twitter:site', content: pageData.frontmatter.site_name }]);
    head.push(['meta', { property: 'twitter:title', content: pageData.frontmatter.title }]);
    head.push(['meta', { property: 'twitter:description', content: pageData.frontmatter.description }]);
    head.push(['meta', { property: 'twitter:keywords', content: pageData.frontmatter.keywords }]);
    head.push(['meta', { property: 'twitter:card', content: pageData.frontmatter.type }]);
    head.push(['meta', { property: 'twitter:url', content: base_url + pageData.frontmatter.url }]);
    head.push(['meta', { property: 'twitter:image', content: pageData.frontmatter.image }]);

    return head
  },*/
  title: "Comfort HRM",
  description: "An awesome docs template built by me",
  lang: 'en-US',
  // cleanUrls: true,
  //base: '/comforthrmdocs/',
  base: process.env.VITEPRESS_BASE || '/comforthrmdocs/', // Default to '/' if the variable is not set
  // If this is disabled, when building it it will give deadlink errors if your markdown has the wrong links
  ignoreDeadLinks: true,
  
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "",
    search: {
      provider: "local",
    },
    // Navbar Link
    nav: [
      { text: "Resume", link: "/comfortresume/" },
      { text: "Job", link: "/comfortjob/" },
      { text: "Job Application", link: "/comfortjobapp/" },
    ],
    //Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/codeboxrcodehub/comforthrmdocs" },
      { icon: "twitter", link: "https://twitter.com/victorekea" },
      //{ icon: "discord", link: "..." },
      {
        icon: {
          svg: '<svg role="img" width="26.01" height="32" viewBox="0 0 256 315"><path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262"/></svg>',
        },
        link: "https://google.com",
      },
    ],

    sidebar: {
      // Sidebar for `/docs/` section
      '/comfortjob/': [
        {
          text: 'Comfort Job',
          collapsible: false,
        },
        {
          text: 'Getting Started',
          collapsible: true,
          items: [
            { text: 'How to install', link: '/comfortjob/how-to-install' },
            { text: 'How to Translate', link: '/comfortjob/how-to-translate' },
            { text: 'Template Override', link: '/comfortjob/template-override' },
            { text: 'Hooks and Filters', link: '/comfortjob/hooks-and-filters' },
            { text: 'Code Samples', link: '/comfortjob/code-samples' },
          ],
        },
        {
          text: 'Shortcode',
          collapsible: true,
          items: [
            { text: '9 Shortcodes', link: '/comfortjob/shortcodes' },
          ],
        },
        {
          text: 'Widgets',
          collapsible: true,
          items: [
            { text: 'Classic Widgets', link: '/comfortjob/classic-widgets' },
            { text: 'Elementor Widget', link: '/comfortjob/elementor-widgets' },
            { text: 'Gutenberg Blocks', link: '/comfortjob/gutenberg-blocks' },
          ],
        },
        {
          text: 'User Guide',
          collapsible: true,
          items: [
            { text: 'General', link: '/comfortjob/user-guide/general' },
            { text: 'Job Manager', link: '/comfortjob/user-guide/job-manager' },
            { text: 'Settings Manager', link: '/comfortjob/user-guide/settings' },
            { text: 'Company Manager', link: '/comfortjob/user-guide/company-manager' },
            { text: 'Job Category', link: '/comfortjob/user-guide/job-category' },
            { text: 'Job Type', link: '/comfortjob/user-guide/job-type' },
            { text: 'Job Tags', link: '/comfortjob/user-guide/job-tags' },
            { text: 'Tools Manager', link: '/comfortjob/user-guide/tools-manager' },
            { text: 'Emails', link: '/comfortjob/user-guide/emails' },
          ],
        }
      ],

      '/comfortresume/': [
          {
            text: 'Comfort Resume',
            collapsible: false,
          },
          {
            text: 'Getting Started',
            collapsible: true,
            items: [
              { text: 'How to install', link: '/comfortresume/how-to-install' },
              { text: 'How to Translate', link: '/comfortresume/how-to-translate' },
              { text: 'Template Override', link: '/comfortresume/template-override' },
              { text: 'Hooks and Filters', link: '/comfortresume/hooks-and-filters' },
              { text: 'Code Samples', link: '/comfortresume/code-samples' },
            ],
          },
          {
            text: 'Shortcode',
            collapsible: true,
            items: [
              { text: '9 Shortcodes', link: '/comfortresume/shortcodes' },
            ],
          },
          {
            text: 'Widgets',
            collapsible: true,
            items: [
              { text: 'Classic Widgets', link: '/comfortresume/classic-widgets' },
              { text: 'Elementor Widget', link: '/comfortresume/elementor-widgets' },
              { text: 'Gutenberg Blocks', link: '/comfortresume/gutenberg-blocks' },
            ],
          },
          {
            text: 'User Guide',
            collapsible: true,
            items: [
              { text: 'General', link: '/comfortresume/user-guide/general' },
              { text: 'Settings Manager', link: '/comfortresume/user-guide/settings-manager' },
              { text: 'Agency Manager', link: '/comfortresume/user-guide/agency-manager' },
              { text: 'Account Manager', link: '/comfortresume/user-guide/account-manager' },
              { text: 'Category Manager', link: '/comfortresume/user-guide/category-manager' },
              { text: 'Tools Manager', link: '/comfortresume/user-guide/tools-manager' },
            ],
          }
        ],


      '/comfortjobapp/': [
          {
            text: 'Comfort Resume',
            collapsible: false,
          },
          {
            text: 'Getting Started',
            collapsible: true,
            items: [
              { text: 'How to install', link: '/comfortjobapp/how-to-install' },
              { text: 'How to Translate', link: '/comfortjobapp/how-to-translate' },
              { text: 'Template Override', link: '/comfortjobapp/template-override' },
              { text: 'Hooks and Filters', link: '/comfortjobapp/hooks-and-filters' },
              { text: 'Code Samples', link: '/comfortjobapp/code-samples' },
            ],
          },
          {
            text: 'Shortcode',
            collapsible: true,
            items: [
              { text: '9 Shortcodes', link: '/comfortjobapp/shortcodes' },
            ],
          },
          {
            text: 'User Guide',
            collapsible: true,
            items: [
              { text: 'General', link: '/comfortjobapp/user-guide/general' },
              { text: 'Settings Manager', link: '/comfortjobapp/user-guide/settings-manager' },
              { text: 'Agency Manager', link: '/comfortjobapp/user-guide/agency-manager' },
              { text: 'Account Manager', link: '/comfortjobapp/user-guide/account-manager' },
              { text: 'Category Manager', link: '/comfortjobapp/user-guide/category-manager' },
              { text: 'Tools Manager', link: '/comfortjobapp/user-guide/tools-manager' },
            ],
          }
        ],
      // '/comfortjobapp/': [
      //   {
      //     text: 'Comfort Job Application',
      //     collapsible: true,
      //     items: [
      //       { text: 'How to install', link: '/comfortjobapp/how-to-install' },
      //       { text: 'How to Translate', link: '/comfortjobapp/how-to-translate' },
      //       { text: 'Template Override', link: '/comfortjobapp/template-override' },
      //       { text: 'Shortcodes', link: '/comfortjobapp/shortcodes' },
      //       { text: 'Hooks and Filters', link: '/comfortjobapp/hooks-and-filters' },
      //       { text: 'Code Samples', link: '/comfortjobapp/code-samples' },
      //     ],
      //   },
      // ],
     },
    // you can disable the previous and next page here
    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
    editLink: {
      pattern: 'https://github.com/codeboxrcodehub/comforthrmdocs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present Comfort HRM",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
    // Mobile Config only
    returnToTopLabel: 'Go to Top',
    sidebarMenuLabel: 'Menu',
  },
};

