module.exports = {
  title: '测试接口',
  description: '接口准备',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/web/' },
      { text: '小程序', link: '/wechat/' },
      { text: '面试', link: '/interview/' },
      { text: '关于', link: '/about/' }
    ],
    sidebar: [
      {
        title: 'Group 1',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/wechat/'
        ]
      },
      {
        title: 'Group 2',
        children: ['/about/'],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
    // {
    //       // '/web/': [
    //     //   'js/scope',  /* /foo/one.html */
    //     //   'tools/vuepress-build-blog'   /* /foo/two.html */
    //     // ],
    // }
  }
}
