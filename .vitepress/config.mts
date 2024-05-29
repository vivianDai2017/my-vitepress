import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "开发文档",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '文档', link: '/src/npm' }
    ],

    sidebar: [
        {
            text: '名称',
            items: [
                { text: 'npm', link: '/src/npm' },
                { text: 'Niginx', link: '/src/Nginx' },
            ]
        },
        {
            text: 'Examples',
            items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
            ]
        },
        {
            text: 'test',
            items: [
            { text: 'Markdown Exp test', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
            ]
        }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
