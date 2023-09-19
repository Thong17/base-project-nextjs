export const sideBar: any = [
  {
    route: '/home',
    title: 'HOME',
    icon: <span>H</span>,
  },
  {
    route: '/admin',
    title: 'ADMIN',
    icon: <span>H</span>,
    permission: 'admin',
    children: [
      {
        route: '/admin/role',
        title: 'ROLE',
        icon: <span>H</span>,
      },
      {
        route: '/admin/user',
        title: 'USER',
        icon: <span>H</span>,
        permission: 'user'
      },
    ]
  },
]
