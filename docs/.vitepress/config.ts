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
  title: "Comfort HRM Documentation",
  description: "Documentation for Comfort HRM plugins",
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
      //{ icon: "twitter", link: "https://twitter.com/victorekea" },
      //{ icon: "discord", link: "..." },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg>',
        },
        link: "https://comforthrm.com",
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
              { text: 'Job Manager', link: '/comfortresume/user-guide/resume-manager' },
              { text: 'Settings Manager', link: '/comfortresume/user-guide/settings' },
              { text: 'Job Category', link: '/comfortresume/user-guide/resume-category' },
              { text: 'Job Tags', link: '/comfortresume/user-guide/resume-tags' },
              { text: 'Tools Manager', link: '/comfortresume/user-guide/tools-manager' },
              { text: 'Emails', link: '/comfortresume/user-guide/emails' },
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

