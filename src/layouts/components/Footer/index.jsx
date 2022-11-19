import {Layout} from 'antd';
import './index.scss';

const {Footer} = Layout;

const CustomFooter = ({content}) => {
    return <Footer>{content}</Footer>
}

export default CustomFooter;