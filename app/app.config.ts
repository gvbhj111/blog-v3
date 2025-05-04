import type { Nav, NavItem } from '~/types/nav'
import blogConfig from '~~/blog.config'

// 图标查询：https://yesicon.app/ph
// 图标插件：https://marketplace.visualstudio.com/items?itemName=antfu.iconify

export default defineAppConfig({
    // 将 blog.config 中的配置项复制到 appConfig，方便调用
    ...blogConfig,

    article: {
        categories: <{ [category: string]: { icon: string, color?: string } }>{
            经验分享: { icon: 'ph:mouse-bold', color: '#3af' },
            生活: { icon: 'ph:shooting-star-bold', color: '#3ba' },
            学习: { icon: 'fluent-mdl2:learning-tools', color: '#0284c7' },
            未分类: { icon: 'ph:folder-dotted-bold' },
        },
        defaultCategoryIcon: 'ph:folder-bold',
        /** 分类排序方式，键为排序字段，值为显示名称 */
        order: {
            date: '创建日期',
            updated: '更新日期',
            // title: '标题',
        },
        // 需要同时修改上方分类图标对应的键名
        uncategorizedLabel: '未分类',
    },

    content: {
        /** 代码块自动折叠触发行数 */
        codeblockCollapsibleRows: 16,
        /** 文章开头摘要 */
        excerpt: {
            animation: true,
            caret: '_',
        },
    },

    footer: {
        /** 页脚版权信息 */
        copyright: `© ${new Date().getFullYear()} ${blogConfig.author.name}`,
         iconNav: [
            { icon: 'ph:house-bold', text: '个人主页', url: blogConfig.author.homepage },
            { icon: 'ri:qq-line', text: '交流群: 00000000', url: 'https://jq.qq.com/?_wv=1027&k=lQfNSeEd' },
            { icon: 'ph:github-logo-bold', text: 'GitHub: gvbhj111', url: 'https://github.com/gvbhj111' },
            { icon: 'ph:rss-simple-bold', text: 'Atom订阅', url: '/atom.xml' },
            { icon: 'ph:subway-bold', text: '开往', url: 'https://www.travellings.cn/go-by-clouds.html' },
        ] satisfies NavItem[],
        /** 页脚站点地图 */
        nav: [
            {
                title: '探索',
                items: [
                    { icon: 'ph:rss-simple-bold', text: 'Atom订阅', url: '/atom.xml' },
                    { icon: 'ph:subway-bold', text: '开往', url: 'https://www.travellings.cn/go-by-clouds.html' },
                    { icon: 'ph:flying-saucer-bold', text: '异次元旅行', url: 'https://travel.moe/go.html?travel=on' },
                ],
            },
            {
                title: '社交',
                items: [
                    { icon: 'ph:github-logo-bold', text: 'gvbhj111', url: 'https://github.com/gvbhj111' },
                    { icon: 'ri:qq-line', text: 'QQ: 3506828655', url: 'https://qm.qq.com/cgi-bin/qm/qr?k=HO_p4boXfBxrr4DnaOCM4WavkFqpEDoW' },
                    { icon: 'ph:envelope-simple-bold', text: blogConfig.author.email, url: `mailto:${blogConfig.author.email}` },
                    { icon: 'fa6-brands:bilibili',text: 'Bilibili', url: `http://space.bilibili.com/1025980789/` },
                ],
            },
            {
                title: '信息',
                items: [
                    { icon: 'simple-icons:nuxtdotjs', text: 'Nuxt开源博客主题', url: 'https://github.com/L33Z22L11/blog-v3' },
                    { icon: 'ph:swatches-bold', text: '主题和组件文档', url: 'https://blog.zhilu.cyou/theme' },
                    { icon: 'ph:certificate-bold', text: '萌ICP备20252027号', url: 'https://icp.gov.moe/?keyword=20252027' },
                ],
            },
        ] satisfies Nav,
        /** 页脚版权信息底部的其他信息 */
        message: '',
    },

     /** 左侧栏顶部 Logo */
    header: {
        logo: 'https://img.picui.cn/free/2025/05/01/6813227e2fca3.jpg',
        /** 展示标题文本，否则展示纯 Logo */
        showTitle: true,
        subtitle: blogConfig.subtitle,
        emojiTail: ['👻', '😋', '🛠', '🐟', '📖'],
    },


    pagination: {
        perPage: 10,
        /** 默认排序方式，需要是 this.article.order 中的键名 */
        sortOrder: 'date' as const,
        /** 允许（普通/预览/归档）文章列表正序，开启后排序方式左侧图标可切换顺序 */
        allowAscending: false,
    },

    /** 左侧栏导航 */
    nav: [
        {
            title: '',
            items: [
                { icon: 'ph:files-bold', text: '文章', url: 'https://lingwang.netlify.app/' },
                { icon: 'ph:link-bold', text: '友链', url: '/link' },
                { icon: 'ph:archive-bold', text: '归档', url: '/archive' },
            ],
        },
    ] ,

    
    stats: {
        /** 归档页面每年标题对应的年龄 */
        birthYear: 2008,
        /** blog-stats widget 的预置文本 */
        wordCount: '约10万不到',
    },

    themes: {
        light: {
            icon: 'ph:sun-bold',
            tip: '浅色模式',
        },
        system: {
            icon: 'ph:monitor-bold',
            tip: '跟随系统',
        },
        dark: {
            icon: 'ph:moon-bold',
            tip: '深色模式',
        },
    },
})
