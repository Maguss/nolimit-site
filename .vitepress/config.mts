import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "No Limit Studio",
  description: "有序的混乱是你的超能力",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'No Limit Studio', // 左上角品牌名
    
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'Pathfinder', link: '/pathfinder' }, // 以后可以在这放产品详情
      { text: '关于我们', link: '/about' }
    ],

    // 侧边栏 (写文档时用，暂时留空)
    sidebar: [
      {
        text: 'Pathfinder 文档',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '固件下载', link: '/guide/firmware' }
        ]
      }
    ],

    // 社交链接 (替换成你真实的链接)
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/pathfinder' }
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present No Limit Studio'
    }
  }
})