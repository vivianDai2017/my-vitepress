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
                { text: 'pnpm', link: '/src/pnpm' },
                { text: 'Niginx', link: '/src/Nginx' },
                { text: '部署', link: '/src/部署' },
                { text: 'jenkins', link: '/src/jenkins' },
                { text: 'docker', link: '/src/docker' },
                { text: '公司文献库', link: '/src/公司文献库' },
                { text: '其他', link: '/src/其他' },
                { text: '待归档', link: '/src/待归档' },
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
