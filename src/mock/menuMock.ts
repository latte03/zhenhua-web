export interface Menu {
  name: string
  path: string
  children?: Menu[]
}
export const menuData: Menu[] = [
  {
    name: '首页',
    path: '/'
  },
  {
    name: '关于镇华',
    path: '/about',
    children: [
      {
        name: '集团介绍',
        path: '/about/introduce'
      },
      {
        name: '集团文化',
        path: '/about/culture'
      },
      {
        name: '组织架构',
        path: '/about/organizational'
      },
      {
        name: '企业荣誉',
        path: '/about/honor'
      }
    ]
  },
  {
    name: '业务板块',
    path: '/business',
    children: [
      {
        name: '工程建设',
        path: '/business/engineering'
      },
      {
        name: '新能源投资运营',
        path: '/business/new-energy'
      },
      {
        name: '智能电气研发',
        path: '/business/electrical'
      },
      {
        name: '电气设备生产',
        path: '/business/electrical-equipment'
      }
    ]
  },
  {
    name: '新闻资讯',
    path: '/news',
    children: [
      {
        name: '镇华动态',
        path: '/news/dynamics'
      },
      {
        name: '行业资讯',
        path: '/news/industry-information'
      },
      {
        name: '现场风采',
        path: '/news/site-elegance'
      },
      {
        name: '公示公告',
        path: '/news/public-announcement'
      }
    ]
  },
  {
    name: '信息公开',
    path: '/public',
    children: [
      {
        name: '招采信息',
        path: '/public/procurement'
      },
      {
        name: '招聘信息',
        path: '/news/recruitment'
      }
    ]
  },
  {
    name: '联系我们',
    path: '/contact'
  }
]
