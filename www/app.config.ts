export default defineAppConfig({
  comfortHrmDocs: {
    site: {
      name: 'Comfort HRM Documentation',
      description: 'Comfort HRM Documentation for Comfort HRM, Comfort Resume, Comfort Job, Comfort Job Application.',
      ogImage: '/seo_card.png',
      ogImageComponent: 'ComfortHrmDocs',
      ogImageColor: 'light',
      umami: {
        enable: false,
        src: 'https://cloud.umami.is/script.js',
        dataWebsiteId: 'd793fbf3-461e-4e26-9ec9-4e9141df96ee',
      },
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    banner: {
      enable: false,
      showClose: true,
      content: 'Welcome to **Comfort HRM Docs**',
      to: '#',
      target: '_blank',
      border: true,
    },
    header: {
      title: 'Comfort HRM Documentation',
      showTitle: true,
      logo: {
        light: '/logo.png',
        dark: '/logo.png',
      },
      border: false,
      darkModeToggle: true,
      languageSwitcher: {
        enable: true,
        triggerType: 'icon',
        dropdownType: 'select',
      },
      nav: [
        {
          title: 'Resume',
          to: '/comfortresume',
          target: '_self',
          showLinkIcon: false,
        },
        {
          title: 'Job',
          to: '/comfortjob',
          target: '_self',
          showLinkIcon: false,
        },
        {
          title: 'Job Application',
          to: '/comfortjobapp',
          target: '_self',
          showLinkIcon: false,
        },
      ],
      links: [
        {
          icon: 'lucide:github',
          to: 'https://github.com/codeboxrcodehub/comforthrmdocs',
          target: '_blank',
        },
      ],
    },
    aside: {
      useLevel: true,
      levelStyle: 'aside',
      collapse: false,
      collapseLevel: 1,
      folderStyle: 'default',
    },
    // Add sidebar configuration directly here
    sidebar: {

      '/comfortresume/': [
        {
          text: 'Comfort Resume',
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
          text: 'User Guide',
          collapsible: true,
          items: [
            { text: 'General', link: '/comfortresume/user-guide/general' },
            { text: 'Resume Manager', link: '/comfortresume/user-guide/resume-manager' },
            { text: 'Settings Manager', link: '/comfortresume/user-guide/settings' },
            { text: 'Resume Category', link: '/comfortresume/user-guide/resume-category' },
            { text: 'Resume Tags', link: '/comfortresume/user-guide/resume-tags' },
            { text: 'Tools Manager', link: '/comfortresume/user-guide/tools-manager' },
            { text: 'Emails', link: '/comfortresume/user-guide/emails' },
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
        }
      ],

      '/comfortjob/': [
        {
          text: 'Comfort Job',
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
        }
      ],

      '/comfortjobapp/': [
        {
          text: 'Comfort Job Application',
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
          text: 'User Guide',
          collapsible: true,
          items: [
            { text: 'General', link: '/comfortjobapp/user-guide/general' },
            { text: 'Application Manager', link: '/comfortjobapp/user-guide/application-manager' },
            { text: 'Settings Manager', link: '/comfortjobapp/user-guide/settings' },
            { text: 'Tools Manager', link: '/comfortjobapp/user-guide/tools-manager' },
            { text: 'Emails', link: '/comfortjobapp/user-guide/emails' },
          ],
        }
      ],

    },
    main: {
      padded: true,
      breadCrumb: true,
      showTitle: false, // true to show title, description from page
      codeCopyToast: false,
      codeCopyIcon: 'lucide:clipboard',
      editLink: {
        enable: true,
        pattern: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt/edit/main/www/content/:path',
        text: 'Edit this page',
        icon: 'lucide:square-pen',
        placement: ['docsFooter'],
      },
      backToTop: true,
      codeIcon: {
        'package.json': 'vscode-icons:file-type-node',
        'tsconfig.json': 'vscode-icons:file-type-tsconfig',
        '.npmrc': 'vscode-icons:file-type-npm',
        '.editorconfig': 'vscode-icons:file-type-editorconfig',
        '.eslintrc': 'vscode-icons:file-type-eslint',
        '.eslintrc.cjs': 'vscode-icons:file-type-eslint',
        '.eslintignore': 'vscode-icons:file-type-eslint',
        'eslint.config.js': 'vscode-icons:file-type-eslint',
        'eslint.config.mjs': 'vscode-icons:file-type-eslint',
        'eslint.config.cjs': 'vscode-icons:file-type-eslint',
        '.gitignore': 'vscode-icons:file-type-git',
        'yarn.lock': 'vscode-icons:file-type-yarn',
        '.env': 'vscode-icons:file-type-dotenv',
        '.env.example': 'vscode-icons:file-type-dotenv',
        '.vscode/settings.json': 'vscode-icons:file-type-vscode',
        'nuxt': 'vscode-icons:file-type-nuxt',
        '.nuxtrc': 'vscode-icons:file-type-nuxt',
        '.nuxtignore': 'vscode-icons:file-type-nuxt',
        'nuxt.config.js': 'vscode-icons:file-type-nuxt',
        'nuxt.config.ts': 'vscode-icons:file-type-nuxt',
        'nuxt.schema.ts': 'vscode-icons:file-type-nuxt',
        'tailwind.config.js': 'vscode-icons:file-type-tailwind',
        'tailwind.config.ts': 'vscode-icons:file-type-tailwind',
        'vue': 'vscode-icons:file-type-vue',
        'ts': 'vscode-icons:file-type-typescript',
        'tsx': 'vscode-icons:file-type-typescript',
        'mjs': 'vscode-icons:file-type-js',
        'cjs': 'vscode-icons:file-type-js',
        'js': 'vscode-icons:file-type-js',
        'jsx': 'vscode-icons:file-type-js',
        'md': 'vscode-icons:file-type-markdown',
        'mdc': 'vscode-icons:file-type-markdown',
        'css': 'vscode-icons:file-type-css',
        'py': 'vscode-icons:file-type-python',
        'npm': 'vscode-icons:file-type-npm',
        'pnpm': 'vscode-icons:file-type-pnpm',
        'npx': 'vscode-icons:file-type-npm',
        'yarn': 'vscode-icons:file-type-yarn',
        'bun': 'vscode-icons:file-type-bun',
        'yml': 'vscode-icons:file-type-light-yaml',
        'json': 'vscode-icons:file-type-json',
        'terminal': 'lucide:terminal',
      },
    },
    footer: {
      border: true,
      credits: 'FOOTER_CREDIT',
      links: [
        /* {
          icon: 'lucide:heart',
          title: 'Sponsor Me',
          to: 'https://ko-fi.com/ztl_uwu',
          target: '_blank',
        }, */
        {
          icon: 'lucide:twitter',
          to: 'https://x.com/comforthrmwp',
          target: '_blank',
        },
        {
          icon: 'lucide:facebook',
          to: 'https://www.facebook.com/comforthrm/',
          target: '_blank',
        },
        {
          icon: 'lucide:youtube',
          to: 'https://www.youtube.com/@comforthrm',
          target: '_blank',
        },
        /* {
          icon: 'lucide-lab:butterfly',
          to: 'https://bsky.app/profile/ztl-uwu.bsky.social',
          target: '_blank',
        }, */
        /* {
          icon: 'simple-icons:discord',
          to: 'https://discord.gg/9P5HzAz8DT',
          target: '_blank',
        }, */
        {
          icon: 'lucide:github',
          to: 'https://github.com/codeboxrcodehub/comforthrmdocs',
          target: '_blank',
        },
      ],
    },
    toc: {
      enable: true,
      enableInMobile: true,
      enableInHomepage: false,
      title: 'On this page',
      links: [
        {
          title: 'Star on GitHub',
          icon: 'lucide:star',
          to: 'https://github.com/codeboxrcodehub/comforthrmdocs',
          target: '_blank',
          showLinkIcon: true,
        },
        {
          title: 'Create Issues',
          icon: 'lucide:circle-dot',
          to: 'https://github.com/codeboxrcodehub/comforthrmdocs',
          target: '_blank',
          showLinkIcon: true,
        },
      ],
      iconLinks: [
        {
          icon: 'lucide:twitter',
          to: 'https://x.com/comforthrmwp',
          target: '_blank',
        },
        {
          icon: 'lucide:facebook',
          to: 'https://www.facebook.com/comforthrm/',
          target: '_blank',
        },
        {
          icon: 'lucide:youtube',
          to: 'https://www.youtube.com/@comforthrm',
          target: '_blank',
        },
        {
          icon: 'lucide:github',
          to: 'https://github.com/codeboxrcodehub/comforthrmdocs',
          target: '_blank',
        },
      ],
    },
    search: {
      enable: true,
      inAside: false,
      style: 'input',
    },
    data: {},
  },
});
