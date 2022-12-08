import {Layout} from 'antd';
import './index.scss';
import settings from '@/settings';

const {Footer} = Layout;

const CustomFooter = ({storeSetting}) => {
    return storeSetting.showFooter ? <Footer>{settings.footer}</Footer> : <></>;
}

export default CustomFooter;