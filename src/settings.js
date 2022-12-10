import logo from '@assets/images/logo.svg';

export default {

    // 侧边栏标题
    title: 'Ant Design Pro',

    // 全局logo
    logo: logo,

    // 脚部信息
    footer: 'Ant Design ©2022 Created by Ant UED',

    // 该属性与全局redux绑定
    status: {
        // 侧边栏主题
        sideBarTheme: 'dark', // light dark

        // 侧边栏菜单样式
        sideBarStyle: 'circle',// 正方形[square] 圆形边角[circle]

        // 固定头
        fixedHeader: false,

        // 固定菜单
        fixedSideBar: false,

        // 展示头部
        showHeader: true,

        // 展示页脚
        showFooter: true,

        // 展示侧边栏
        showSideBar: true,

        // 展示Logo
        showLogo: true,
    }
};
