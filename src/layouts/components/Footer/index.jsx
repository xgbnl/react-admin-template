import {Layout} from 'antd';
import './index.scss';
import settings from '@/settings';
import {memo} from "react";

const {Footer} = Layout;

const CustomFooter = memo(({storeSetting}) => {
    return storeSetting.showFooter ? <Footer>{settings.footer}</Footer> : <></>
});

export default CustomFooter;