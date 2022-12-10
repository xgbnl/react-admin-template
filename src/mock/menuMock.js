
export default {
    msg: null,
    code: 200,
    data: {
        list: [
            {
                title: '仪表盘',
                path: '/dashboard',
                element: 'pages/dashboard',
                name: 'Dashboard',
                visible: '可见',
                icon: '',
                key: '1',
            },
            {
                title: '权限管理',
                path: '/permission',
                name: 'Permission',
                visible: '可见',
                icon: '',
                key: '2',
                children: [
                    {
                        title: '菜单管理',
                        path: '/permission/menus',
                        element: 'pages/permission/menu',
                        name: 'Menu',
                        visible: '可见',
                        icon: '',
                        key: '3',
                    },
                ]
            },
        ]
    },
    total: 2,
    pageSize: 10,
    pageNum: 1,
};