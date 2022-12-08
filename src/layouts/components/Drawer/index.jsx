import {SettingFilled, CloseOutlined} from '@ant-design/icons';
import {Drawer} from "antd";
import {useState} from "react";
import DrawerContent from "./components/content/index.jsx";
import './index.scss';

const AntdDrawer = () => {
    const [open, setOpen] = useState(false);
    const [closable] = useState(false);
    const [drawerVisible] = useState(true);

    const style = {transform: open ? 'unset' : 'translateX(100%)', width: '300px'};

    const showDrawer = () => {
        setOpen(!open);
    };

    return (
        <Drawer closable={closable}
                contentWrapperStyle={style}
                placement="right"
                mask={open}
                open={drawerVisible}>
            <div className='handel' onClick={showDrawer}>
                {open ? <CloseOutlined className='handel-icon'/> : <SettingFilled className='handel-icon'/>}
            </div>
            <DrawerContent/>
        </Drawer>
    );
}

export default AntdDrawer;