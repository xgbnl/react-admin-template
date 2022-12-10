import {Layout} from 'antd';
import settings from '@/settings';
import './index.scss';

const {Footer} = Layout;

const CustomFooter = ({storeSetting}) => {
    return storeSetting.showFooter ? <Footer>{settings.footer}</Footer> : null
}

export default CustomFooter;