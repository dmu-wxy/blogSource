// nav
module.exports = [
  { text: '首页', link: '/' },
  {
	text: 'C++',
	link: '/pages/f51b4a/',
	items: [
		{
			text: '学习笔记',
			items: [
			  { text: '《C++ Primer》笔记', link: '/pages/f51b4a/' },
			],
		  }
	]
  },
  {
    text: 'java',
    link: '/java/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: 'Java',
        items: [
          { text: ' 集合', link: '/pages/arraylist/' },
          { text: ' 类', link: '/pages/class/' },
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: '《Java核心技术  卷一》笔记', link: '/note/CoreJavaVolume/' }
        ],
      },
      {
		text: 'Spring',
		link: '/spring/',
		items: [
		  { text: ' Spring', link: '/pages/spring/' },
		  { text: ' SpringBoot', link: '/pages/springboot/' },
		],
	  },
    ],
  },
  {
	text: 'XR',
	link: '/xr/',
	items: [
    {text: 'OpenXR', link: '/pages/5881ef/'}
	]
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '算法', link: '/algorithm/'},
      { text: '面试', link: '/pages/b4a65f/' }
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
      { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
