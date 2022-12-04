import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';
import {ConfigProvider} from "antd";
import {selectAppLang} from "@/app/reducers/app/AppReducer.js";
import {useAppSelector} from "@/app/hooks.js";
import {useAppRoutes} from "@/router/module/permission.jsx";
import Middleware from "@components/middleware/Middleware.jsx";

const App = () => {
    const lang = useAppSelector(selectAppLang);
    return <ConfigProvider locale={lang === 'zh_CN' ? zhCN : enUS}>{useAppRoutes()}</ConfigProvider>
}

export default Middleware(App);