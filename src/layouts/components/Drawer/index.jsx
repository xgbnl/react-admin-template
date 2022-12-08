import {SettingFilled, CloseOutlined} from '@ant-design/icons';
import {Drawer} from "antd";
import {useState} from "react";
import './index.scss';

const AntdDrawer = () => {
    const [open, setOpen] = useState(false);
    const [closable] = useState(false);
    const [drawerVisible] = useState(true);

    const showDrawer = () => {
        setOpen(!open);
    };

    return (
        <Drawer closable={closable}
                contentWrapperStyle={{transform: open ? 'unset' : 'translateX(100%)', width: '300px'}}
                placement="right"
                mask={open}
                open={drawerVisible}>
            <div className='handel' onClick={showDrawer}>
                {open ? <CloseOutlined className='handel-icon'/> : <SettingFilled className='handel-icon'/>}
            </div>
        </Drawer>
    );
}

export default AntdDrawer;