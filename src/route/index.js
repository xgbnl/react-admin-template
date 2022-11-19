import lazyLoad from "./lazy";

const defaultRoutes = [
    {
        path: '/',
        element: lazyLoad('@pages/dashboard'),
        visible: true,
        meta:{title: '仪表盘',icon: 'DashboardOutlined'},
    },
    {
        path: '/login',
        element: lazyLoad('@pages/login'),
        visible: true,
        meta:{title: '登录',icon: 'CompassOutlined'},
    },
    {
        path: '/404',
        element: lazyLoad('@pages/notfound'),
        visible: true,
        meta:{title: '404页面',icon: 'CompassOutlined'},
    },
];

export {
    defaultRoutes,
}