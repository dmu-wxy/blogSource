// nav
module.exports = [
  { text: '首页', link: '/' },
  {
	text: '渲染',
	link: '/Graphic/',
	items: [
		{text: '图形学', link: '/pages/7dfc72/'},
		{text: 'OpenGL', link: '/pages/f74434/'},
		{text: 'OpenXR', link: '/pages/5881ef/'},
		{text: 'Android渲染', link: '/pages/5bf1dd/'},
	]
  },
  {
	text: 'C++/Java',
	link: '/language/',
	items: [
		{
		  text: 'C/C++',
		  items: [
				{ text: '《C++ Primer》笔记', link: '/pages/f51b4a/' },
		  ]
		},
		{
		  text: 'Java',
		  link: '/language/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
		  items: [
			// 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
			{
			  text: 'Java',
			  link: '/pages/arraylist/' 
			},
			{
			  text: '《Java核心技术  卷一》笔记', 
			  link: '/note/CoreJavaVolume/' 
			},
			{
		       text: 'Spring',
		       link: '/pages/spring/',
		    },
		  ],
		},
	]
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '算法', link: '/pages/pic/'},
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
