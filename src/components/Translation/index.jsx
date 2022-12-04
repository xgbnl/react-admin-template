import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';
import {ConfigProvider} from "antd";
import {selectLang} from "@/app/reducers/app/AppReducer.js";
import {useAppSelector, useAppDispatch} from "@/app/hooks.js";


const Translation = (App) => {

    const lang = useAppSelector(selectLang);

    return (
        <ConfigProvider locale={lang === 'zh_cn' ? zhCN : enUS}>
            <App/>
        </ConfigProvider>
    )
}

export default Translation;