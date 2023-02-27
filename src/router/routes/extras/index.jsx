import {lazyLoad} from '@/router/providers/lazyLoad.jsx';
import {end}      from '@/supports/arr';

const anyRoute = [
    {
        path: '*',
        hidden: true,
        name: 'NotFound',
        meta: {title: '页面好像走丢了~'},
        element: lazyLoad(() => import('@/pages/not-found')),
    }
];

const getNotFoundPage = () => {
    return end(anyRoute);
}

const accessRoute = [
    {
        path: 'authority',
        name: 'Authority',
        hidden: true,
        meta: {title: '您没有权限访问~'},
        element: lazyLoad(() => import('@/pages/access')),
    },
];

export {
    anyRoute,
    accessRoute,
    getNotFoundPage,
};