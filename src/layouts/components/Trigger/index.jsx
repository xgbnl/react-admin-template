import {memo} from "react";
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import './index.scss';

const Trigger = memo(({collapsed}) => {
    return (
        <span className='anticon anticon-left'>
            {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            </span>
    )
})

export default Trigger;