import {TranslationOutlined} from '@ant-design/icons';
import {Tooltip} from "antd";
import './index.scss';

const Translation = () => {
    return (
        <Tooltip placement="bottom" title='中文/English'>
            <div className='translation-container'>
                <TranslationOutlined className='translation'/>
            </div>
        </Tooltip>
    );
}

export default Translation;