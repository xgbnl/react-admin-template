export default [
    {
        title: '仪表盘',
        path: '/dashboard',
        element: 'pages/dashboard',
        name: 'Dashboard',
        visible:true,
        icon: '',
        key: '1',
    },
    {
        title: '权限管理',
        path: '/permission',
        name: 'Permission',
        visible:true,
        icon: '',
        key: '2',
        children:[
            {
                title: '菜单管理',
                path: '/permission/menus',
                element: 'pages/permission/menu',
                name: 'Menu',
                visible:true,
                icon: '',
                key: '3',

            },
        ]
    },
];