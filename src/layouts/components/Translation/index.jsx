import {TranslationOutlined} from '@ant-design/icons';
import {Dropdown, Space} from "antd";
import {useAppDispatch} from "@/app/hooks.js";
import {setLang} from "@/app/reducers/app/AppReducer.js";
import './index.scss';

const Translation = () => {

    const dispatch = useAppDispatch();

    const onClick = (lang) => {
        dispatch(setLang(lang));
    }

    const items = [
        {
            key: '0',
            label: (
                <Space>
                    <span>🇺🇸</span>
                    <span onClick={() => onClick('en_US')}>English</span>
                </Space>
            ),
        },
        {
            key: '1',
            label: (
                <Space>
                    <span>🇨🇳</span>
                    <span onClick={() => onClick('zh_CN')}>简体中文</span>
                </Space>
            ),

        }
    ];

    return (
        <Dropdown menu={{items}}>
            <div className='translation-container'>
                <TranslationOutlined className='translation'/>
            </div>
        </Dropdown>
    );
}

export default Translation;