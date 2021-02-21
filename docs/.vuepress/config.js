module.exports = {
    title: '前端梦想家',
    dest: 'public',
    description: '人生不能没有梦，有梦就要努力！',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/.vuepress/public/index.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间,
        nav:[
            { text: '博客', link: '/accumulate/' }, // 内部链接 以docs为根目录
            // { text: '前端算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
            // 下拉列表
            {
                text: 'GitHub',
                items: [
                    { text: 'GitHub地址', link: 'https://github.com/FrontDream' },
                    // {
                    //     text: '算法仓库',
                    //     link: 'https://github.com/OBKoro1/Brush_algorithm'
                    // }
                ]
            }
        ],
        sidebar: {
            '/accumulate/': [
                '/accumulate/', // accumulate文件夹的README.md 不是下拉框形式
                {
                    title: 'JS',
                    children: [
                        '/accumulate/JS/Javascript工具函数大全', // 以docs为根目录来查找文件
                        '/accumulate/JS/用一道大厂面试题带你搞懂事件循环机制'
                        // 上面地址查找的是：docs>accumulate>JS>test.md 文件
                        // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
                    ]
                },
                {
                    title: 'Vue',
                    children: [
                        '/accumulate/Vue/Vue项目接入Eslint与Prettier', // 以docs为根目录来查找文件
                    ]
                },
                {
                    title: '微信小程序',
                    children: [
                        '/accumulate/微信小程序/微信小程序常见开发技巧', // 以docs为根目录来查找文件
                        '/accumulate/微信小程序/微信小程序组件height高度自适应', // 以docs为根目录来查找文件
                    ]
                },
                {
                    title: 'Git',
                    children: [
                        '/accumulate/Git/Git的骚操作你都会嘛', // 以docs为根目录来查找文件
                    ]
                },
                {
                    title: 'React',
                    children: [
                        '/accumulate/React/AntDesignPro中台项目迁移Typescript，并接入Eslint+Prettier代码格式化', // 以docs为根目录来查找文件
                        '/accumulate/React/Electron+React+七牛云开发跨平台云文档', // 以docs为根目录来查找文件
                        '/accumulate/React/React+Typescript最佳实践'
                    ]
                },
            ],
            // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
            '/algorithm/': [
                '/algorithm/',
                {
                    title: '第二组侧边栏下拉框的标题1',
                    children: [
                        '/algorithm/simple/test'
                    ]
                }
            ]
        }
    }
};
