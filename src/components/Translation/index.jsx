import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';
import {ConfigProvider} from "antd";
import {selectAppLang} from "@/app/reducers/app/AppReducer.js";
import {useAppSelector} from "@/app/hooks.js";

const Translation = ({children}) => {

    const lang = useAppSelector(selectAppLang);

    return (
        <ConfigProvider locale={lang === 'zh_cn' ? zhCN : enUS}>
            {children}
        </ConfigProvider>
    )
}

export default Translation;