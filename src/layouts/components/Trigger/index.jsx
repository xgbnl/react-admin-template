import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import './index.scss';

const Trigger = ({collapsed}) => {
    return (
        <span className='anticon anticon-left'>
            {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            </span>
    )
}

export default Trigger;