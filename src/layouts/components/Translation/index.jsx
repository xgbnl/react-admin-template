import {TranslationOutlined} from '@ant-design/icons';
import {Tooltip} from "antd";
import {useAppDispatch, useAppSelector} from "@/app/hooks.js";
import {selectAppLang, setLang} from "@/app/reducers/app/AppReducer.js";
import './index.scss';

const Translation = () => {

    const lang = useAppSelector(selectAppLang);

    const dispatch = useAppDispatch();

    const onClick = () => {
        const localLang = lang === 'zh_CN' ? 'en_US' : 'zh_CN';
        dispatch(setLang(localLang));
    }

    return (
        <Tooltip placement="bottom" title='中文/English'>
            <div className='translation-container' onClick={onClick}>
                <TranslationOutlined className='translation'/>
            </div>
        </Tooltip>
    );
}

export default Translation;